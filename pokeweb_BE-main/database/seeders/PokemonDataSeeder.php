<?php

namespace Database\Seeders;

use App\Models\PokemonData;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PokemonDataSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $csvFile = fopen(base_path("database/data/database.csv"), "r");
        $firstline = true;
        while (($data = fgetcsv($csvFile, 2000, ",")) !== FALSE) {
            if (!$firstline) {
                PokemonData::create([
                    "id" => $data['0'],
                    "specie_id" => $data['1'],
                    "nome" => $data['2'],
                    "generazione" => $data['3'],
                    "descrizione" => $data['4'],
                    "tipo1" => $data['5'],
                    "tipo2" => $data['6'],
                    "abilita_base" => $data['7'],
                    "abilita_nascosta" => $data['8'],
                    "altezza" => $data['9'],
                    "peso" => $data['10'],
                    "categoria" => $data['11'],
                    "gruppo_uova1" => $data['12'],
                    "gruppo_uova2" => $data['13'],
                    "hpstat" => $data['14'],
                    "atkstat" => $data['15'],
                    "defstat" => $data['16'],
                    "spatkstat" => $data['17'],
                    "spdefstat" => $data['18'],
                    "spdstat" => $data['19'],
                    "immagine" => $data['20'],
                    "debolezza1" => $data['21'],
                    "debolezza2" => $data['22'],
                    "debolezza3" => $data['23'],
                    "debolezza4" => $data['24'],
                    "debolezza5" => $data['25'],
                    "debolezza6" => $data['26'],
                    "debolezza7" => $data['27'],
                    
                ]);
            }
            $firstline = false;
        }
        fclose($csvFile);
    }
}
