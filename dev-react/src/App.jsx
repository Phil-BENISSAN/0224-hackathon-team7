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
      message: "Salut, je suis Bob le Bot !",
      trigger: "1",
    },
    {
      id: "1",
      message: "Comment puis-je vous aider ?",
      trigger: "userQuestion",
    },
    {
      id: "userQuestion",
      user: true,
      trigger: ({ value }) => handleUserQuestion(value),
    },
    {
      id: "fetchAnswer",
      component: <FetchAnswerStep userQuestion={userQuestion} />,
      waitAction: true,
      asMessage: true,
      trigger: "3",
    },
    {
      id: "3",
      message: "Is there anything else I can assist you with?",
      trigger: "userQuestion",
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
