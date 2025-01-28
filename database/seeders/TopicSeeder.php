<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TopicSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('topics')->insert([
            [
                'name' => 'Topic 1',
                'chapter_id' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Topic 2',
                'chapter_id' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            // Add more topics as needed
        ]);
    }
}
