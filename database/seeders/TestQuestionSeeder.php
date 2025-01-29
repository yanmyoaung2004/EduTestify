<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TestQuestionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('test_questions')->insert([
            [
                'test_id' => 1,
                'question_id' => 1,
            ],
            [
                'test_id' => 2,
                'question_id' => 1,
            ],
            [
                'test_id' => 2,
                'question_id' => 2,
            ],
        ]);
    }
}
