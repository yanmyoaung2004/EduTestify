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
        return Inertia::render('Login', [
            'status' => 200]);
    }

    public function showRegisterForm()
    {
        return Inertia::render('Register', [
            'status' => 200
        ]);
    }

    public function register(Request $request)
    {
        return Inertia::render('Register', [
                'message' => 'You have successfully registered!',
                'status' => 201,
                'randomKey' => uniqid('student_', true)
            ]);

        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255',
            'password' => 'required|string|confirmed|min:8',
        ]);

        $existedUser = Student::where('email', $request->email)->first();
        if ($existedUser != null) {
            return Inertia::render('Register', [
                'message' => 'User already existed!',
                'status' => 409,
                'randomKey' => uniqid('student_', true)
                ]);
        }
        $user = Student::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        Auth::login($user);
        return to_route('login');

    }

    public function login(Request $request)
    {
        $existedUser = Student::where('email', $request->email)->first();
        if ($existedUser == null) {
            return Inertia::render('Login', [
                'message' => 'User Not Found!',
                'status' => 409,
                'randomKey' => uniqid('student_', true)
                ]);
        }
        if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            $request->session()->regenerate();
            return redirect('/');
        }
        return Inertia::render('Login', [
                'message' => 'Incorrect Password!',
                'status' => 401
            ]);
    }



    // Handle logout request
    public function logout(Request $request)
    {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return redirect('login');
    }

}

