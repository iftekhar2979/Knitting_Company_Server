<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Buyer extends Model
{
    public $timestamps = false;

    protected $fillable = [
        'buyerName',
        'companyId',
    ];

    public function company(): BelongsTo
    {
        return $this->belongsTo(Company::class, 'companyId');
    }

    public function orders(): HasMany
    {
        return $this->hasMany(Order::class, 'buyerId');
    }

    public function proformaInvoices(): HasMany
    {
        return $this->hasMany(ProformaInvoice::class, 'buyerId');
    }

    public function billInformations(): HasMany
    {
        return $this->hasMany(BillInformation::class, 'buyerId');
    }
}
