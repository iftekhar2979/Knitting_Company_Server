<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DeliveryMen extends Model
{
    protected $table = 'delivery_men';

    public $timestamps = false;

    protected $fillable = [
        'name',
    ];
}
