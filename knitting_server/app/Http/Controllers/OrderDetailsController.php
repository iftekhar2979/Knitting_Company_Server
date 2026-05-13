<?php

namespace App\Http\Controllers;

use App\Models\OrderDetails;
use Illuminate\Http\Request;

class OrderDetailsController extends Controller
{
    public function showByOrder($id)
    {
        return response()->json(OrderDetails::where('orderId', $id)->first());
    }

    public function store(Request $request)
    {
        try {
            return response()->json(OrderDetails::create($request->all()));
        } catch (\Throwable $e) {
            return response($e->getMessage(), 400);
        }
    }

    public function update(Request $request, $id)
    {
        $details = OrderDetails::find($id);
        if (!$details) {
            return response()->json(['isUpdated' => false, 'message' => 'Order details not found'], 404);
        }

        $details->update($request->all());

        return response()->json(['isUpdated' => true, 'updatedOrder' => $details]);
    }

    public function destroy($id)
    {
        $details = OrderDetails::find($id);
        if (!$details) {
            return response()->json(['isDeleted' => false, 'message' => 'Order details not found'], 404);
        }

        $details->delete();

        return response()->json(['isDeleted' => true, 'updatedOrder' => $details]);
    }
}
