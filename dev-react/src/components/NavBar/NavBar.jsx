import './navBar.css';

function NavBar() {
  return (
    <header className="header">
      <img src="logo.png" alt="Inclus'Event Logo" className="logo" />
      <nav>
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
