<?php

use App\Http\Controllers\OrderController;
use App\Http\Controllers\OrderDetailsController;
use App\Http\Controllers\YarnDetailsController;
use Illuminate\Support\Facades\Route;

Route::middleware('protect')->group(function () {
    Route::get('/order', [OrderController::class, 'index']);
    Route::get('/v1/order', [OrderController::class, 'invoiceIndex']);
    Route::get('/order/{id}', [OrderController::class, 'show'])->whereNumber('id');
    Route::get('/edit/order/{id}', [OrderController::class, 'editShow']);
    Route::get('/quantity/order/{id}', [OrderController::class, 'quantityInfo']);
    Route::post('/order', [OrderController::class, 'store']);
    Route::patch('/order/{id}', [OrderController::class, 'update']);
    Route::delete('/order/{id}', [OrderController::class, 'destroy']);
    Route::post('/v1/order/invoice', [OrderController::class, 'findWithPo']);
    Route::patch('/orders/{id}/status', [OrderController::class, 'updateStatus']);

    Route::get('/order/details/{id}', [OrderDetailsController::class, 'showByOrder']);
    Route::post('/order/details', [OrderDetailsController::class, 'store']);
    Route::patch('/order/details/{id}', [OrderDetailsController::class, 'update']);
    Route::delete('/order/details/{id}', [OrderDetailsController::class, 'destroy']);

    Route::get('/order/yarn/details/{id}', [YarnDetailsController::class, 'showByOrder']);
    Route::post('/order/yarn/details', [YarnDetailsController::class, 'store']);
    Route::post('/order/yarn/received', [YarnDetailsController::class, 'returnYarn']);
    Route::post('/order/yarn/received/remove/{id}', [YarnDetailsController::class, 'deleteReturnedYarn']);
    Route::patch('/order/yarn/details/{id}', [YarnDetailsController::class, 'update']);
    Route::delete('/order/yarn/details/{id}', [YarnDetailsController::class, 'destroy']);
});
