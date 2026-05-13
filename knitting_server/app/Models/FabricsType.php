<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class FabricsType extends Model
{
    const UPDATED_AT = null;

    protected $fillable = [
        'fabricsName',
        'description',
    ];

    public function orders(): HasMany
    {
        return $this->hasMany(Order::class, 'fabricsId');
    }

    public function proformaInvoices(): HasMany
    {
        return $this->hasMany(ProformaInvoice::class, 'fabricsId');
    }

    public function billInformations(): HasMany
    {
        return $this->hasMany(BillInformation::class, 'fabricsId');
    }
}
