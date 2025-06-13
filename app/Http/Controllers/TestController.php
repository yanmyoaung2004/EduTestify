<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\TestStudent;
use App\Models\Teacher;
use Carbon\Carbon;

class TestController extends Controller
{
    //


public function index()
{
    $userRole = "default";
    $tests = collect();

    if ($userRole === 'teacher') {
        $tests = Teacher::where('id', 1)
            ->with('tests')
            ->first()?->tests->map(function ($teacherTest) {
                return [
                    'test' => $teacherTest,
                    'status' => Carbon::parse($teacherTest->start_date)->isToday() ? "Started" : "Pending",
                ];
            }) ?? collect();
    } else {
        $tests = TestStudent::where('student_id', 1)
            ->with('test')
            ->get()
            ->map(function ($testStudent) {
                return [
                    'test' => $testStudent->test,
                    'status' => $testStudent->status,
                ];
            });
        }

    return Inertia::render('Test', [
        'tests' => $tests,
        'userRole' => $userRole,
    ]);
}

public function show($id)
{
    $testStudent = TestStudent::where('test_id', $id)
                    ->with('test')
                    ->select('id', 'test_id', 'status', 'student_id', 'created_at')
                    ->first();
    $testStudent->load('testQuestions.question.topic');
    $questions = $testStudent->testQuestions;
    $testQuestionsLength = $questions->count();
    $coverTopic = $questions->pluck('question.topic')->unique();

    $testData = [
        'testStudent' => $testStudent->only(['id', 'test_id', 'status', 'student_id', 'created_at', 'test']),
        'testQuestionsLength' => $testQuestionsLength,
        ];
        return Inertia::render('TestDetail', [
            'testData' => $testData,
            'coverTopics' => $coverTopic,
        ]);

    }

    public function takeExam(){


        return Inertia::render('Exam');
    }

}
