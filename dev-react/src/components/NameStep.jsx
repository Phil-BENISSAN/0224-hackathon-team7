import { useEffect, useState } from "react";

const FetchAnswerStep = ({ triggerNextStep }) => {
  const [userQuestion, setUserQuestion] = useState("");
  const [botResponse, setBotResponse] = useState("");

  useEffect(() => {
    const fetchBotResponse = async () => {
      try {
        const response = await fetch("http://localhost:8501/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ question: userQuestion }),
        });

        if (!response.ok) {
          throw new Error("Failed to fetch");
        }

        const data = await response.json();
        setBotResponse(data.answer);
        triggerNextStep({ value: botResponse, trigger: "3" });
      } catch (error) {
        console.error("Error fetching bot response:", error);
      }
    };

    fetchBotResponse();
  }, [userQuestion, triggerNextStep, botResponse]);

  return null;
};

export default FetchAnswerStep;
