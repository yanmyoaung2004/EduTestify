<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class PracticeController extends Controller
{
    //
    public function index()
    {
        return Inertia::render('Practice');
    }
}
