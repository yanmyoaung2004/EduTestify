<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ChapterSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('chapters')->insert([
            [
                'chapter' => 'Chapter 1',
                'subject_id' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'chapter' => 'Chapter 2',
                'subject_id' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            // Add more chapters as needed
        ]);
    }
}
