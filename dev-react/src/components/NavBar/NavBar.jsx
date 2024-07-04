import React, { useState } from 'react';
import './navBar.css'; 
import '../../App.css'; 
import logo from '../../../src/assets/images/logo-avectexte.png'; 

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <img src={logo} alt="Inclus'Event Logo" className="logo" />
      <button type="button" className="burger-menu" onClick={toggleMenu}>
        {menuOpen ? 'x' : '☰'}
      </button>
      <nav className={`nav ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#">Accueil</a></li>
          <li><a href="#">Événements</a></li>
          <li><a href="#">Témoignages</a></li>
          <li><a href="#">À propos</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
