import React from 'react';
import pokeballLoadingGif from '../../assets/gif/pokeball_loading.gif';

const LoadingPage = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-[black] bg-opacity-80 z-50">
            <img 
                src={pokeballLoadingGif} 
                alt="Loading Pokeball" 
                className="w-[300px] h-[300px]" // Imposta la larghezza e l'altezza desiderate
            />
        </div>
    );
};

export default LoadingPage;