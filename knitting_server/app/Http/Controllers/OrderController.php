<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    private const ORDER_FIELDS = [
        'orderNumber',
        'companyId',
        'buyerId',
        'companyName',
        'fabricsName',
        'fabricsId',
        'buyerName',
        'season',
        'programNumber',
        'jobNumber',
        'bookingNumber',
        'sbNumber',
        'orderedDate',
        'targetDate',
        'orderQuantity',
        'deliveredQuantity',
        'restQuantity',
        'unit',
        'status',
        'isBillCreated',
        'isProformaInvoiceCreated',
        'userId',
        'billNumber',
        'unitPrice',
        'proformaInvoiceId',
    ];

    private const REQUIRED_CREATE_FIELDS = [
        'orderNumber',
        'companyId',
        'fabricsName',
        'buyerName',
        'orderQuantity',
        'restQuantity',
        'unit',
        'companyName',
        'buyerId',
        'fabricsId',
        'season',
        'programNumber',
        'jobNumber',
        'bookingNumber',
        'sbNumber',
        'targetDate',
        'status',
    ];

    public function index(Request $request)
    {
        try {
            return response()->json($this->paginateOrders($request, false));
        } catch (\Throwable $e) {
            return response()->json(['error' => 'Internal Server Error'], 500);
        }
    }

    public function invoiceIndex(Request $request)
    {
        try {
            return response()->json($this->paginateOrders($request, true));
        } catch (\Throwable $e) {
            return response()->json(['error' => 'Internal Server Error'], 500);
        }
    }

    private function paginateOrders(Request $request, bool $invoice)
    {
        $page = max(1, (int) $request->query('page', 1));
        $limit = max(1, (int) $request->query('limit', 30));
        $sort = strtoupper($request->query('sort', 'DESC')) === 'ASC' ? 'ASC' : 'DESC';

        $query = Order::query();

        if (!$invoice) {
            $query->with([
                'company' => fn ($query) => $query->select('id', 'companyName'),
                'buyer' => fn ($query) => $query->select('id', 'buyerName'),
                'fabricsType' => fn ($query) => $query->select('id', 'fabricsName'),
            ]);
        }

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
        try {
            return response()->json(Order::with('company')->find($id));
        } catch (\Throwable $e) {
            return response()->json($e->getMessage(), 404);
        }
    }

    public function editShow($id)
    {
        try {
            return response()->json(Order::with(['company', 'buyer', 'fabricsType', 'details'])->find($id));
        } catch (\Throwable $e) {
            return response()->json($e->getMessage(), 404);
        }
    }

    public function quantityInfo($id)
    {
        try {
            return response()->json(Order::select('orderQuantity', 'restQuantity', 'deliveredQuantity', 'status')->find($id));
        } catch (\Throwable $e) {
            return response()->json($e->getMessage(), 404);
        }
    }

    public function store(Request $request)
    {
        try {
            if (!$this->isValidCreatePayload($request)) {
                return response()->json(['message' => 'Invalid request data'], 400);
            }

            $body = $this->orderData($request);
            $body['buyerId'] = $body['buyerId'] ?? null;
            $body['orderedDate'] = $body['orderedDate'] ?? now();

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
            Order::where('id', $id)->update($this->orderData($request));
            $order = Order::find($id);

            return response()->json(['isUpdated' => true, 'updatedOrder' => $order]);
        } catch (\Throwable $e) {
            return response()->json(['isUpdated' => false, 'error' => $e->getMessage()], 400);
        }
    }

    public function destroy($id)
    {
        try {
            $order = Order::find($id);
            Order::where('id', $id)->delete();

            return response()->json(['isDeleted' => true, 'updatedOrder' => $order]);
        } catch (\Throwable $e) {
            return response()->json(['isDeleted' => false, 'error' => $e->getMessage()], 400);
        }
    }

    public function findWithPo(Request $request)
    {
        $orderNumbers = collect($request->all())->map(fn ($number) => (string) $number)->values();

        try {
            $ordersCheck = Order::query()
                ->select('companyId')
                ->whereIn('orderNumber', $orderNumbers)
                ->groupBy('companyId')
                ->get();

            if ($ordersCheck->count() > 1) {
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

    private function orderData(Request $request): array
    {
        return $request->only(self::ORDER_FIELDS);
    }

    private function isValidCreatePayload(Request $request): bool
    {
        foreach (self::REQUIRED_CREATE_FIELDS as $field) {
            if (!$request->has($field) || $request->input($field) === null || $request->input($field) === '') {
                return false;
            }
        }

        return $this->isPositiveInteger($request->input('companyId'))
            && $this->isPositiveInteger($request->input('buyerId'))
            && $this->isPositiveInteger($request->input('fabricsId'))
            && $this->isPositiveNumber($request->input('orderQuantity'))
            && is_numeric($request->input('restQuantity'))
            && (float) $request->input('restQuantity') >= 0;
    }

    private function isPositiveInteger(mixed $value): bool
    {
        return filter_var($value, FILTER_VALIDATE_INT) !== false && (int) $value > 0;
    }

    private function isPositiveNumber(mixed $value): bool
    {
        return is_numeric($value) && (float) $value > 0;
    }
}
