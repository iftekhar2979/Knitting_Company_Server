<?php

namespace App\Http\Controllers;

use App\Models\YarnInformation;
use App\Models\YarnInformationWithDetails;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class YarnDetailsController extends Controller
{
    public function showByOrder($id)
    {
        return response()->json(YarnInformation::with(['company:id,companyName,location', 'details'])->where('orderId', $id)->get());
    }

    public function store(Request $request)
    {
        try {
            return response()->json(YarnInformation::create($request->all()));
        } catch (\Throwable $e) {
            return response($e->getMessage(), 400);
        }
    }

    public function update(Request $request, $id)
    {
        try {
            $yarn = YarnInformation::find($id);
            if (!$yarn) {
                return response()->json(['isUpdated' => false, 'error' => 'Yarn information not found'], 404);
            }

            $yarn->update($request->all());

            return response()->json(['isUpdated' => true, 'updatedOrder' => $yarn]);
        } catch (\Throwable $e) {
            return response()->json(['isUpdated' => false, 'error' => $e->getMessage()], 400);
        }
    }

    public function destroy($id)
    {
        try {
            $yarn = YarnInformation::find($id);
            optional($yarn)->delete();

            return response()->json(['isDeleted' => true, 'updatedOrder' => $yarn]);
        } catch (\Throwable $e) {
            return response()->json(['isDeleted' => false, 'error' => $e->getMessage()], 400);
        }
    }

    public function returnYarn(Request $request)
    {
        try {
            $result = DB::transaction(function () use ($request) {
                $yarn = YarnInformation::findOrFail($request->input('from'));
                $amount = (float) $request->input('amount');

                if ($yarn->ReceivingQuantity < $amount) {
                    throw new \RuntimeException("Yarn Booking Quantity {$yarn->id} does not have enough quantity to transfer. Required: {$amount}, available: {$yarn->ReceivingQuantity}");
                }

                $yarn->decrement('restQuantity', $amount);

                $detailBody = $request->except(['from', 'amount']);
                $detailBody['yarnInfoID'] = $yarn->id;
                $detailBody['returnQuantity'] = $amount;
                YarnInformationWithDetails::create($detailBody);

                return $yarn->fresh();
            });

            return response()->json($result);
        } catch (\Throwable $e) {
            return response()->json(['message' => $e->getMessage()], 400);
        }
    }

    public function deleteReturnedYarn($id)
    {
        try {
            $result = DB::transaction(function () use ($id) {
                $detail = YarnInformationWithDetails::findOrFail($id);
                $yarn = YarnInformation::find($detail->yarnInfoID);

                if ($yarn) {
                    $yarn->increment('restQuantity', $detail->returnQuantity);
                }

                $detail->delete();

                return optional($yarn)->fresh();
            });

            return response()->json(['result' => $result, 'isDeleted' => true]);
        } catch (\Throwable $e) {
            return response()->json(['message' => $e->getMessage(), 'isDeleted' => false], 400);
        }
    }
}
