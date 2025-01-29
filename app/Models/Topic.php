<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Topic extends Model
{
    use HasFactory;

    protected $fillable = [
        'chapter_id',
        'name',
    ];

    public function questions()
    {
        return $this->hasMany(Question::class,'topic_id');
    }

    public function chapter()
    {
        return $this->belongsTo(Chapter::class);
    }
}
