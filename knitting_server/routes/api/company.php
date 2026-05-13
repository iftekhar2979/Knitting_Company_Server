<?php

use App\Http\Controllers\CompanyController;
use Illuminate\Support\Facades\Route;

Route::middleware('protect')->group(function () {
    Route::get('/company', [CompanyController::class, 'index']);
    Route::get('/company/{id}', [CompanyController::class, 'show']);
    Route::post('/company', [CompanyController::class, 'store']);
    Route::patch('/company/{id}', [CompanyController::class, 'update']);
    Route::delete('/company/{id}', [CompanyController::class, 'destroy']);
});
