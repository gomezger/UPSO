<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCommentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('papers_comments', function (Blueprint $table) {
            $table->id();
            $table->integer('paper_id')->unsigned()->nullable();
            $table->string('nombre');
            $table->text('descripcion');
            $table->boolean('aprobado')->default(1);
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
        Schema::dropIfExists('papers_comments');
    }
}
