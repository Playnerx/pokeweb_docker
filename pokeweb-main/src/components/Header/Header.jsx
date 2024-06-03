import { useState, useRef, useEffect } from 'react';
import userAvatar from "../assets/img/user.png";
import homeIcon from "../assets/img/house-solid.png";
import pokeIcon from "../assets/img/pokeball.bafce1b0.jpg";
import buildIcon from "../assets/img/pen-to-square-regular.png";
import logoPokeweb from "../assets/img/PokewebLogo4.png";
import { NavLink } from 'react-router-dom';
import { useAuth } from '../AuthProvider';
import DropdownMenu from './DropdownMenu';




export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuHamburgerOpen, setMenuHamburgerOpen] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  const { userData, setLogout } = useAuth();

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleMenuHamburger = () => {
    setMenuHamburgerOpen(!menuHamburgerOpen);
  };

  return (
    <div className='fullNavbar navbarBorder'>
      <div className="navbar max-2xl:w-[80%] flex justify-between items-center mx-auto">
        <div className='w-max'>
          <div>
            <NavLink to="/"><img src={logoPokeweb} width={75} /></NavLink>
          </div>
        </div>

        {/* Menu hamburger */}
        <div className="lg:hidden">
          <button onClick={toggleMenuHamburger} className="text-white focus:outline-none">
            <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {menuHamburgerOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m0 6h-16" />
              )}
            </svg>
          </button>
          {/* Dropdown del menu */}
          <div className={`${menuHamburgerOpen ? 'h-[200px]' : 'h-0'} z-50 overflow-hidden flex justify-center items-center absolute left-0 w-full bg-white duration-500 mt-[28px] shadow-[0_5px_10px_rgba(0,0,0,.25)]`}>
            <DropdownMenu></DropdownMenu>
          </div>
        </div>

        {/* Menu centrato */}
        <div className='centralNavbar hidden lg:block'>
          <ul className='flex justify-between'>
            <li className='navMenu marginNav font-bold text-white'>
              <NavLink to="/" className={({ isActive }) => {
                return `h-[98px] items-center px-7 ${isActive ? 'navActive' : ''}`
              }}>
                <p><img className='iconImage mx-auto mb-2' src={homeIcon} alt="Home Icon" /></p>
                <p>Home</p>
              </NavLink>
            </li>
            <li className='navMenu marginNav font-bold text-white'>
              <NavLink to="/pokedex" className={({ isActive }) => {
                return `h-[98px] items-center px-7 ${isActive ? 'navActive' : ''}`
              }}>
                <p><img className='iconImage mx-auto mb-2' src={pokeIcon} alt="Poké Icon" /></p>
                <p>Pokédex</p>
              </NavLink>
            </li>
            <li className='navMenu font-bold text-white'>
              <NavLink to="/teams" className={({ isActive }) => {
                return `h-[98px] items-center px-7 ${isActive ? 'navActive' : ''}`
              }}>
                <p><img className='iconImage mx-auto mb-2' src={buildIcon} alt="Build Icon" /></p>
                <p>Teams</p>
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Menu LogIn */}
        <div className="endNavbar hidden lg:flex items-center">
          <div className="relative" ref={dropdownRef}>
            <button
              className="focus:outline-none flex items-center"
              onClick={toggleMenu}
            >
              <div className="flex flex-col items-center">
                <img className='iconImage' src={userAvatar} alt="User Avatar" />
                <p className="text-white mt-2 font-semibold display">{userData?.user?.username}</p>
              </div>
            </button>
            {menuOpen && (
  <div className="z-10 absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg">
        <NavLink to="/cambiausername">
          <button className="w-full block px-4 py-2 font-semibold text-gray-800 hover:bg-gray-200 rounded-lg shadow-lg">
            Cambia username
          </button>
        </NavLink>
        <NavLink to="/cambiaemail">
          <button className="w-full block px-4 py-2 font-semibold text-gray-800 hover:bg-gray-200 rounded-lg shadow-lg">
            Cambia email
          </button>
        </NavLink>
        <NavLink to="/cambiapassword">
          <button className="w-full block px-4 py-2 font-semibold text-gray-800 hover:bg-gray-200 rounded-lg shadow-lg">
            Cambia password
          </button>
        </NavLink>
        {userData.token &&
      <>
        <button 
          ref={buttonRef}
          onClick={setLogout}
          className="w-full block px-4 py-2 font-semibold text-gray-800 hover:bg-gray-200 rounded-lg shadow-lg"
        >
          Logout
        </button>
      </>
    }
  </div>
)}
          </div>
        </div>

      </div>
    </div>
  );
}