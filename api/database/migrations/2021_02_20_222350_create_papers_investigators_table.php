<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePapersInvestigatorsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('papers_investigators', function (Blueprint $table) {
            $table->id();
            $table->integer('paper_id')->unsigned()->nullable();
            $table->integer('investigator_id')->unsigned()->nullable();
            $table->timestamps();
        });


        Schema::table('papers_investigators', function (Blueprint $table) {

            $table->foreign('paper_id')
			  ->references('id')->on('papers')
			  ->onDelete('cascade')
			  ->onUpdate('cascade');

              $table->foreign('investigator_id')
			  ->references('id')->on('investigators')
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
        Schema::dropIfExists('papers_investigators');
    }
}
