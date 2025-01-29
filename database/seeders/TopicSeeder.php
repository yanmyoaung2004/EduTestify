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
                'name' => 'Coorporate Activities',
                'chapter_id' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Coorporate Accounting',
                'chapter_id' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Management Service',
                'chapter_id' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Legal Affairs and Standardization',
                'chapter_id' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            // Add more topics as needed
        ]);
    }
}
