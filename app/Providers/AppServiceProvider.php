<?php

namespace App\Providers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {

        //dd(auth()->check());
        //dd(Auth::guard('students')->check(), Auth::guard('students'));
        if (Auth::guard('students')->check()) {
            Inertia::share([
                'user' => fn () => [
                    'id' => Auth::guard('students')->id(),
                    'name' => Auth::guard('students')->user()->name,
                    'email' => Auth::guard('students')->user()->email,
                    'profile_image' => Auth::guard('students')->user()->profile_image,
                    'created_at' => Auth::guard('students')->user()->created_at,
                    'updated_at' => Auth::guard('students')->user()->updated_at,
                ],
            ]);
        }
    }
}
