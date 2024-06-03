<?php

namespace App\Http\Controllers;

use App\Http\Resources\ImageResource;
use App\Models\PokemonData;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class PokemonDataController extends Controller
{
    public function index()
    {
        $pokemons = PokemonData::all();
        return response()->json($pokemons, 200);
    }

    public function show($id)
    {
        $pokemon = PokemonData::findOrFail($id);
        return response()->json($pokemon, 200);
    }

    public function infoPokemon()
    {
        $pokemonData = PokemonData::all();
        return ImageResource::collection($pokemonData);
    }

}