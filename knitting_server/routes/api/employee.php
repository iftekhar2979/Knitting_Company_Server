<?php

use App\Http\Controllers\DeliveryManController;
use Illuminate\Support\Facades\Route;

Route::get('/deliveryman', [DeliveryManController::class, 'index']);
