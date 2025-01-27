<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Test extends Model
{
    use HasFactory;

    protected $fillable = ['type', 'teacher_id'];


    public function teacher()
    {
        return  $this->belongsTo(Teacher::class, 'teacher_id');
    }

    public function testStudents()
    {
        return $this->hasMany(TestStudent::class);
    }

    public function testQuestions()
    {
        return $this->hasMany(TestQuestion::class);
    }


}
