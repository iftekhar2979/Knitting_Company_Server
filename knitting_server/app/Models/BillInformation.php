<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class BillInformation extends Model
{
    protected $fillable = [
        'billNumber',
        'unitPrice',
        'amount',
        'invoiceAmount',
        'invoiceQuantity',
        'containOrders',
        'companyId',
        'buyerId',
        'fabricsId',
    ];

    public function company(): BelongsTo
    {
        return $this->belongsTo(Company::class, 'companyId');
    }

    public function buyer(): BelongsTo
    {
        return $this->belongsTo(Buyer::class, 'buyerId');
    }

    public function fabricsType(): BelongsTo
    {
        return $this->belongsTo(FabricsType::class, 'fabricsId');
    }
}
