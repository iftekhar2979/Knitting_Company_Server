<?php

namespace App\Http\Controllers;

use App\Models\FabricsType;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index()
    {
        return response()->json(FabricsType::all());
    }

    public function show($id)
    {
        return response()->json(FabricsType::find($id));
    }

    public function store(Request $request)
    {
        try {
            return response()->json(FabricsType::create($request->all()));
        } catch (\Throwable $e) {
            return response($e->getMessage(), 400);
        }
    }

    public function update(Request $request, $id)
    {
        $product = FabricsType::find($id);
        if (!$product) {
            return response()->json(['isUpdated' => false, 'message' => 'Product not found'], 404);
        }

        $product->update($request->all());

        return response()->json(['isUpdated' => true, 'updateProduct' => $product]);
    }

    public function destroy($id)
    {
        $product = FabricsType::find($id);
        if (!$product) {
            return response()->json(['isDeleted' => false, 'message' => 'Product not found'], 404);
        }

        $product->delete();

        return response()->json(['isDeleted' => true, 'removefabricsType' => $product]);
    }
}
