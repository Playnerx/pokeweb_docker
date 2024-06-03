import React from 'react'
import { useAuth } from '../AuthProvider';
import { NavLink } from 'react-router-dom';

export default function DropdownMenu() {
  const { userData, setLogout } = useAuth();

  return (
    <ul className="w-full text-center">
      <li className="my-2 hover:bg-[black]">
        <NavLink to="/" className="hover:text-white font-bold block px-4 py-2">
          Home
        </NavLink>
      </li>
      <li className="my-2 hover:bg-[black]">
        <NavLink to="/pokedex" className="hover:text-white font-bold block px-4 py-2">
          Pokédex
        </NavLink>
      </li>
      <li className="my-2 hover:bg-[black]">
        <NavLink to="/teams" className="hover:text-white font-bold block px-4 py-2">
          Teams
        </NavLink>
      </li>
      {userData.token && (
        <li className="my-2 hover:bg-[black]">
          <button
            onClick={setLogout}
            className="w-full hover:text-white font-bold block px-4 py-2 bg-transparent focus:outline-none"
          >
            Logout
          </button>
        </li>
      )}
    </ul>
  )
}