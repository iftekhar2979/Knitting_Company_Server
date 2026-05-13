<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Notification extends Model
{
    const UPDATED_AT = null;

    protected $fillable = [
        'content',
        'route',
    ];

    public function userNotifications(): HasMany
    {
        return $this->hasMany(UserNotification::class, 'notificationId');
    }
}
