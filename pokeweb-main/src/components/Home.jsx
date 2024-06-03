import React, { useState, useEffect } from 'react';
import LoadingPage from './utilities/Loadings/LoadingPage';
import Card from './utilities/Cards/Card';
import Team from './utilities/Teams/Team';
import RandomDescription from './utilities/RandomDescription';
import { NavLink } from 'react-router-dom';
import { useAuth } from './AuthProvider';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export default function Home() {
  const { userData } = useAuth();
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:8000/api/pokemon')
      .then(response => {
        if (!response.ok) {
          throw new Error('Request Error');
        }
        return response.json();
      })
      .then(data => {
        setPokemons(data);
        console.log(data);
        setTimeout(() => {
          setLoading(false);
        }, 500);
      })
      .catch(error => {
        console.log('Si è verificato un errore:', error);
      });
  }, []);

  const getRandomPokemon = () => {
    const shuffledPokemons = [...pokemons].sort(() => Math.random() - 0.5);
    return shuffledPokemons.slice(0, 4);
  }

  console.log(userData) 
  
  let urlInit = 'http://localhost:8000/';

  return (
    <div className="home">
      {loading && <LoadingPage />}
      {/* <div className="backgroundUser w-100 h-[120px] flex justify-center items-center animation-user">
        <p className="text-center text-[30px] font-semibold">Bentornato, {userData?.user?.username}!</p>
      </div> */}

      {/* Random Home */}

      <div className="relative w-100 h-[350px] flex justify-center items-center wallpaperHome bg-center bg-cover animation-user">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className='text-white text-center font-semibold relative'>
          <p className="text-center text-[20px] sm:text-[30px] font-semibold mb-4 customFont">Bentornato/a, <span className="text-[#F7D05E] border-b border-[#F7D05E]">{userData?.user?.username}</span>!</p>
          <p className="mb-4">Ecco il tuo indovinello di oggi...</p>
          <RandomDescription pokemonDescription={pokemons.descrizione}></RandomDescription>
        </div>
      </div>

      <div className='w-full flex justify-center'>
        <div className='w-[1000px] h-[100%] mx-auto'>

          {/* Pokédex Home */}

          <div className='homePokedex mt-5 mb-10 animation2'>
            <p className='sm:text-[30px] text-[22px] font-semibold mb-3 text-center customFont'>Dai un'occhiata a questi Pokémon...</p>
            <div className='flex flex-wrap justify-center lg:justify-between md:px-28 xl:px-0'>
              {getRandomPokemon().map((pokemon, index) => (
                <div className="w-full sm:w-1/2 lg:w-1/2 xl:w-1/4 mb-10" key={index}>
                  <Card pokemonName={pokemon.nome} pokemonID={pokemon.id} pokemonType1={pokemon.tipo1} pokemonType2={pokemon.tipo2} pokemonGen={pokemon.generazione} pokemonImage={`${urlInit}${pokemon.immagine}`}></Card>
                </div>
              ))}
            </div>
            <div className='buttonSite w-[140px] mx-auto rounded text-center'>
              <NavLink to="/pokedex" className='block'>Scopri altro</NavLink>
            </div>
          </div>

          {/* Team Home */}

          <div className='animation'>
            <p className='sm:text-[30px] text-[22px] font-semibold mb-4 text-center customFont'>Crea il tuo team perfetto!</p>
            <Team></Team>
          </div>

          <div className='buttonSite w-[140px] mx-auto rounded text-center mb-10'>
            <NavLink to="/teams" className='block'>Vai ai team</NavLink>
          </div>

        </div>
      </div>

    </div>
  );
}