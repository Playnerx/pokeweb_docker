import { NavLink } from "react-router-dom";

export default function Card({ pokemonName, pokemonID, pokemonType1, pokemonType2, pokemonGen, pokemonImage }) {

  const getTypeColor = (type) => {
    switch (type) {
      case "Normale":
        return "bg-[#A8A77A]";
      case "Fuoco":
        return "bg-[#EE8130]";
      case "Acqua":
        return "bg-[#6390F0]";
      case "Elettro":
        return "bg-[#f7bd2c]";
      case "Erba":
        return "bg-[#7AC74C]";
      case "Ghiaccio":
        return "bg-[#96D9D6]";
      case "Lotta":
        return "bg-[#C22E28]";
      case "Veleno":
        return "bg-[#A33EA1]";
      case "Terra":
        return "bg-[#E2BF65]";
      case "Volante":
        return "bg-[#A98FF3]";
      case "Psico":
        return "bg-[#F95587]";
      case "Coleottero":
        return "bg-[#A6B91A]";
      case "Roccia":
        return "bg-[#B6A136]";
      case "Spettro":
        return "bg-[#735797]";
      case "Drago":
        return "bg-[#6F35FC]";
      case "Buio":
        return "bg-[#705746]";
      case "Acciaio":
        return "bg-[#B7B7CE]";
      case "Folletto":
        return "bg-[#D685AD]";

      default:
        return "bg-none";
    }
  };

  return (
    <NavLink to={`/pokemon/${pokemonID}`} className="block w-[230px] h-[300px] mx-auto">
      <div className="flex justify-between">
        <p className="text-[#966B19] text-[15px] font-bold ms-2 customFont2">N° {pokemonID}</p>
        <p className="text-[#966B19] text-[15px] font-bold me-2 customFont2">Gen. {pokemonGen}</p>
      </div>
      <div className='card w-[230px] h-[300px]'>
        <div className='topCard w-100 h-[200px] rounded-t-lg flex justify-center items-center'>
          <div className='bg-center bg-cover'>
            <img className="mx-auto w-[200px] pixelated" src={pokemonImage} />
          </div>
        </div>
        <div className='bottomCard w-100 h-[100px] bg-white shadow-[0_5px_10px_rgba(0,0,0,.25)] rounded-b-lg flex justify-center items-center flex-col'>
          <p className='text-center text-[30px] font-semibold capitalize mb-2'>{pokemonName}</p>
          <div className="flex justify-center">
            <div className={`${getTypeColor(pokemonType1)} rounded-[4px] w-[88px] h-6 flex justify-center items-center me-2`}>
              <p className='text-center text-white font-semibold'>{pokemonType1}</p>
            </div>
            <div className={`${getTypeColor(pokemonType2)} rounded-[4px] w-[88px] h-6 flex justify-center items-center`}>
              <p className='text-center text-white font-semibold'>{pokemonType2}</p>
            </div>
          </div>
        </div>
      </div>
    </NavLink>
  )
}