<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class AuthController extends Controller
{
    public function showLoginForm()
    {
        return Inertia::render('Login');
    }

    public function showRegisterForm()
    {
        return Inertia::render('Register');
    }

    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255',
            'password' => 'required|string|confirmed|min:8',
        ]);

        $existedUser = Student::where('email', $request->email)->first();
        if ($existedUser != null) {
            return Inertia::render('Register', [
                'errors' => [
                    'message' => 'User already existed!',
                    ]
                ]);
        }
        $user = Student::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        Auth::login($user);
        return Inertia::render('Register', [
                'message' => 'You have successfully registered!',
            ]);
    }

    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string',
        ]);
        $existedStudent = Student::where('email', $request->email)->first();
        if ($existedStudent == null) {
            return Inertia::render('Login', [
                'errors' => [
                    'message' => 'User Not Found!',
                ]]);
        }
        if (Auth::guard('students')->attempt(['email' => $request->email, 'password' => $request->password])) {
            $request->session()->regenerate();
            return Inertia::render('Login', [
                'message' => 'You have successfully logged in!',
            ]);
        }

        return Inertia::render('Login', [
                'errors' => [
                    'message' => 'Incorrect Password!',
                ]
            ]);
    }

    public function logout(Request $request)
    {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return redirect('/practice');
    }

}

