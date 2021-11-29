<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePaperDownload extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('papers_downloads', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('paper_id')->unsigned()->nullable();
            $table->string('nombre');
            $table->string('email');
            $table->date('nacimiento');
            $table->string('profesion');
            $table->boolean('download')->default(0);
            $table->timestamps();

            $table->foreign('paper_id')
			  ->references('id')->on('papers')
			  ->onDelete('cascade')
			  ->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('papers_downloads');
    }
}
