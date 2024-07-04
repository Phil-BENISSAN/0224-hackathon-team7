import React from "react";
import "./conferencePage.css";
import conferenceImg from "../../assets/images/conference.jpg";
import { useLoaderData } from "react-router-dom";

function ConferencePage() {
  const conference = useLoaderData();
  console.log(conference);
  return (
    <main className="conference-page">
      <h1>Conférence sur la Diversité et l'Inclusion</h1>
      <img src={conferenceImg} alt="" />
      <h2>
        Discussions avec des experts sur les meilleures pratiques pour créer un
        environnement inclusif.
      </h2>
    </main>
  );
}

export default ConferencePage;
