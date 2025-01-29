<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class StudentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('students')->insert([
            [
                'name' => 'John Doe',
                'email' => 'johndoe@gmail.com',
                'password' => "test",
                'profile_image' => 'https://randomuser.me/api/portraits',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Jane Doe',
                'email' => 'janedoe@gmail.com',
                'password' => "test",
                'profile_image' => "test",
                'created_at' => now(),
                'upated_at' => now(),
        ]]);
    }
}
