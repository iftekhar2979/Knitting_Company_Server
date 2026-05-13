<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class DeliveryDetails extends Model
{
    const UPDATED_AT = null;

    protected $fillable = [
        'orderId',
        'deliveredQuantity',
        'fabricDeliveredQuantity',
        'GrayDeliveredQuantity',
        'unitPrice',
        'billNumber',
        'deliveredBy',
        'colour',
        'vechileNumber',
        'roleQuantity',
    ];

    public function order(): BelongsTo
    {
        return $this->belongsTo(Order::class, 'orderId');
    }
}
