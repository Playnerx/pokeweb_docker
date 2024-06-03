<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\EvolutionChain;
use App\Models\EvolutionTriggerProse;
use App\Models\PokemonStat;
use App\Models\Region;
use App\Models\TypeEfficacy;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        \App\Models\User::factory(10)->create();

        $this->call([
            /* RegionSeeder::class,
            GenerationSeeder::class,
            EvolutionChainSeeder::class,
            SpecieSeeder::class,
            PokemonSeeder::class,
            AbilitySeeder::class,
            LanguageSeeder::class,
            VersionSeeder::class,
            LanguageNamesSeeder::class,
            DescriptionSeeder::class,
            PokemonAbilitySeeder::class,
            TypeSeeder::class,
            TypeEfficacySeeder::class,
            TypeNameSeeder::class,
            PokemonTypeSeeder::class,
            PokemonAbilitySeeder::class,
            GenderSeeder::class,
            EggGroupSeeder::class,
            EggGroupProseSeeder::class,
            DamageClassSeeder::class,
            StatSeeder::class,
            PokemonStatSeeder::class,
            StatNameSeeder::class,
            EvolutionTriggerSeeder::class,
            EvolutionTriggerProseSeeder::class,
            PokemonEvolutionSeeder::class */

            PokemonDataSeeder::class
        ]);
    }
}
