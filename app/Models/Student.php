<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Student extends Authenticatable
{
    use HasFactory;

    protected $fillable = ['name', 'email', 'password', 'profile_image'];

    public function testStudents()
    {
        return $this->hasMany(TestStudent::class);
    }
}
