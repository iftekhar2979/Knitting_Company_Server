<?php

use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;

Route::middleware('protect')->group(function () {
    Route::get('/product/fabrics', [ProductController::class, 'index']);
    Route::get('/product/fabrics/{id}', [ProductController::class, 'show']);
    Route::post('/product/fabrics', [ProductController::class, 'store']);
    Route::patch('/product/fabrics/{id}', [ProductController::class, 'update']);
    Route::delete('/product/fabrics/{id}', [ProductController::class, 'destroy']);
});
