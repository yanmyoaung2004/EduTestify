<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    use HasFactory;

    protected $fillable = [
        'option_id',
        'image',
    ];

    public function option()
    {
        return $this->belongsTo(Option::class);
    }
}
