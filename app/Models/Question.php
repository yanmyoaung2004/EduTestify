<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    use HasFactory;

    protected $fillable = [
        'chapter_id',
        'topic_id',
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

    public function getBySubject($subject)
    {
        return $this->where('subject_id',$subject->id)->get();
    }

    public function explanation()
    {
        return $this->hasOne(Explanation::class);
    }
}
