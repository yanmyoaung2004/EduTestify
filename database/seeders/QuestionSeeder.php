<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class QuestionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('questions')->insert([
            [
                'chapter_id' => 1,
                'topic_id' => 1,
                'year' => '2025',
                'question_text' => 'What is the capital of France?',
                'correct_answer' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'chapter_id' => 1,
                'topic_id' => 2,
                'year' => '2025',
                'question_text' => 'What is the speed of light?',
                'correct_answer' => 2,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            // Add more questions as needed
        ]);
    }
}
