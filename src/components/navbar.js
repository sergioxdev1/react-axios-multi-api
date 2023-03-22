import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

export default function Navbar() {
  return (
    <div id="topMenu">
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/pokeApi"
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
          >
            Poke API
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
            to="/usaApi"
          >
            USA API
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
            to="/dogApi"
          >
            Dog API
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
