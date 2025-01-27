<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Subject; // Make sure to import the Subject model

class PracticeController extends Controller
{
    public function index(Request $request)
    {
        $subjectId = $request->get('subject', 'all');
        
        $subjectTitles = Subject::all();
        if ($subjectId !== 'all') {
            $subjects = Subject::where('id', $subjectId)->with('chapters.topics')->get();
        } else {
            $subjects = Subject::with('chapters.topics')->get();
        }
        return Inertia::render('Practice', [
            'subjectTitles' => $subjectTitles,
            'subjects' => $subjects,
        ]);
    }
}
