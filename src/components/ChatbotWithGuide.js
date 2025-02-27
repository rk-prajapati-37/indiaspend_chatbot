import React, { useState } from "react";
import Joyride from "react-joyride";

const ChatbotWithGuide = () => {
  const [run, setRun] = useState(true);

  const steps = [
    {
      target: ".chat-input",
      content: "Type your question here and press enter to submit.",
    },
    {
      target: ".faq-button",
      content: "Click here to see frequently asked questions.",
    },
    {
      target: ".feedback-button",
      content: "Provide feedback about your chatbot experience.",
    },
  ];

  return (
    <div className="chatbot-container">
      <Joyride steps={steps} run={run} continuous={true} />
      <input
        type="text"
        className="chat-input"
        placeholder="Ask something..."
      />
      <button className="faq-button">FAQ</button>
      <button className="feedback-button">Feedback</button>
    </div>
  );
};

export default ChatbotWithGuide;
