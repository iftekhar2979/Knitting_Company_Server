<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class OrderDetails extends Model
{
    public $timestamps = false;

    protected $fillable = [
        'orderId',
        'style',
        'yarnCount',
        'yarnBrand',
        'yarnLot',
        'lycraCount',
        'lycraBrand',
        'lycraLot',
        'polyStarCount',
        'polyStarBrand',
        'polyStarLot',
        'mc_DIA',
        'e_DIA',
        'f_GSM',
        'sl',
        'colour',
    ];

    public function order(): BelongsTo
    {
        return $this->belongsTo(Order::class, 'orderId');
    }
}
