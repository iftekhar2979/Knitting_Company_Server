<?php

namespace App\Http\Controllers;

use App\Models\BillInformation;
use App\Models\Order;
use App\Models\ProformaInvoice;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class InvoiceController extends Controller
{
    public function storeProformaInvoice(Request $request)
    {
        $body = $request->all();
        if (empty($body)) {
            return response()->json(['error' => 'Empty request body'], 400);
        }

        try {
            $result = DB::transaction(function () use ($body) {
                $orderNumbers = explode('_', $body[0]['containOrders']);
                $orders = Order::with('company')->whereIn('orderNumber', $orderNumbers)->get();
                if ($orders->isEmpty()) {
                    throw new \RuntimeException('No orders found for the given numbers');
                }

                $first = $orders->first();
                $piNumber = 'TKCF-'.$first->company->shortForm.'-'.$first->id.'/'.now()->year;

                Order::whereIn('orderNumber', $orderNumbers)->update([
                    'isProformaInvoiceCreated' => true,
                    'proformaInvoiceId' => $body[0]['containOrders'],
                ]);

                return collect($body)->map(function ($item) use ($first, $piNumber) {
                    $item['buyerId'] = $item['buyerId'] ?? $first->buyerId;
                    $item['piNumber'] = $piNumber;
                    $item['season'] = $first->season;
                    $item['created_at'] = $item['createdAt'] ?? now();
                    unset($item['createdAt']);

                    return ProformaInvoice::create($item);
                })->values();
            });

            return response()->json($result);
        } catch (\Throwable $e) {
            return response()->json(['error' => $e->getMessage() ?: 'Proforma Invoice was not created correctly'], 400);
        }
    }

    public function storeBill(Request $request)
    {
        $body = $request->all();
        if (empty($body)) {
            return response()->json(['error' => 'Empty request body'], 400);
        }

        try {
            $result = DB::transaction(function () use ($body) {
                $orderNumbers = explode('_', $body[0]['containOrders']);
                $orders = Order::with('company')->whereIn('orderNumber', $orderNumbers)->get();
                if ($orders->isEmpty()) {
                    throw new \RuntimeException('No orders found for the given numbers');
                }

                $first = $orders->first();
                $billNumber = 'TKCF-'.$first->company->shortForm.'-'.$first->id.'/'.now()->year;

                Order::whereIn('orderNumber', $orderNumbers)->update([
                    'billNumber' => $billNumber,
                    'isBillCreated' => true,
                    'isProformaInvoiceCreated' => false,
                ]);

                return collect($body)->map(function ($item) use ($first, $billNumber) {
                    $item['billNumber'] = $billNumber;
                    $item['buyerId'] = $item['buyerId'] ?? $first->buyerId;
                    $item['created_at'] = $item['createdAt'] ?? now();
                    unset($item['createdAt']);

                    return BillInformation::create($item);
                })->values();
            });

            return response()->json($result);
        } catch (\Throwable $e) {
            return response()->json(['error' => $e->getMessage() ?: 'Bill was not created correctly'], 400);
        }
    }

    public function billIndex(Request $request)
    {
        $page = max(1, (int) $request->query('page', 1));
        $limit = max(1, (int) $request->query('limit', 50));
        $sort = strtoupper($request->query('sort', 'DESC')) === 'ASC' ? 'ASC' : 'DESC';

        $base = BillInformation::query()
            ->leftJoin('companies', 'companies.id', '=', 'bill_informations.companyId')
            ->leftJoin('buyers', 'buyers.id', '=', 'bill_informations.buyerId')
            ->leftJoin('fabrics_types', 'fabrics_types.id', '=', 'bill_informations.fabricsId');

        if ($request->filled('term')) {
            $base->where('bill_informations.billNumber', 'like', '%'.$request->query('term').'%');
        }
        if ($request->filled('companyName')) {
            $base->where('companies.companyName', 'like', '%'.$request->query('companyName').'%');
        }
        if ($request->filled('buyerName')) {
            $base->where('buyers.buyerName', 'like', '%'.$request->query('buyerName').'%');
        }

        $total = (clone $base)->distinct('bill_informations.containOrders')->count('bill_informations.containOrders');
        $data = $base->select('bill_informations.containOrders')
            ->selectRaw('MAX(bill_informations.id) as id')
            ->selectRaw('MAX(bill_informations.billNumber) as billNumber')
            ->selectRaw('SUM(bill_informations.invoiceQuantity) as invoiceQuantity')
            ->selectRaw('SUM(bill_informations.invoiceAmount) as invoiceAmount')
            ->selectRaw('MAX(bill_informations.created_at) as created_at')
            ->selectRaw('MAX(companies.companyName) as companyName')
            ->selectRaw('MAX(buyers.buyerName) as buyerName')
            ->selectRaw('MAX(fabrics_types.fabricsName) as fabricsName')
            ->groupBy('bill_informations.containOrders')
            ->orderByRaw('MAX(bill_informations.created_at) '.$sort)
            ->skip(($page - 1) * $limit)
            ->take($limit)
            ->get();

        return response()->json(['data' => $data, 'total' => $total, 'page' => $page, 'limit' => $limit]);
    }

    public function proformaInvoiceIndex(Request $request)
    {
        $page = max(1, (int) $request->query('page', 1));
        $limit = max(1, (int) $request->query('limit', 50));
        $sort = strtoupper($request->query('sort', 'DESC')) === 'ASC' ? 'ASC' : 'DESC';

        $base = ProformaInvoice::with(['company:id,companyName', 'buyer:id,buyerName']);
        if ($request->filled('term')) {
            $base->where('piNumber', 'like', '%'.$request->query('term').'%');
        }
        if ($request->filled('companyName')) {
            $base->whereHas('company', fn ($query) => $query->where('companyName', 'like', '%'.$request->query('companyName').'%'));
        }
        if ($request->filled('buyerName')) {
            $base->whereHas('buyer', fn ($query) => $query->where('buyerName', 'like', '%'.$request->query('buyerName').'%'));
        }

        $total = (clone $base)->distinct('containOrders')->count('containOrders');
        $ids = (clone $base)->selectRaw('MAX(id) as id')
            ->groupBy('containOrders')
            ->orderByRaw('MAX(created_at) '.$sort)
            ->skip(($page - 1) * $limit)
            ->take($limit)
            ->pluck('id');

        $data = ProformaInvoice::with(['company:id,companyName', 'buyer:id,buyerName'])
            ->whereIn('id', $ids)
            ->select('id', 'piNumber', 'fabricsName', 'totalQuantity', 'amount', 'containOrders', 'billingWay', 'created_at', 'companyId', 'buyerId')
            ->orderBy('created_at', $sort)
            ->get();

        return response()->json(['data' => $data, 'total' => $total, 'page' => $page, 'limit' => $limit]);
    }

    public function showProformaInvoice($id)
    {
        return response()->json(ProformaInvoice::with(['company', 'buyer'])->where('containOrders', $id)->get());
    }

    public function showBill($id)
    {
        try {
            $orderNumbers = str_contains($id, '_') ? explode('_', $id) : [$id];
            $orders = Order::with([
                'company:id,companyName,location',
                'buyer:id,buyerName',
                'deliveryDetails' => fn ($query) => $query->select('id', 'orderId', 'created_at', 'deliveredQuantity')->with('order:id,buyerName,sbNumber,programNumber,jobNumber,bookingNumber'),
            ])->whereIn('orderNumber', $orderNumbers)
                ->select('id', 'companyName', 'buyerName', 'fabricsId', 'fabricsName', 'deliveredQuantity', 'season', 'created_at', 'billNumber', 'companyId', 'buyerId', 'orderNumber')
                ->get();

            if ($orders->isEmpty()) {
                throw new \RuntimeException('No orders found');
            }
            if (!$orders->first()->billNumber) {
                throw new \RuntimeException('Bill Number is not found !');
            }

            $bills = BillInformation::where('billNumber', $orders->first()->billNumber)->get();
            $orders->each(function ($order) use ($bills) {
                $order->setAttribute('billDetails', $bills->firstWhere('fabricsId', $order->fabricsId));
            });

            return response()->json($orders);
        } catch (\Throwable $e) {
            return response()->json(['error' => $e->getMessage() ?: 'Nothing Found !!!'], 404);
        }
    }

    public function destroyProformaInvoice($id)
    {
        try {
            $orderNumbers = explode('_', $id);
            return response()->json(DB::transaction(function () use ($id, $orderNumbers) {
                $deleted = ProformaInvoice::where('containOrders', $id)->delete();
                Order::whereIn('orderNumber', $orderNumbers)->update([
                    'isProformaInvoiceCreated' => false,
                    'proformaInvoiceId' => '',
                ]);

                return $deleted;
            }));
        } catch (\Throwable $e) {
            return response()->json(['error' => 'Proforma Invoice did not Deleted Correctly'], 400);
        }
    }

    public function destroyBill($id)
    {
        try {
            $orderNumbers = explode('_', $id);
            return response()->json(DB::transaction(function () use ($id, $orderNumbers) {
                $deleted = BillInformation::where('containOrders', $id)->delete();
                Order::whereIn('orderNumber', $orderNumbers)->update([
                    'isProformaInvoiceCreated' => false,
                    'proformaInvoiceId' => '',
                    'isBillCreated' => false,
                    'billNumber' => '',
                ]);

                return $deleted;
            }));
        } catch (\Throwable $e) {
            return response()->json(['error' => 'Bill did not Deleted Correctly'], 400);
        }
    }

    public function changeBillNumber(Request $request, $id)
    {
        try {
            $orderNumbers = str_contains($id, '_') ? explode('_', $id) : [$id];
            $billNumber = $request->query('billNumber');

            BillInformation::where('containOrders', $id)->update(['billNumber' => $billNumber]);
            Order::whereIn('orderNumber', $orderNumbers)->update(['billNumber' => $billNumber]);

            return response()->json(Order::whereIn('orderNumber', $orderNumbers)->get());
        } catch (\Throwable $e) {
            return response()->json(['error' => $e->getMessage()], 400);
        }
    }
}
