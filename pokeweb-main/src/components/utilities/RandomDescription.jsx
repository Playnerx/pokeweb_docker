import React, { useState, useEffect } from 'react';
import switchIcon from '../../components/assets/img/switch.png';

export default function RandomDescription() {
  const [pokemonDescriptions, setPokemonDescriptions] = useState([]);
  const [randomDescription, setRandomDescription] = useState(null);
  const [userAnswer, setUserAnswer] = useState('');
  const [resultMessage, setResultMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:8000/api/pokemon')
      .then(response => {
        if (!response.ok) {
          throw new Error('Request Error');
        }
        return response.json();
      })
      .then(data => {
        setPokemonDescriptions(data);
      })
      .catch(error => {
        console.log('Si è verificato un errore:', error);
      });
  }, []);

  useEffect(() => {
    if (pokemonDescriptions.length > 0) {
      const randomIndex = Math.floor(Math.random() * pokemonDescriptions.length);
      setRandomDescription(pokemonDescriptions[randomIndex]);
    }
  }, [pokemonDescriptions]);

  const handleUserAnswer = event => {
    setUserAnswer(event.target.value.toLowerCase());
  };

  const handleKeyPress = event => {
    if (event.key === 'Enter') {
      checkAnswer();
    }
  };

  const refreshRandomDescription = () => {
    const randomIndex = Math.floor(Math.random() * pokemonDescriptions.length);
    setRandomDescription(pokemonDescriptions[randomIndex]);
    setResultMessage('');
    setUserAnswer('');
  };

  const checkAnswer = () => {
    if (!randomDescription || !pokemonDescriptions.length) return;

    const descriptionId = randomDescription.id;
    const foundDescription = pokemonDescriptions.find(description => description.id === descriptionId);

    if (!foundDescription) {
      console.log('Impossibile trovare la descrizione corrispondente.');
      return;
    }

    const pokemonName = foundDescription.nome.toLowerCase();

    if (userAnswer === pokemonName) {
      setResultMessage(<span style={{ color: '#90ee90' }}>Risposta Corretta!</span>);
    } else {
      setResultMessage(<span style={{ color: '#f08080' }}>Risposta Sbagliata!</span>);
    }
  };

  return (
    <>
      {randomDescription && (
        <>
          <p className='text-[15px] sm:text-[16px] px-4 italic text-[#E8DAA4]'>"{randomDescription.descrizione}"</p>
          <p className="mt-4">Di che Pokémon sto parlando?</p>
          <div className='inputFieldRandom w-[200px] mx-auto'>
            <input className="text-center" type="text" value={userAnswer} onChange={handleUserAnswer} onKeyPress={handleKeyPress} />
          </div>
          <div className="mt-5 flex justify-center">
            <button className="buttonSite mr-2" onClick={checkAnswer}>Indovina</button>
            <button className="buttonSite2 w-[46px] md:w-[50px]" onClick={refreshRandomDescription}><img src={switchIcon} alt="Refresh Icon" /></button>
          </div>
          {resultMessage && <p className='mt-4'>{resultMessage}</p>}
        </>
      )}
    </>
  );
}