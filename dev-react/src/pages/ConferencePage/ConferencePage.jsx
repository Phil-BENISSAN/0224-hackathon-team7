import React from "react";
import "./conferencePage.css";
import conferenceImg from "../../assets/images/conference.jpg";
import { useLoaderData } from "react-router-dom";

function ConferencePage() {
  const conference = useLoaderData();
  console.log(conference);
  return (
    <main className="conference-page">
      <div>
        <h1>{conference.titre}</h1>
        <h2>{conference.mobilite}</h2>
        <h2>Durée prévue : {conference.duree_total}</h2>
        <img src={conferenceImg} alt="" />
        <h2>{conference.theme}</h2>
      </div>
      <div className="conference-infos">
        <h3>{conference.intervenant}</h3>
        <p>{conference.descriptif}</p>
      </div>
      <div className="conference-buttons">
        <button type="button">Prendre contact</button>
        <button type="button">Ajouter au calendrier</button>
      </div>
    </main>
  );
}

export default ConferencePage;
