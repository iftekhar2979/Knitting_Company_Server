<?php

use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::post('/signup', [UserController::class, 'register']);
Route::post('/signin', [UserController::class, 'login']);
Route::post('/logout', [UserController::class, 'logout']);
Route::post('/forgot-password', [UserController::class, 'forgotPassword']);
Route::post('/resend-otp', [UserController::class, 'resendOTP']);
Route::post('/verify-otp', [UserController::class, 'verifyOTP']);
Route::post('/reset-password', [UserController::class, 'resetPassword']);
Route::get('/allusers', [UserController::class, 'index']);

Route::middleware('protect')->group(function () {
    Route::get('/profile', [UserController::class, 'getProfile']);
    Route::put('/profile', [UserController::class, 'updateProfile']);
    Route::get('/user', [UserController::class, 'index']);
    Route::post('/user', [UserController::class, 'store']);
    Route::get('/user/{id}', [UserController::class, 'show']);
    Route::patch('/user/{id}', [UserController::class, 'update']);
    Route::delete('/user/{id}', [UserController::class, 'destroy']);
});
