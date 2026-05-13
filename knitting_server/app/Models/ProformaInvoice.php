<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ProformaInvoice extends Model
{
    const UPDATED_AT = null;

    protected $fillable = [
        'style',
        'fabricsName',
        'fabricsId',
        'description',
        'finishDia',
        'unitPrice',
        'totalQuantity',
        'amount',
        'companyId',
        'buyerId',
        'containOrders',
        'piName',
        'piNumber',
        'invoiceAmount',
        'invoiceQuantity',
        'season',
        'billingWay',
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
