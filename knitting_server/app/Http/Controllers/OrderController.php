<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class OrderController extends Controller
{
    public function index(Request $request)
    {
        return response()->json($this->paginateOrders($request, false));
    }

    public function invoiceIndex(Request $request)
    {
        return response()->json($this->paginateOrders($request, true));
    }

    private function paginateOrders(Request $request, bool $invoice)
    {
        $page = max(1, (int) $request->query('page', 1));
        $limit = max(1, (int) $request->query('limit', 30));
        $sort = strtoupper($request->query('sort', 'DESC')) === 'ASC' ? 'ASC' : 'DESC';

        $query = Order::query()
            ->with([
                'company' => fn ($query) => $query->select('id', 'companyName'),
                'buyer' => fn ($query) => $query->select('id', 'buyerName'),
                'fabricsType' => fn ($query) => $query->select('id', 'fabricsName'),
            ]);

        foreach (['orderNumber', 'season', 'status'] as $field) {
            if (!$invoice && $request->filled($field)) {
                $query->where($field, 'like', '%'.$request->query($field).'%');
            }
        }

        if ($invoice && $request->filled('orderNumber')) {
            $query->where('orderNumber', 'like', '%'.$request->query('orderNumber').'%');
        }

        foreach (['companyName', 'buyerName', 'fabricsName'] as $field) {
            if ($request->filled($field)) {
                $term = '%'.$request->query($field).'%';
                $relation = ['companyName' => 'company', 'buyerName' => 'buyer', 'fabricsName' => 'fabricsType'][$field];
                $query->where(function ($query) use ($field, $relation, $term) {
                    $query->where($field, 'like', $term)
                        ->orWhereHas($relation, fn ($relationQuery) => $relationQuery->where($field, 'like', $term));
                });
            }
        }

        $total = (clone $query)->count();

        if ($invoice) {
            $query->select('id', 'companyName', 'orderNumber', 'fabricsName', 'orderQuantity', 'buyerName', 'isBillCreated', 'isProformaInvoiceCreated')
                ->orderBy('orderQuantity', $sort)
                ->orderByDesc('created_at');
        } else {
            $query->orderBy('created_at', $sort);
        }

        $orders = $query->skip(($page - 1) * $limit)->take($limit)->get();

        return [
            'orders' => $orders,
            'total' => $total,
            'page' => $page,
            'limit' => $limit,
            'totalPages' => (int) ceil($total / $limit),
        ];
    }

    public function show($id)
    {
        return response()->json(Order::with('company')->find($id));
    }

    public function editShow($id)
    {
        return response()->json(Order::with(['company', 'buyer', 'fabricsType', 'details'])->find($id));
    }

    public function quantityInfo($id)
    {
        return response()->json(Order::select('orderQuantity', 'restQuantity', 'deliveredQuantity', 'status')->find($id));
    }

    public function store(Request $request)
    {
        try {
            $body = $request->all();
            $body['buyerId'] = $body['buyerId'] ?? null;

            if (!empty($body['orderNumber']) && Order::where('orderNumber', $body['orderNumber'])->exists()) {
                return response()->json(['message' => 'Order number already exists'], 400);
            }

            return response()->json(Order::create($body));
        } catch (\Throwable $e) {
            return response($e->getMessage(), 400);
        }
    }

    public function update(Request $request, $id)
    {
        try {
            $order = Order::find($id);
            if (!$order) {
                return response()->json(['isUpdated' => false, 'error' => 'Order not found'], 404);
            }

            $order->update($request->all());

            return response()->json(['isUpdated' => true, 'updatedOrder' => $order]);
        } catch (\Throwable $e) {
            return response()->json(['isUpdated' => false, 'error' => $e->getMessage()], 400);
        }
    }

    public function destroy($id)
    {
        try {
            $order = Order::find($id);
            optional($order)->delete();

            return response()->json(['isDeleted' => true, 'updatedOrder' => $order]);
        } catch (\Throwable $e) {
            return response()->json(['isDeleted' => false, 'error' => $e->getMessage()], 400);
        }
    }

    public function findWithPo(Request $request)
    {
        $orderNumbers = collect($request->all())->map(fn ($number) => (string) $number)->values();

        try {
            $companyCount = Order::whereIn('orderNumber', $orderNumbers)->distinct('companyId')->count('companyId');
            if ($companyCount > 1) {
                return response('Order numbers belong to different companies and Different Buyers', 404);
            }

            $result = Order::query()
                ->select('companyId', 'fabricsName', 'fabricsId')
                ->selectRaw('GROUP_CONCAT(id) as orderId')
                ->selectRaw('SUM(deliveredQuantity) as deliveredQuantity')
                ->whereIn('orderNumber', $orderNumbers)
                ->groupBy('companyId', 'fabricsName', 'fabricsId')
                ->get();

            return response()->json($result);
        } catch (\Throwable $e) {
            return response()->json($e->getMessage(), 404);
        }
    }

    public function updateStatus(Request $request, $id)
    {
        if (!$request->filled('status')) {
            return response()->json(['error' => 'Status is required'], 400);
        }

        try {
            $order = Order::findOrFail($id);
            $order->update(['status' => $request->status]);

            return response()->json(['message' => 'Status Updated', 'updatedOrder' => $order]);
        } catch (\Throwable $e) {
            return response()->json(['error' => 'An error occurred while updating the order status'], 500);
        }
    }
}
