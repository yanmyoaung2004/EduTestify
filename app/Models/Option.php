<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Option extends Model
{
    use HasFactory;

    protected $fillable = ['question_id', 'option_text'];

    public function question()
    {
        return $this->belongsTo(Question::class);
    }

    public function image()
    {
        return $this->hasOne(Image::class);
    }

    public function testResponse()
    {
        return $this->hasOne(TestResponse::class);
    }

    public function explanation()
    {
        return $this->hasOne(Explanation::class);
    }
}

