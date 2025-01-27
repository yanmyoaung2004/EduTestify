<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    use HasFactory;

    protected $fillable = [
        'chapter',
        'topic',
        'year',
        'question_text',
        'correct_answer'
    ];

    public function options()
    {
        return $this->hasMany(Option::class);
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
