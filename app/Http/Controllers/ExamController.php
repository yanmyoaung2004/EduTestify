<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ExamController extends Controller
{
    //

    public function index()
    {
        return Inertia::render('Exam');
    }

    
}
