<?php

namespace App\Http\Controllers;

use App\Models\DeliveryMen;

class DeliveryManController extends Controller
{
    public function index()
    {
        return response()->json(DeliveryMen::all());
    }
}
