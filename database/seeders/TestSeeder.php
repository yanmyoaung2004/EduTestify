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
        //
        DB::table('tests')->insert([
            [
                'id' => 1,
                'type' => 'Practice',
                'created_at' => now(),
                'updated_at' => now(),
            ]
        ]);

    }
}
