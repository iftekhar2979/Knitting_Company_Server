<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Order extends Model
{
    protected $fillable = [
        'orderNumber',
        'companyId',
        'buyerId',
        'companyName',
        'fabricsName',
        'fabricsId',
        'buyerName',
        'season',
        'programNumber',
        'jobNumber',
        'bookingNumber',
        'sbNumber',
        'orderedDate',
        'targetDate',
        'orderQuantity',
        'deliveredQuantity',
        'restQuantity',
        'unit',
        'status',
        'isBillCreated',
        'isProformaInvoiceCreated',
        'userId',
        'billNumber',
        'unitPrice',
        'proformaInvoiceId',
    ];

    protected $casts = [
        'orderedDate' => 'datetime',
        'targetDate' => 'datetime',
        'orderQuantity' => 'float',
        'deliveredQuantity' => 'float',
        'restQuantity' => 'float',
        'unitPrice' => 'float',
        'isBillCreated' => 'boolean',
        'isProformaInvoiceCreated' => 'boolean',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'userId');
    }

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

    public function details(): HasOne
    {
        return $this->hasOne(OrderDetails::class, 'orderId');
    }

    public function yarnInformations(): HasMany
    {
        return $this->hasMany(YarnInformation::class, 'orderId');
    }

    public function deliveryDetails(): HasMany
    {
        return $this->hasMany(DeliveryDetails::class, 'orderId');
    }
}
