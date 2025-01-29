<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TestSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('tests')->insert([
            [
                'id' => 1,
                'type' => 'Practice',
                'teacher_id' => 1,
                'duration' => '30',
                'start_date' => now()->addDay(),
                'description' => 'This is a practice test to help students prepare.',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 2,
                'type' => 'Mock',
                'teacher_id' => 2,
                'duration' => '60',
                'start_date' => now()->addDay(),
                'description' => 'This is a mock test to simulate the final exam.',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 3,
                'type' => 'Final',
                'teacher_id' => 2,
                'duration' => '90',
                'start_date'=> now()->addDay(),
                'description' => 'This is the final test for the course.',
                'created_at' => now(),
                'updated_at' => now(),
            ]
        ]);
    }
}
