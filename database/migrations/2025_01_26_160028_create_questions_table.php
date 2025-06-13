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
            $table->id();
            $table->unsignedBigInteger('chapter_id');
            $table->unsignedBigInteger('topic_id');
            $table->string('year')->nullable();
            $table->string('question_text');
            $table->unsignedBigInteger('correct_answer')->nullable();
            //$table->foreign('correct_answer')
                //->references('id')
                //->on('options')
                //->onDelete('cascade');
            $table->foreign('chapter_id')
                ->references('id')
                ->on('chapters')
                ->onDelete('cascade');
            $table->foreign('topic_id')
                ->references('id')
                ->on('topics')
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
