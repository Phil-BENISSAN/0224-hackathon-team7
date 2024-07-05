import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import NavBar from './components/NavBar/NavBar'
import Footer from "./components/Footer/Footer";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

function App() {
  // const [steps, setSteps] = useState([
  //   {
  //     id: "0",
  //     message: "Welcome to react chatbot!",
  //     trigger: "1",
    // },
    // {
    //   id: "1",
    //   message: "What is your name?",
    //   trigger: "name",
    // },
    // {
    //   id: "name",
    //   user: true,
    //   trigger: "2",
    // },
    // {
    //   id: "2",
    //   message: "Hi {previousValue}, how can I help you today?",
    //   trigger: "userQuestion",
    // },
    // {
    //   id: "userQuestion",
    //   user: true,
    //   trigger: "fetchAnswer", // Trigger API call
    // },
    // {
    //   id: "fetchAnswer",
    //   component: <FetchAnswerStep />,
    //   waitAction: true, // Wait for API response
    //   asMessage: true, // Treat API response as a message
    //   trigger: "3",
    // }
  //]);

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
    <NavBar />
      <ThemeProvider theme={theme}>
        {/* <ChatBot steps={steps} floating={true} /> */}
      </ThemeProvider>
      <Footer />
    </>
  );
}

export default App;
