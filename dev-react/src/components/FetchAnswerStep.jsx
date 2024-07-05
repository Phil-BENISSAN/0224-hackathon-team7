import React, { useEffect, useState } from "react";

const FetchAnswerStep = ({ value, triggerNextStep }) => {
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
        setBotResponse(data.reply); // Set bot's response to state
        console.log("User question:", value.steps.userQuestion.message);
        console.log("Bot response:", data.reply);
        triggerNextStep({ value: data.reply, trigger: "3" }); // Trigger next step with bot's response
      } catch (error) {
        console.error("Error fetching bot response:", error);
      }
    };

    if (value && value.steps.userQuestion.message) {
      fetchBotResponse();
    }
  }, [value, triggerNextStep]);

  return null;
};

export default FetchAnswerStep;
