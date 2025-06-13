<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TestResponse extends Model
{
    use HasFactory;

    protected $fillable = [
        'test_student_id',
        'question_id',
        'option_id',
        ];

    public function testStudent()
    {
        return  $this->belongsTo(TestStudent::class);
    }

    public function question()
    {
        return $this->belongsTo(Question::class);
    }


    public function option()
    {
        return $this->belongsTo(Option::class);
    }
}
