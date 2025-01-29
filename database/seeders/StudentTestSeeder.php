<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;


class StudentTestSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('test_students')->insert([
            [
                'student_id' => 1,
                'test_id' => 1,
                'status' => 'completed',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'student_id' => 2,
                'test_id' => 1,
                'status' => 'completed',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'student_id' => 1,
                'test_id' => 2,
                'status' => 'pending',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'student_id' => 2,
                'test_id' => 2,
                'status' => 'completed',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
