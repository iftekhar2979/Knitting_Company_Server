<?php

use App\Http\Controllers\DeliveryController;
use Illuminate\Support\Facades\Route;

Route::middleware('protect:admin')->group(function () {
    Route::patch('/delivery/billNumber/{id}', [DeliveryController::class, 'changeBillNumber']);
    Route::post('/delivery/billNumber/{id}', [DeliveryController::class, 'deleteBill']);
    Route::get('/delivery/bills', [DeliveryController::class, 'billIndex']);
    Route::patch('/delivery/bill', [DeliveryController::class, 'createBill']);
    Route::get('/delivery/bill/{id}', [DeliveryController::class, 'showBill']);
});

Route::middleware('protect')->group(function () {
    Route::post('/delivery', [DeliveryController::class, 'store']);
    Route::get('/delivery', [DeliveryController::class, 'index']);
    Route::get('/delivery/{id}', [DeliveryController::class, 'show']);
    Route::get('/order/delivery/{id}', [DeliveryController::class, 'forOrder']);
    Route::patch('/delivery', [DeliveryController::class, 'updateQuantity']);
    Route::delete('/delivery', [DeliveryController::class, 'destroy']);
});
