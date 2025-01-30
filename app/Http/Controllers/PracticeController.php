<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Subject;
use Illuminate\Support\Facades\Cache;

class PracticeController extends Controller
{
    public function index(Request $request)
    {
        $subjectId = $request->get('subject', 'all');
        $subjectTitles = Cache::remember('subjectTitles', now()->addMinutes(30), function () {
            return Subject::all();
        });
        if ($subjectId !== 'all') {
            $subjects = Cache::remember("subjects_$subjectId", now()->addMinutes(30), function () use ($subjectId) {
                return Subject::where('name', $subjectId)
                    ->with('chapters.topics')
                    ->get();
            });
        } else {
            $subjects = Cache::remember('subjects_all', now()->addMinutes(30), function () {
                return Subject::with('chapters.topics')->get();
            });
        }
        return Inertia::render('Practice', [
            'subjectTitles' => $subjectTitles,
            'subjects' => $subjects,
        ]);
    }

}
