<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TeacherSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('teachers')->insert([
            [
                'name' => 'Su Thae Swe',
                'email' => 'suthae@gmail.com',
                'password' => "test",
                'profile_image' => 'https://randomuser.me/api/portraits',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Chit Su Hlaing',
                'email' => 'chitsu@gmail.com',
                'password' => "test",
                'profile_image' => 'https://randomuser.me/api/portraits',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
