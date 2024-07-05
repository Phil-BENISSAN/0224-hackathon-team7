import { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./navBar.css";
import "../../App.css";
import logo from "../../../src/assets/images/logo-avectexte.png";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <img src={logo} alt="Inclus'Event Logo" className="logo" />
      <button type="button" className="burger-menu" onClick={toggleMenu}>
        {menuOpen ? "x" : "☰"}
      </button>
      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/program">Événements</Link>
          </li>
          <li>
            <Link to="/about">À propos</Link>
          </li>
          <li>
            <Link to="/login">Connexion</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
