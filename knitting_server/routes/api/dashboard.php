<?php

use App\Http\Controllers\DashboardController;
use Illuminate\Support\Facades\Route;

Route::get('/v1/analytics/popular', [DashboardController::class, 'popular']);
Route::get('/v1/analytics/unit', [DashboardController::class, 'unit']);
Route::get('/v1/analytics/fabric', [DashboardController::class, 'fabric']);
Route::get('/v1/analytics/all', [DashboardController::class, 'all']);
