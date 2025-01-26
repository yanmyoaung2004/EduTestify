<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('questions', function (Blueprint $table) {
            $table->unsignedBigInteger('id');
            $table->string('chapter');
            $table->string('topic');
            $table->string('year')->nullable();
            $table->string('question_text');
            $table->unsignedBigInteger('correct_answer')->nullable();
            $table->foreign('correct_answer')
                ->references('id')
                ->on('options')
                ->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('questions');
    }
};
