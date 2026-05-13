<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PasswordOTP extends Model
{
    protected $fillable = [
        'email',
        'otp',
        'expiresAt',
    ];

    protected $casts = [
        'expiresAt' => 'datetime',
    ];
}
