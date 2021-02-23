<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProjetcsInvestigatorsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('projects_investigators', function (Blueprint $table) {
            $table->id();
            $table->integer('project_id')->unsigned()->nullable();
            $table->integer('investigator_id')->unsigned()->nullable();
            $table->timestamps();
        });

        Schema::table('projects_investigators', function (Blueprint $table) {

            $table->foreign('project_id')
			  ->references('id')->on('projects')
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
        Schema::dropIfExists('projetcs_investigators');
    }
}
