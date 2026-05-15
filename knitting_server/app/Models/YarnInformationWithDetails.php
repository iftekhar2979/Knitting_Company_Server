<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class YarnInformationWithDetails extends Model
{
    const UPDATED_AT = null;

    protected $table = 'yarn_information_with_details';

    protected $fillable = [
        'yarnInfoID',
        'returnQuantity',
        'westQuantity',
        'role',
        'vechileNumber',
        'deliveredBy',
    ];

    public function yarnInformation(): BelongsTo
    {
        return $this->belongsTo(YarnInformation::class, 'yarnInfoID');
    }
}
