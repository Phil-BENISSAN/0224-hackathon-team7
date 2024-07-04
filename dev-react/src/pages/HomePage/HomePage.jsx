import NavBar from '../../components/NavBar/NavBar';
import EventSlider from '../../components/EventSlider/EventSlider';
import Footer from '../../components/Footer/Footer'
// import Testimonials from './Testimonials';
import '../HomePage/homePage.css';

function HomePage() {
  return (
    <div className="homepage">
      <NavBar />
      <main>
      <section className="description">
      <h1>Bienvenue sur Inclus'Event 🌈!</h1>
      <p>
      Bienvenue sur notre site dédié aux événements inclusifs ! 🌈 Ici, l’inclusivité n’est pas juste un mot à la mode, c’est notre mission ! Inspirés par l’anthropologue Charles Gardou, nous croyons qu’une société inclusive est une société sans privilèges, où chacun se sent accepté et valorisé. Notre application est spécialement conçue pour les entreprises qui souhaitent inviter des intervenants passionnés à sensibiliser leurs employés sur des sujets d'inclusivité. Venez découvrir nos conférences courtes suivies d’animations fun, pour ouvrir l’esprit et enrichir vos équipes. Ensemble, créons un monde où la diversité est notre plus grande force !</p>
      </section>
        <EventSlider /> 
      </main>
      {/* <Testimonials /> */}
      <Footer/>
    </div>
  );
}

export default HomePage;

