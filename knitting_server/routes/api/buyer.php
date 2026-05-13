<?php

use App\Http\Controllers\BuyerController;
use Illuminate\Support\Facades\Route;

Route::middleware('protect')->group(function () {
    Route::get('/buyer', [BuyerController::class, 'index']);
    Route::get('/buyer/{id}', [BuyerController::class, 'show']);
    Route::post('/buyer', [BuyerController::class, 'store']);
    Route::patch('/buyer/{id}', [BuyerController::class, 'update']);
    Route::delete('/buyer/{id}', [BuyerController::class, 'destroy']);
});
