import { NavLink } from 'react-router-dom';
import logoPokeweb from "../assets/img/PokewebLogo4.png";
import '../../App.css';
import { useAuth } from '../AuthProvider';


export default function Footer() {

  const { userData, setLogout } = useAuth();

  return (
    <footer className="fullFooter py-8">
      <div className="max-w-[700px] mx-auto flex flex-wrap items-center justify-center md:justify-between">
        {/* Logo */}
        <div className="w-full md:w-auto mb-6 md:mb-0 text-center">
        <NavLink to="/"><img className='mx-auto' src={logoPokeweb} width={75} /></NavLink>
        </div>

        {/* Primo Menù */}
        <div className="w-full md:w-1/4 mb-6 md:mb-0 text-center">
          <h3 className="text-white text-lg font-semibold mb-2">Links</h3>
          <ul>
            <li> <NavLink to="/" className="text-gray-400 hover:text-white">Home</NavLink></li>
            <li> <NavLink to="/pokedex" className="text-gray-400 hover:text-white">Pokédex</NavLink></li>
            <li> <NavLink to="/teams" className="text-gray-400 hover:text-white">Teams</NavLink></li>
          </ul>
        </div>

        {/* Secondo Menù */}
        <div className="w-full md:w-1/4 mb-6 md:mb-0 text-center">
          <h3 className="text-white text-lg font-semibold mb-2">Account</h3>
          <ul>
            <li><NavLink to="/cambiausername" className="text-gray-400 hover:text-white">Cambia Username</NavLink></li>
            <li> <NavLink to="/cambiaemail" className="text-gray-400 hover:text-white">Cambia Email</NavLink> </li>
            <li><NavLink to="/cambiapassword" className="text-gray-400 hover:text-white">Cambia Password</NavLink> </li>
            {userData.token && 
              <button
                onClick={setLogout}
                className="text-gray-400 hover:text-white"
              >
                Logout
              </button>
            }
          </ul>
        </div>
      </div>
    </footer>
  );
};

