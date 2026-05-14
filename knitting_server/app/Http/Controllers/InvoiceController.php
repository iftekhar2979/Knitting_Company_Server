<?php

namespace App\Http\Controllers;

use App\Models\BillInformation;
use App\Models\Order;
use App\Models\ProformaInvoice;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class InvoiceController extends Controller
{
    private const PROFORMA_FIELDS = [
        'style',
        'fabricsName',
        'fabricsId',
        'description',
        'finishDia',
        'unitPrice',
        'totalQuantity',
        'amount',
        'companyId',
        'buyerId',
        'containOrders',
        'piName',
        'piNumber',
        'invoiceAmount',
        'invoiceQuantity',
        'season',
        'billingWay',
        'created_at',
    ];

    private const BILL_FIELDS = [
        'billNumber',
        'unitPrice',
        'amount',
        'invoiceAmount',
        'invoiceQuantity',
        'containOrders',
        'companyId',
        'buyerId',
        'fabricsId',
        'created_at',
    ];

    public function storeProformaInvoice(Request $request)
    {
        $body = $this->invoiceRows($request);
        if (empty($body)) {
            return response()->json(['error' => 'Empty request body'], 400);
        }

        try {
            $result = DB::transaction(function () use ($body) {
                $containOrders = $body[0]['containOrders'] ?? null;
                if (!$containOrders) {
                    throw new \RuntimeException('Missing required proforma invoice field: containOrders');
                }

                $orderNumbers = explode('_', $containOrders);
                $orders = Order::with('company')->whereIn('orderNumber', $orderNumbers)->get();
                if ($orders->isEmpty()) {
                    throw new \RuntimeException('No orders found for the given numbers');
                }

                $first = $orders->first();
                $piNumber = 'TKCF-'.$first->company->shortForm.'-'.$first->id.'/'.now()->year;
                $ordersByFabric = $orders->keyBy(fn ($order) => $order->fabricsId ?: $order->fabricsName);

                Order::whereIn('orderNumber', $orderNumbers)->update([
                    'isProformaInvoiceCreated' => true,
                    'proformaInvoiceId' => $containOrders,
                ]);

                return collect($body)->map(function ($item) use ($first, $piNumber, $ordersByFabric, $containOrders) {
                    $sourceOrder = $this->matchingOrderForInvoiceItem($item, $ordersByFabric, $first);
                    $invoice = [
                        'style' => $item['style'] ?? null,
                        'fabricsName' => $item['fabricsName'] ?? $sourceOrder->fabricsName,
                        'fabricsId' => $item['fabricsId'] ?? $sourceOrder->fabricsId,
                        'description' => $item['description'] ?? null,
                        'finishDia' => $item['finishDia'] ?? null,
                        'unitPrice' => $item['unitPrice'] ?? null,
                        'totalQuantity' => $item['totalQuantity'] ?? null,
                        'amount' => $item['amount'] ?? null,
                        'companyId' => $item['companyId'] ?? $sourceOrder->companyId,
                        'buyerId' => $item['buyerId'] ?? $sourceOrder->buyerId ?? $first->buyerId,
                        'containOrders' => $item['containOrders'] ?? $containOrders,
                        'piName' => $item['piName'] ?? null,
                        'piNumber' => $piNumber,
                        'invoiceAmount' => $item['invoiceAmount'] ?? null,
                        'invoiceQuantity' => $item['invoiceQuantity'] ?? null,
                        'season' => $first->season,
                        'billingWay' => $item['billingWay'] ?? null,
                        'created_at' => isset($item['createdAt']) ? date('Y-m-d H:i:s', strtotime($item['createdAt'])) : now(),
                    ];

                    $this->assertRequiredFields($invoice, [
                        'fabricsName',
                        'unitPrice',
                        'amount',
                        'companyId',
                        'containOrders',
                        'piName',
                        'invoiceAmount',
                        'invoiceQuantity',
                        'season',
                        'billingWay',
                    ], 'proforma invoice');

                    return ProformaInvoice::create($this->onlyKeys($invoice, self::PROFORMA_FIELDS));
                })->values();
            });

            return response()->json($result);
        } catch (\Throwable $e) {
            return response()->json(['error' => $e->getMessage() ?: 'Proforma Invoice was not created correctly'], 400);
        }
    }

    public function storeBill(Request $request)
    {
        $body = $this->invoiceRows($request);
        if (empty($body)) {
            return response()->json(['error' => 'Empty request body'], 400);
        }

        try {
            $result = DB::transaction(function () use ($body) {
                $containOrders = $body[0]['containOrders'] ?? null;
                if (!$containOrders) {
                    throw new \RuntimeException('Missing required bill field: containOrders');
                }

                $orderNumbers = explode('_', $containOrders);
                $orders = Order::with('company')->whereIn('orderNumber', $orderNumbers)->get();
                if ($orders->isEmpty()) {
                    throw new \RuntimeException('No orders found for the given numbers');
                }

                $first = $orders->first();
                $billNumber = 'TKCF-'.$first->company->shortForm.'-'.$first->id.'/'.now()->year;
                $ordersByFabric = $orders->keyBy(fn ($order) => $order->fabricsId ?: $order->fabricsName);

                Order::whereIn('orderNumber', $orderNumbers)->update([
                    'billNumber' => $billNumber,
                    'isBillCreated' => true,
                    'isProformaInvoiceCreated' => false,
                ]);

                return collect($body)->map(function ($item) use ($first, $billNumber, $ordersByFabric, $containOrders) {
                    $sourceOrder = $this->matchingOrderForInvoiceItem($item, $ordersByFabric, $first);
                    $bill = [
                        'billNumber' => $billNumber,
                        'unitPrice' => $item['unitPrice'] ?? null,
                        'amount' => $item['amount'] ?? null,
                        'invoiceAmount' => $item['invoiceAmount'] ?? null,
                        'invoiceQuantity' => $item['invoiceQuantity'] ?? null,
                        'containOrders' => $item['containOrders'] ?? $containOrders,
                        'companyId' => $item['companyId'] ?? $sourceOrder->companyId,
                        'buyerId' => $item['buyerId'] ?? $sourceOrder->buyerId ?? $first->buyerId,
                        'fabricsId' => $item['fabricsId'] ?? $sourceOrder->fabricsId,
                        'created_at' => isset($item['createdAt']) ? date('Y-m-d H:i:s', strtotime($item['createdAt'])) : now(),
                    ];

                    $this->assertRequiredFields($bill, [
                        'unitPrice',
                        'amount',
                        'invoiceAmount',
                        'invoiceQuantity',
                        'containOrders',
                        'companyId',
                    ], 'bill');

                    return $this->formatBillInformation(
                        BillInformation::create($this->onlyKeys($bill, self::BILL_FIELDS))
                    );
                })->values();
            });

            return response()->json($result);
        } catch (\Throwable $e) {
            return response()->json(['error' => $e->getMessage() ?: 'Bill was not created correctly'], 400);
        }
    }

    public function billIndex(Request $request)
    {
        try {
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
                ->selectRaw('MAX(bill_informations.created_at) as createdAt')
                ->selectRaw('MAX(companies.companyName) as companyName')
                ->selectRaw('MAX(buyers.buyerName) as buyerName')
                ->selectRaw('MAX(fabrics_types.fabricsName) as fabricsName')
                ->groupBy('bill_informations.containOrders')
                ->orderByRaw('MAX(bill_informations.created_at) '.$sort)
                ->skip(($page - 1) * $limit)
                ->take($limit)
                ->get();

            return response()->json(['data' => $data, 'total' => $total, 'page' => $page, 'limit' => $limit]);
        } catch (\Throwable $e) {
            return response()->json(['error' => 'Internal Server Error'], 500);
        }
    }

    public function proformaInvoiceIndex(Request $request)
    {
        try {
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
                ->selectRaw('id, piNumber, fabricsName, totalQuantity, amount, containOrders, billingWay, created_at as createdAt, companyId, buyerId')
                ->orderBy('created_at', $sort)
                ->get();

            return response()->json(['data' => $data, 'total' => $total, 'page' => $page, 'limit' => $limit]);
        } catch (\Throwable $e) {
            return response()->json(['error' => 'Internal Server Error'], 500);
        }
    }

    public function showProformaInvoice($id)
    {
        try {
            return response()->json(ProformaInvoice::with(['company', 'buyer'])->where('containOrders', $id)->get());
        } catch (\Throwable $e) {
            return response()->json(['error' => 'Nothing Found !!!'], 404);
        }
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
                ->selectRaw('id, companyName, buyerName, fabricsId, fabricsName, deliveredQuantity, season, created_at as createdAt, billNumber, companyId, buyerId, orderNumber')
                ->get();

            if ($orders->isEmpty()) {
                throw new \RuntimeException('No orders found');
            }
            if (!$orders->first()->billNumber) {
                throw new \RuntimeException('Bill Number is not found !');
            }

            $bills = BillInformation::where('billNumber', $orders->first()->billNumber)->get();
            $orders->each(function ($order) use ($bills) {
                $bill = $bills->firstWhere('fabricsId', $order->fabricsId);
                $order->setAttribute('billDetails', $bill ? $this->formatBillInformation($bill) : null);
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

    private function onlyKeys(array $data, array $keys): array
    {
        return array_intersect_key($data, array_flip($keys));
    }

    private function invoiceRows(Request $request): array
    {
        $input = $request->all();

        if (isset($input['containOrders'])) {
            return [$input];
        }

        return collect($input)
            ->filter(fn ($item, $key) => (is_int($key) || ctype_digit((string) $key)) && is_array($item))
            ->values()
            ->all();
    }

    private function matchingOrderForInvoiceItem(array $item, $ordersByFabric, Order $fallback): Order
    {
        if (isset($item['fabricsId']) && $ordersByFabric->has($item['fabricsId'])) {
            return $ordersByFabric->get($item['fabricsId']);
        }

        if (isset($item['fabricsName']) && $ordersByFabric->has($item['fabricsName'])) {
            return $ordersByFabric->get($item['fabricsName']);
        }

        return $fallback;
    }

    private function assertRequiredFields(array $data, array $fields, string $resource): void
    {
        foreach ($fields as $field) {
            if (!array_key_exists($field, $data) || $data[$field] === null || $data[$field] === '') {
                throw new \RuntimeException("Missing required {$resource} field: {$field}");
            }
        }
    }

    private function formatBillInformation(BillInformation $bill): array
    {
        $data = $bill->toArray();
        $data['createdAt'] = $data['created_at'] ?? null;
        $data['updatedAt'] = $data['updated_at'] ?? null;
        unset($data['created_at'], $data['updated_at']);

        return $data;
    }
}
