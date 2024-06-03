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
        Schema::create('pokemon_data', function (Blueprint $table) {
            $table->id();
            $table->integer('specie_id');
            $table->string('nome');
            $table->string('generazione');
            $table->text('descrizione');
            $table->string('tipo1');
            $table->string('tipo2')->nullable();
            $table->string('abilita_base');
            $table->string('abilita_nascosta')->nullable();
            $table->decimal('altezza', 4, 2);
            $table->decimal('peso', 5, 2);
            $table->string('categoria');
            $table->string('gruppo_uova1')->nullable();
            $table->string('gruppo_uova2')->nullable();
            $table->integer('hpstat');
            $table->integer('atkstat');
            $table->integer('defstat');
            $table->integer('spatkstat');
            $table->integer('spdefstat');
            $table->integer('spdstat');
            $table->string('immagine')->nullable();
            $table->string('debolezza1')->nullable();
            $table->string('debolezza2')->nullable();
            $table->string('debolezza3')->nullable();
            $table->string('debolezza4')->nullable();
            $table->string('debolezza5')->nullable();
            $table->string('debolezza6')->nullable();
            $table->string('debolezza7')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pokemon_data');
    }
};
