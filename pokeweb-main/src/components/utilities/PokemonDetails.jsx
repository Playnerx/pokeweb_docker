import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const PokemonDetails = () => {
  const [pokemonData, setPokemonData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();

        
        const responseItalian = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}/`);
        const dataItalian = await responseItalian.json();

        
        const italianName = dataItalian.names.find(name => name.language.name === "it").name;
        const italianDescription = dataItalian.flavor_text_entries.find(entry => entry.language.name === "it").flavor_text;
        const pokemonDataItalian = { ...data, name: italianName, description: italianDescription };
        
        setPokemonData(pokemonDataItalian);
      } catch (error) {
        console.error(`Error fetching Pokemon data:`, error);
      }
    };

    fetchPokemonData();
  }, [id]);

  if (!pokemonData) {
    return <div>Loading Pokemon data...</div>;
  }

  return (
    <div className='text-center mt-10 mb-10'>
      <h1>{pokemonData.name}</h1>
      <img className='mx-auto' src={pokemonData.sprites.front_default} alt={pokemonData.name} />
      <p>Nome: {pokemonData.name}</p>
      <p>Altezza: {pokemonData.height}</p>
      <p>Peso: {pokemonData.weight}</p>
      <h2>Descrizione Pokédex:</h2>
      <p>{pokemonData.description}</p>
    </div>
  );
};

export default PokemonDetails;