<?php

namespace App\Http\Controllers;

use App\Models\YarnInformation;
use App\Models\YarnInformationWithDetails;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class YarnDetailsController extends Controller
{
    private const YARN_FIELDS = [
        'companyId',
        'ReceivingQuantity',
        'restQuantity',
        'yarnType',
        'descriptionOfYarn',
        'orderId',
    ];

    public function showByOrder($id)
    {
        try {
            $yarns = YarnInformation::with(['company:id,companyName,location', 'details'])
                ->where('orderId', (float) $id)
                ->get()
                ->map(fn (YarnInformation $yarn) => $this->formatYarnInformation($yarn, true));

            return response()->json($yarns);
        } catch (\Throwable $e) {
            return response()->json($e->getMessage(), 404);
        }
    }

    public function store(Request $request)
    {
        try {
            return response()->json(
                $this->formatYarnInformation(YarnInformation::create($this->yarnData($request)))
            );
        } catch (\Throwable $e) {
            return response($e->getMessage(), 400);
        }
    }

    public function update(Request $request, $id)
    {
        try {
            YarnInformation::where('id', $id)->update($this->yarnData($request));
            $yarn = YarnInformation::find($id);

            return response()->json([
                'isUpdated' => true,
                'updatedOrder' => $yarn ? $this->formatYarnInformation($yarn) : null,
            ]);
        } catch (\Throwable $e) {
            return response()->json(['isUpdated' => false, 'error' => $e->getMessage()], 400);
        }
    }

    public function destroy($id)
    {
        try {
            $yarn = YarnInformation::find($id);
            YarnInformation::where('id', $id)->delete();

            return response()->json([
                'isDeleted' => true,
                'updatedOrder' => $yarn ? $this->formatYarnInformation($yarn) : null,
            ]);
        } catch (\Throwable $e) {
            return response()->json(['isDeleted' => false, 'error' => $e->getMessage()], 400);
        }
    }

    public function returnYarn(Request $request)
    {
        try {
            $result = DB::transaction(function () use ($request) {
                $from = (float) $request->input('from');
                $yarn = YarnInformation::find($from);
                if (!$yarn) {
                    throw new \RuntimeException("yarn information with id {$from} does not exist");
                }

                $amount = (float) $request->input('amount');

                if ($yarn->ReceivingQuantity < $amount) {
                    throw new \RuntimeException("Yarn Booking Quantity {$yarn->id} does not have enough quantity to transfer. Required: {$amount}, available: {$yarn->ReceivingQuantity}");
                }

                $yarn->decrement('restQuantity', $amount);

                $detailBody = $request->except(['from', 'amount']);
                $detailBody['yarnInfoID'] = $yarn->id;
                $detailBody['returnQuantity'] = $amount;
                YarnInformationWithDetails::create($detailBody);

                return $this->formatYarnInformation($yarn->fresh());
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
                $from = (float) $id;
                $detail = YarnInformationWithDetails::find($from);
                if (!$detail) {
                    throw new \RuntimeException("delivery with id {$from} does not exist");
                }

                $yarn = YarnInformation::find($detail->yarnInfoID);

                if ($yarn) {
                    $yarn->increment('restQuantity', $detail->returnQuantity);
                }

                $detail->delete();

                $freshYarn = optional($yarn)->fresh();

                return $freshYarn ? $this->formatYarnInformation($freshYarn) : null;
            });

            return response()->json(['result' => $result, 'isDeleted' => true]);
        } catch (\Throwable $e) {
            return response()->json(['message' => $e->getMessage(), 'isDeleted' => false], 400);
        }
    }

    private function yarnData(Request $request): array
    {
        return $request->only(self::YARN_FIELDS);
    }

    private function formatYarnInformation(YarnInformation $yarn, bool $includeDetails = false): array
    {
        $data = [
            'id' => $yarn->id,
            'companyId' => $yarn->companyId,
            'ReceivingQuantity' => $yarn->ReceivingQuantity,
            'restQuantity' => $yarn->restQuantity,
            'yarnType' => $yarn->yarnType,
            'descriptionOfYarn' => $yarn->descriptionOfYarn,
            'orderId' => $yarn->orderId,
            'createdAt' => $yarn->created_at,
            'updatedAt' => $yarn->updated_at,
        ];

        if ($yarn->relationLoaded('company')) {
            $data['company'] = $yarn->company ? [
                'companyName' => $yarn->company->companyName,
                'location' => $yarn->company->location,
            ] : null;
        }

        if ($includeDetails && $yarn->relationLoaded('details')) {
            $data['YarnInformationWithDetails'] = $yarn->details
                ->map(fn (YarnInformationWithDetails $detail) => $this->formatReturnedYarn($detail))
                ->values();
        }

        return $data;
    }

    private function formatReturnedYarn(YarnInformationWithDetails $detail): array
    {
        return [
            'id' => $detail->id,
            'yarnInfoID' => $detail->yarnInfoID,
            'returnQuantity' => $detail->returnQuantity,
            'westQuantity' => $detail->westQuantity,
            'role' => $detail->role,
            'vechileNumber' => $detail->vechileNumber,
            'deliveredBy' => $detail->deliveredBy,
            'createdAt' => $detail->created_at,
        ];
    }
}
