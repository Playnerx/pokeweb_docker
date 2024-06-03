import React, { useEffect, useState } from 'react';
import iconSearch from '../components/assets/img/black-search-icon-png-8.jpg';
import iconRandom from '../components/assets/img/dice-solid.png';
import iconTop from '../components/assets/img/chevron-up-solid.png';
import switchIcon from '../components/assets/img/switch.png';
import Card from './utilities/Cards/Card';
import LoadingPokeball from './utilities/Loadings/LoadingPokeball';
import LoadingPage from './utilities/Loadings/LoadingPage';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const Pokedex = () => {
    const [pokemons, setPokemons] = useState([]);
    const [visiblePokemons, setVisiblePokemons] = useState(9);
    const [searchValue, setSearchValue] = useState('');
    const [loading, setLoading] = useState(false);
    const [loadingPage, setLoadingPage] = useState(true);
    const [sortType, setSortType] = useState('none');
    const [scrollY, setScrollY] = useState(0);

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
                    setLoadingPage(false);
                }, 500);
            })
            .catch(error => {
                console.log('Si è verificato un errore:', error);
            });
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Pokémon visibili (9)
    const loadMorePokemons = () => {
        setVisiblePokemons(prevVisiblePokemons => prevVisiblePokemons + 9);
    };

    // Filtro pokémon in base a ID
    const filteredPokemons = pokemons.filter(pokemon_data =>
        pokemon_data.nome.toLowerCase().includes(searchValue.toLowerCase()) ||
        pokemon_data.id.toString().includes(searchValue)
    );

    // Random pokémon
    const randomPokemons = () => {
        setLoading(true);
        setTimeout(() => {
            const randomPokemons = [...pokemons].sort(() => Math.random() - 0.5);
            setPokemons(randomPokemons);
            setLoading(false);
        }, 1000);
    };

    // Ordinare pokémon in base a ID
    const sortPokemons = (type) => {
        let sortedPokemons = [...pokemons];
        if (type === 'desc') {
            sortedPokemons.sort((a, b) => a.id - b.id);
        } else if (type === 'asc') {
            sortedPokemons.sort((a, b) => b.id - a.id);
        }
        setPokemons(sortedPokemons);
        setSortType(type);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    let urlInit = 'http://localhost:8000/';

    return (
        <>
            {loadingPage && <LoadingPage />}
            {loading && <LoadingPokeball />}
            <div className="relative w-full h-[160px] flex justify-center items-center wallpaper1 bg-center bg-cover animation-user">
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="text-white text-center font-semibold relative">
                    <p className="px-15 mb-4 text-sm md:text-[20px] customFont">Cerca un Pokémon per nome o per numero del Pokédex.</p>
                    <div className='mx-auto bg-white rounded-[30px] md:w-[500px] w-full py-1 flex items-center pl-4 pr-14'>
                        <input
                            className='text-[12px] sm:text-[15px] md-text-[16px] outline-none focus:outline-none text-[black] w-full bg-transparent placeholder-[12px] md:placeholder-[16px] text-left'
                            type='text'
                            placeholder='Inserisci il nome o il numero del Pokémon'
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                        />
                        <img className='w-[55px] md:w-[66px] absolute right-0 md:right-5 mr-0' src={iconSearch} alt="Icon Search" />
                    </div>
                </div>
            </div>


            <div className='w-full flex justify-center'>
                <div className='w-[1000px] h-[100%] mx-auto'>


                    {/* PULSANTI */}

                    <div className='w-full md:w-auto flex flex-col md:flex-row justify-center items-center mt-8 animation'>
                        <div className='relative buttonActions w-[220px] md:w-[250px] mx-auto mb-4 md:mb-0 rounded flex items-center justify-center'>
                            <button onClick={randomPokemons} className='block px-3 py-2 text-white text-[16px] font-semibold'>
                                <div className="flex items-center">
                                    Generatore casuale
                                    <img className='w-[28px] md:w-[32px] ml-3' src={iconRandom} alt="Icon Random" />
                                </div>
                            </button>
                        </div>

                        <div className="relative buttonActions w-[220px] md:w-[250px] mx-auto mb-4 md:mb-0 rounded">
                            <div className="flex items-center">
                                <button className="flex items-center mx-auto px-3 py-2 text-white text-[16px] font-semibold" onClick={() => sortPokemons(sortType === 'asc' ? 'desc' : 'asc')}>
                                    Ordine {sortType === 'asc' ? 'Crescente' : 'Decrescente'}
                                    <img className='w-[18px] md:w-[22px] ml-2' src={switchIcon} alt="Icon Down" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* POKEMON */}

                    <div className='homePokedex mt-3 sm:mt-10 mb-10 animation2'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4'>
                            {filteredPokemons.slice(0, visiblePokemons).map((pokemon) => (
                                <div className="mb-16" key={pokemon.id}>
                                    <Card pokemonName={pokemon.nome} pokemonID={pokemon.id} pokemonType1={pokemon.tipo1} pokemonType2={pokemon.tipo2} pokemonGen={pokemon.generazione} pokemonImage={`${urlInit}${pokemon.immagine}`} />
                                </div>
                            ))}
                        </div>
                        <div className='w-[140px] mx-auto rounded text-center'>
                            {!searchValue && <button onClick={loadMorePokemons} className='buttonSite'>Carica altro</button>}
                        </div>
                    </div>

                    {scrollY > 100 && (
                        <button
                            onClick={scrollToTop}
                            className="buttonSite2 w-[50px] fixed bottom-5 right-8 text-white font-bold py-2 px-3 rounded-[10px] shadow hidden md:block"
                        >
                            <img className='w-[30px]' src={iconTop} alt="Bottom Icon" />
                        </button>
                    )}

                </div>
            </div>
        </>
    );
};

export default Pokedex;