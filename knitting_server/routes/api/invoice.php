<?php

use App\Http\Controllers\InvoiceController;
use Illuminate\Support\Facades\Route;

Route::patch('/v1/billNumber/{id}', [InvoiceController::class, 'changeBillNumber'])->middleware(['protect', 'protect:admin']);
Route::get('/v1/bill/{id}', [InvoiceController::class, 'showBill']);

Route::middleware('protect:admin')->group(function () {
    Route::post('/v1/proformaInvoice', [InvoiceController::class, 'storeProformaInvoice']);
    Route::get('/v1/proformaInvoice', [InvoiceController::class, 'proformaInvoiceIndex']);
    Route::get('/v1/proformaInvoice/{id}', [InvoiceController::class, 'showProformaInvoice']);
    Route::post('/v1/bill', [InvoiceController::class, 'storeBill']);
    Route::get('/v1/bill', [InvoiceController::class, 'billIndex']);
    Route::delete('/v1/proformaInvoice/{id}', [InvoiceController::class, 'destroyProformaInvoice']);
    Route::delete('/v1/bill/{id}', [InvoiceController::class, 'destroyBill']);
});
