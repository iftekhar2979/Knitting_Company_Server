<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class UserNotification extends Model
{
    public $timestamps = false;

    protected $fillable = [
        'userId',
        'notificationId',
        'isViewed',
    ];

    protected $casts = [
        'isViewed' => 'boolean',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'userId');
    }

    public function notification(): BelongsTo
    {
        return $this->belongsTo(Notification::class, 'notificationId');
    }
}
