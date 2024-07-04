import EventSlider from "../../components/EventSlider/EventSlider";
import Testimonials from "../../components/Testimonials/Testimonials";
import herosectionImg from "../../../src/assets/images/herosection4-img.jpg";
import "../HomePage/homePage.css";
import "../../App.css";

function HomePage() {
  return (
    <div className="homepage">
      <main>
        <section className="description">
          <img src={herosectionImg} alt="Inclus'Event Logo" className="logo" />
          <h1>Bienvenue sur Inclus'Event </h1>
        </section>
        <section className="description-text">
          <p className="intro-text">
            🌈 Bienvenue sur notre site dédié aux événements inclusifs ! <br />
            Ici, l’inclusivité n’est pas juste un mot à la mode, c’est notre
            mission ! 
          </p>
          <section className="main-text">
            <p>
              Inspirés par l’anthropologue Charles Gardou, nous croyons qu’une
              société inclusive est une société sans privilèges, où chacun se
              sent accepté et valorisé. Notre application est spécialement
              conçue pour les entreprises qui souhaitent inviter des
              intervenants passionnés à sensibiliser leurs employés sur des
              sujets d'inclusivité. Venez découvrir nos conférences courtes
              suivies d’animations fun, pour ouvrir l’esprit et enrichir vos
              équipes. Ensemble, créons un monde où la diversité est notre plus
              grande force !
            </p>
          </section>
        </section>
        <EventSlider />
      </main>
      <Testimonials />
    </div>
  );
}

export default HomePage;
