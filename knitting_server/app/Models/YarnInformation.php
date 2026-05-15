<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class YarnInformation extends Model
{
    protected $table = 'yarn_informations';

    protected $fillable = [
        'companyId',
        'ReceivingQuantity',
        'restQuantity',
        'yarnType',
        'descriptionOfYarn',
        'orderId',
    ];

    public function company(): BelongsTo
    {
        return $this->belongsTo(Company::class, 'companyId');
    }

    public function order(): BelongsTo
    {
        return $this->belongsTo(Order::class, 'orderId');
    }

    public function details(): HasMany
    {
        return $this->hasMany(YarnInformationWithDetails::class, 'yarnInfoID');
    }
}
