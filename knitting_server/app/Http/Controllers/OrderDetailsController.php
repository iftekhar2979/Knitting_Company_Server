<?php

namespace App\Http\Controllers;

use App\Models\OrderDetails;
use Illuminate\Http\Request;

class OrderDetailsController extends Controller
{
    private const ORDER_DETAILS_FIELDS = [
        'orderId',
        'style',
        'yarnCount',
        'yarnBrand',
        'yarnLot',
        'lycraCount',
        'lycraBrand',
        'lycraLot',
        'polyStarCount',
        'polyStarBrand',
        'polyStarLot',
        'mc_DIA',
        'e_DIA',
        'f_GSM',
        'sl',
        'colour',
    ];

    public function showByOrder($id)
    {
        try {
            return response()->json(OrderDetails::where('orderId', $id)->first());
        } catch (\Throwable $e) {
            return response()->json($e->getMessage(), 404);
        }
    }

    public function store(Request $request)
    {
        try {
            return response()->json(OrderDetails::create($this->orderDetailsData($request)));
        } catch (\Throwable $e) {
            return response($e->getMessage(), 400);
        }
    }

    public function update(Request $request, $id)
    {
        try {
            $updatedCount = OrderDetails::where('id', $id)->update($this->orderDetailsData($request));

            if ($updatedCount === 0) {
                return response()->json(['isUpdated' => false, 'message' => 'Order details not found'], 404);
            }

            $details = OrderDetails::find($id);
            return response()->json(['isUpdated' => true, 'updatedOrder' => $details]);
        } catch (\Throwable $e) {
            return response()->json(['isUpdated' => false, 'error' => $e->getMessage()], 400);
        }
    }

    public function destroy($id)
    {
        try {
            $details = OrderDetails::find($id);

            if (!$details) {
                return response()->json(['isDeleted' => false, 'message' => 'Order details not found'], 404);
            }

            OrderDetails::where('id', $id)->delete();

            return response()->json(['isDeleted' => true, 'updatedOrder' => $details]);
        } catch (\Throwable $e) {
            return response()->json(['isDeleted' => false, 'error' => $e->getMessage()], 400);
        }
    }

    private function orderDetailsData(Request $request): array
    {
        return $request->only(self::ORDER_DETAILS_FIELDS);
    }
}
