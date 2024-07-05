import './testimonials.css';

function Testimonials() {
  return (
    <section className="testimonials">
      <h2>Ils nous ont fait confiance</h2>
      <h3>Découvrez les témoignages</h3>
      <div className="testimonials-container">
        <div className="testimonial-card">
          <img src="./src/assets/images/person1.png" alt="Jean Dupont" className="testimonial-photo" />
          <p className="testimonial-text">"Cette conférence a transformé notre façon de voir l'inclusivité au sein de notre entreprise. Les intervenants étaient inspirants et les animations vraiment engageantes!"</p>
          <p className="testimonial-author">- Jean Dupont, Directeur RH</p>
        </div>
        <div className="testimonial-card">
          <img src="./src/assets/images/personne2.png" alt="Marie Curie" className="testimonial-photo" />
          <p className="testimonial-text">"Un événement bien organisé avec des intervenants passionnés. Cela a vraiment ouvert les yeux de notre équipe sur l'importance de l'inclusivité."</p>
          <p className="testimonial-author">- Anais Martin, Chef de Projet</p>
        </div>
        <div className="testimonial-card">
          <img src="./src/assets/images/person3.png" alt="Ahmed Benali" className="testimonial-photo" />
          <p className="testimonial-text">"Les conférences étaient à la fois informatives et engageantes. Nos employés ont beaucoup appris et se sentent plus impliqués dans nos initiatives d'inclusivité."</p>
          <p className="testimonial-author">- Morgan Arthur, Responsable Communication</p>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;


