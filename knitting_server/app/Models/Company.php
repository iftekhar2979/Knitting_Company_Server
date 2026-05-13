<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Company extends Model
{
    protected $fillable = [
        'companyName',
        'location',
        'email',
        'contact',
        'shortForm',
    ];

    public function buyers(): HasMany
    {
        return $this->hasMany(Buyer::class, 'companyId');
    }

    public function yarnInformations(): HasMany
    {
        return $this->hasMany(YarnInformation::class, 'companyId');
    }

    public function orders(): HasMany
    {
        return $this->hasMany(Order::class, 'companyId');
    }

    public function proformaInvoices(): HasMany
    {
        return $this->hasMany(ProformaInvoice::class, 'companyId');
    }

    public function billInformations(): HasMany
    {
        return $this->hasMany(BillInformation::class, 'companyId');
    }
}
