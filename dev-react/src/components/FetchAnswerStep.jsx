import React, { useEffect, useState } from "react";

const FetchAnswerStep = (value) => {
  const [botResponse, setBotResponse] = useState("");

  useEffect(() => {
    const fetchBotResponse = async () => {
      try {
        const response = await fetch("http://localhost:8000/chat", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ question: value.steps.userQuestion.message }),
        });

        if (!response.ok) {
          throw new Error("Failed to fetch");
        }

        const data = await response.json();
        setBotResponse(data.answer); // Set bot's response to state
        console.log("User question:", value.steps.userQuestion.message); // Log user's question
        console.log("Bot response:", data.answer); // Log bot's response
        triggerNextStep(); // Trigger next step in the chatbot flow
      } catch (error) {
        console.error("Error fetching bot response:", error);
      }
    };

    if (value && value.steps.userQuestion.message) {
      fetchBotResponse();
    }
  }, [value]);

  return null;
};

export default FetchAnswerStep;
