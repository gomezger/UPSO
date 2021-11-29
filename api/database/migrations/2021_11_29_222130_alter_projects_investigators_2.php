<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AlterProjectsInvestigators2 extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('projects_investigators', function (Blueprint $table) {
            $table->unsignedBigInteger('investigator_id')->change();
            
            $table->foreign('investigator_id')
                ->references('id')->on('investigadores')
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
        Schema::table('projects_investigators', function (Blueprint $table) {
            //
        });
    }
}
