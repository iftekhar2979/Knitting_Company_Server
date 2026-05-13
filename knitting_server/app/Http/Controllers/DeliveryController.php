<?php

namespace App\Http\Controllers;

use App\Models\DeliveryDetails;
use App\Models\Order;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class DeliveryController extends Controller
{
    public function index(Request $request)
    {
        $page = max(1, (int) $request->query('page', 1));
        $limit = max(1, (int) $request->query('limit', 30));
        $sort = strtoupper($request->query('sort', 'DESC')) === 'ASC' ? 'ASC' : 'DESC';

        $query = DeliveryDetails::with([
            'order' => fn ($query) => $query
                ->select('id', 'unit', 'bookingNumber', 'sbNumber', 'fabricsName', 'orderNumber', 'buyerName', 'programNumber', 'jobNumber', 'season', 'companyId')
                ->with(['company:id,companyName,location', 'details']),
        ]);

        if ($request->filled('chalanNumber')) {
            $query->where('id', (int) $request->query('chalanNumber'));
        }

        $query->whereHas('order', function ($query) use ($request) {
            if ($request->filled('orderNumber')) {
                $query->where('orderNumber', 'like', '%'.$request->query('orderNumber').'%');
            }
            if ($request->filled('buyerName')) {
                $query->where('buyerName', 'like', '%'.$request->query('buyerName').'%');
            }
            if ($request->filled('companyName')) {
                $query->whereHas('company', fn ($company) => $company->where('companyName', 'like', '%'.$request->query('companyName').'%'));
            }
        });

        $total = (clone $query)->count();
        $data = $query->orderBy('created_at', $sort)->skip(($page - 1) * $limit)->take($limit)->get();

        return response()->json([
            'data' => $data,
            'total' => $total,
            'page' => $page,
            'limit' => $limit,
            'totalPages' => (int) ceil($total / $limit),
        ]);
    }

    public function show($id)
    {
        return response()->json(DeliveryDetails::with([
            'order' => fn ($query) => $query
                ->select('id', 'jobNumber', 'sbNumber', 'fabricsName', 'orderNumber', 'buyerName', 'programNumber', 'bookingNumber', 'unit', 'season', 'companyId')
                ->with(['company:id,companyName,location', 'details']),
        ])->find($id));
    }

    public function forOrder($id)
    {
        return response()->json(DeliveryDetails::where('orderId', $id)->orderByDesc('created_at')->get());
    }

    public function store(Request $request)
    {
        try {
            $result = DB::transaction(function () use ($request) {
                $order = Order::findOrFail($request->input('from'));
                $amount = (float) $request->input('amount');

                if ($order->restQuantity < $amount) {
                    throw new \RuntimeException("Order {$order->id} does not have enough quantity to transfer. Required: {$amount}, available: {$order->restQuantity}");
                }

                $order->update([
                    'restQuantity' => $order->restQuantity - $amount,
                    'deliveredQuantity' => $order->deliveredQuantity + $amount,
                ]);

                $body = $request->except(['from', 'amount', 'status']);
                $body['orderId'] = $order->id;
                $body['deliveredQuantity'] = $amount;
                DeliveryDetails::create($body);

                return $order->fresh()->load('deliveryDetails');
            });

            return response()->json($result);
        } catch (\Throwable $e) {
            return response()->json(['msg' => 'Delivery not created ', 'message' => $e->getMessage()], 400);
        }
    }

    public function destroy(Request $request)
    {
        try {
            $result = DB::transaction(function () use ($request) {
                $delivery = DeliveryDetails::findOrFail((int) $request->query('from'));
                $order = Order::findOrFail($delivery->orderId);

                $order->update([
                    'restQuantity' => $order->restQuantity + $delivery->deliveredQuantity,
                    'deliveredQuantity' => $order->deliveredQuantity - $delivery->deliveredQuantity,
                ]);

                $delivery->delete();

                return $order->fresh()->load('deliveryDetails');
            });

            return response()->json(['result' => $result, 'isDeleted' => true]);
        } catch (\Throwable $e) {
            return response()->json(['message' => $e->getMessage(), 'isDeleted' => false], 400);
        }
    }

    public function updateQuantity(Request $request)
    {
        try {
            $result = DB::transaction(function () use ($request) {
                $delivery = DeliveryDetails::findOrFail((int) $request->query('from'));
                $amount = (float) $request->query('amount');
                $order = Order::findOrFail($delivery->orderId);
                $diff = $amount - $delivery->deliveredQuantity;

                $order->update([
                    'restQuantity' => $order->restQuantity - $diff,
                    'deliveredQuantity' => $order->deliveredQuantity + $diff,
                ]);

                $delivery->update(['deliveredQuantity' => $amount]);

                return $order->fresh()->load('deliveryDetails');
            });

            return response()->json(['isUpdated' => true, 'result' => $result]);
        } catch (\Throwable $e) {
            return response()->json(['message' => $e->getMessage(), 'isUpdated' => false], 400);
        }
    }

    public function createBill(Request $request)
    {
        try {
            if (!$request->filled('unitPrice')) {
                throw new \RuntimeException('Must need unit price to create bill!');
            }

            $delivery = DeliveryDetails::findOrFail((int) $request->input('chalanId'));
            $delivery->update(['unitPrice' => $request->input('unitPrice')]);

            return response()->json(['status' => 200, 'message' => 'Bill Successfully created!']);
        } catch (\Throwable $e) {
            return response()->json(['error' => $e->getMessage()], 400);
        }
    }

    public function showBill($id)
    {
        try {
            $delivery = DeliveryDetails::select('id', 'deliveredQuantity', 'unitPrice', 'billNumber', 'created_at', 'orderId')
                ->with(['order' => fn ($query) => $query
                    ->select('id', 'season', 'fabricsName', 'programNumber', 'jobNumber', 'sbNumber', 'bookingNumber', 'buyerId', 'companyId')
                    ->with(['buyer', 'company'])])
                ->findOrFail($id);

            return response()->json($delivery);
        } catch (\Throwable $e) {
            return response()->json(['error' => $e->getMessage()]);
        }
    }

    public function billIndex(Request $request)
    {
        $page = max(1, (int) $request->query('page', 1));
        $limit = max(1, (int) $request->query('limit', 50));
        $sort = strtoupper($request->query('sort', 'DESC')) === 'ASC' ? 'ASC' : 'DESC';

        $query = DeliveryDetails::select('id', 'deliveredQuantity', 'unitPrice', 'created_at', 'billNumber', 'orderId')
            ->whereNotNull('unitPrice')
            ->with(['order' => fn ($query) => $query
                ->select('id', 'season', 'fabricsName', 'programNumber', 'jobNumber', 'sbNumber', 'bookingNumber', 'buyerId', 'companyId')
                ->with(['buyer', 'company'])]);

        if ($request->filled('term')) {
            $term = $request->query('term');
            $query->where(function ($query) use ($term) {
                $query->where('billNumber', 'like', '%'.$term.'%');
                if (is_numeric($term)) {
                    $query->orWhere('id', (int) $term);
                }
            });
        }

        $query->whereHas('order', function ($query) use ($request) {
            if ($request->filled('buyerName')) {
                $query->whereHas('buyer', fn ($buyer) => $buyer->where('buyerName', 'like', '%'.$request->query('buyerName').'%'));
            }
            if ($request->filled('companyName')) {
                $query->whereHas('company', fn ($company) => $company->where('companyName', 'like', '%'.$request->query('companyName').'%'));
            }
        });

        $total = (clone $query)->count();
        $data = $query->orderBy('created_at', $sort)->skip(($page - 1) * $limit)->take($limit)->get();

        return response()->json(['data' => $data, 'total' => $total, 'page' => $page, 'limit' => $limit]);
    }

    public function changeBillNumber(Request $request, $id)
    {
        $delivery = DeliveryDetails::where('id', $id)->whereNotNull('unitPrice')->first();
        if (!$delivery) {
            return response()->json(['message' => 'Bill not found or unit price is null'], 404);
        }

        $delivery->update(['billNumber' => $request->query('billNumber')]);

        return response()->json($delivery);
    }

    public function deleteBill($id)
    {
        $delivery = DeliveryDetails::findOrFail($id);
        $delivery->update(['unitPrice' => null, 'billNumber' => null]);

        return response()->json($delivery);
    }
}
