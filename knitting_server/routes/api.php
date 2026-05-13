<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\DB;

Route::get('/', function () {
    try {
        DB::connection()->getPdo();
        return response('Database connection is successful.', 200);
    } catch (Exception $e) {
        return response()->json(['message' => 'Failed to connect to the database.', 'error' => $e->getMessage()], 500);
    }
});

Route::get('/health', function () {
    try {
        DB::connection()->getPdo();
        return response()->json(['status' => 'Database connected'], 200);
    } catch (Exception $e) {
        return response()->json(['status' => 'Database error', 'error' => $e->getMessage()], 500);
    }
});

require __DIR__.'/api/company.php';
require __DIR__.'/api/order.php';
require __DIR__.'/api/delivery.php';
require __DIR__.'/api/user.php';
require __DIR__.'/api/buyer.php';
require __DIR__.'/api/product.php';
require __DIR__.'/api/invoice.php';
require __DIR__.'/api/employee.php';
require __DIR__.'/api/dashboard.php';
