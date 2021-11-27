<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AlterInvestigadoresTable3 extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('investigadores', function (Blueprint $table) {
            $table->string('mail')->nullable()->after('descripcion')->change();
            $table->string('pagina')->nullable()->after('descripcion')->change();
            $table->string('linkedin')->nullable()->after('descripcion')->change();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('investigadores', function (Blueprint $table) {
            //
        });
    }
}
