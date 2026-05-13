<?php

namespace App\Http\Controllers;

use App\Models\Buyer;
use Illuminate\Http\Request;

class BuyerController extends Controller
{
    public function show($id)
    {
        $buyer = Buyer::find($id);
        if ($buyer) {
            return response()->json($buyer);
        }
        return response()->json(['message' => 'Buyer not found'], 404);
    }

    public function index()
    {
        $buyers = Buyer::all();
        return response()->json($buyers);
    }

    public function store(Request $request)
    {
        $buyer = Buyer::create($request->all());
        return response()->json($buyer);
    }

    public function update(Request $request, $id)
    {
        $buyer = Buyer::find($id);
        if ($buyer) {
            $buyer->update($request->all());
            return response()->json(['isUpdated' => true, 'updatedBuyer' => $buyer]);
        }
        return response()->json(['isUpdated' => false, 'error' => 'Buyer not found'], 404);
    }

    public function destroy($id)
    {
        $buyer = Buyer::find($id);
        if ($buyer) {
            $buyer->delete();
            return response()->json(['isDeleted' => true, 'removeBuyer' => $buyer]);
        }
        return response()->json(['isDeleted' => false, 'error' => 'Buyer not found'], 404);
    }
}
