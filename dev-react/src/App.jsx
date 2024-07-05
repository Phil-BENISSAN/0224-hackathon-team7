import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import FetchAnswerStep from "./components/FetchAnswerStep";

function App() {
  const [userQuestion, setUserQuestion] = useState("");

  const handleUserQuestion = (value) => {
    setUserQuestion(value);
    return "fetchAnswer";
  };

  const steps = [
    {
      id: "0",
      message: "Salut, je suis Bob le Bot ! Comment puis-je vous aider ?",
      trigger: "userQuestion",
    },
    {
      id: "userQuestion",
      user: true,
      trigger: "askEventPurpose",
    },
    {
      id: "askEventPurpose",
      message: "Pour quel type d'événement souhaitez-vous obtenir des idées ?",
      trigger: "eventTypes",
    },
    {
      id: "eventTypes",
      options: [
        {
          value: "conference",
          label: "Conférence",
          trigger: "conferenceIdeas",
        },
        { value: "workshop", label: "Atelier", trigger: "workshopIdeas" },
        {
          value: "networking_event",
          label: "Événement de réseautage",
          trigger: "networkingIdeas",
        },
        { value: "other", label: "Autre", trigger: "otherEventIdeas" },
      ],
    },
    {
      id: "conferenceIdeas",
      message:
        "Voici quelques idées pour organiser une conférence : Organiser des panels de discussion sur des sujets pertinents pour votre industrie. Inviter des conférenciers de renommée internationale. Proposer des sessions interactives pour favoriser l'engagement du public.",
      end: true,
    },
    {
      id: "workshopIdeas",
      message:
        "Voici quelques idées pour organiser un atelier : Organiser des sessions pratiques et interactives. Proposer des ateliers de formation animés par des experts. Créer des activités de brainstorming pour stimuler la créativité.",
      end: true,
    },
    {
      id: "networkingIdeas",
      message:
        "Voici quelques idées pour organiser un événement de réseautage : Organiser des sessions de speed networking. Proposer des tables rondes thématiques pour faciliter les discussions entre les participants. Créer des espaces de networking informels pour encourager les échanges.",
      end: true,
    },
    {
      id: "otherEventIdeas",
      message:
        "Voici quelques idées pour organiser un autre type d'événement : Organiser des événements communautaires pour renforcer les liens au sein de votre organisation. Proposer des activités de team building pour renforcer l'esprit d'équipe. Créer des événements de célébration pour marquer des occasions spéciales.",
      end: true,
    },
  ];

  const theme = {
    background: "#f5f8fb",
    fontFamily: "Helvetica Neue",
    headerBgColor: "#0a2c42",
    headerFontColor: "#fff",
    headerFontSize: "15px",
    botBubbleColor: "#0a2c42",
    botFontColor: "#fff",
    userBubbleColor: "#fff",
    userFontColor: "#4a4a4a",
  };

  return (
    <>
      <Outlet />
      <ThemeProvider theme={theme}>
        <ChatBot steps={steps} floating={true} />
      </ThemeProvider>
      <Footer />
    </>
  );
}

export default App;
