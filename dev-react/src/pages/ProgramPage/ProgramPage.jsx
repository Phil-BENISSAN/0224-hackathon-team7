import React from "react";
import eventData from "../../assets/json/confData.json";
import "./programPage.css";

function ProgramPage() {
  return (
    <>
      <h2 className="page-main-title">PROGRAMME</h2>
      <button type="button">Filtrer</button>
      {/* filtres */}
      {/* sliders par thème : avec image et titre de l'événement dessus 

    - mettre un link pour renvoi vers la page de l'image qu'on veut    */}

      {eventData.map((event) => (
        <>
          <h3 key={event.titre}>{event.theme ? event.theme : "test"}</h3>
          {/* penser à changer la key en id */}
            <figure>
              <img src={event.image} alt="" />
              <figcaption>{event.titre}</figcaption>
            </figure>
        </>
      ))}
    </>
  );
}

export default ProgramPage;
