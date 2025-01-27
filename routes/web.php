<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ExamController;
use App\Http\Controllers\PracticeController;
use App\Http\Controllers\QuizzController;
use App\Http\Controllers\SettingController;
use App\Http\Controllers\TestController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

//dashboard
Route::get('/', [DashboardController::class, 'index']);
Route::get('/dashboard', [DashboardController::class, 'index']);


//practice
Route::get('/practice', [PracticeController::class, 'index']);

//Quizz
Route::get('/quizzes', [QuizzController::class, 'index']);

//Exam
Route::get('/exams', [ExamController::class, 'index']);

//Exam
Route::get('/profile', [DashboardController::class, 'index']);


//Exam
Route::get('/settings', [SettingController::class, 'index']);


//Auth
Route::post('/register', [AuthController::class, 'register']);
Route::get('/register', [AuthController::class, 'showRegisterForm']);
Route::get('/login', [AuthController::class, 'showLoginForm']);
Route::post('/login', [AuthController::class, 'login']);
Route::get('/logout', [AuthController::class, 'logout']);
