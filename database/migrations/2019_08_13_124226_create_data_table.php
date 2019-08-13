<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDataTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('data', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('PassengerId')->nullable();
            $table->string('Pclass')->nullable();
            $table->string('Name')->nullable();
            $table->string('Sex')->nullable();
            $table->string('Age')->nullable();
            $table->string('SibSp')->nullable();
            $table->string('Parch')->nullable();
            $table->string('Ticket')->nullable();
            $table->string('Fare')->nullable();
            $table->string('Cabin')->nullable();
            $table->string('Embarked')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('data');
    }
}
