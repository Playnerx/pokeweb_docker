<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class ImageResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request)
    {
        return [
            'specie_id' => $this->species_id,
            'nome' => $this->nome,
            'generazione' => $this->generazione,
            'descrizione' => $this->descrizione,
            'tipo1' => $this->tipo1,
            'tipo2' => $this->tipo2,
            'abilita_base' => $this->abilita_base,
            'abilita_nascosta' => $this->abilita_nascosta,
            'altezza' => $this->altezza,
            'peso' => $this->peso,
            'categoria' => $this->categoria,
            'gruppo_uova1' => $this->gruppo_uova1,
            'gruppo_uova2' => $this->gruppo_uova2,
            'hpstat' => $this->hpstat,
            'atkstat' => $this->atkstat,
            'defstat' => $this->defstat,
            'spatkstat' => $this->spatkstat,
            'spdefstat' => $this->spdefstat,
            'spdstat' => $this->spdstat,
            'debolezza1' => $this->debolezza1,
            'debolezza2' => $this->debolezza2,
            'debolezza3' => $this->debolezza3,
            'debolezza4' => $this->debolezza4,
            'debolezza5' => $this->debolezza5,
            'debolezza6' => $this->debolezza6,
            'debolezza7' => $this->debolezza7,
            'immagine' => Storage::url($this->immagine)
        ];
    }
}
