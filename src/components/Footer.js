import React, { useState } from "react";
import "../styles/Footer.css"; // Ensure the case matches the actual file name
import { AiOutlineSend } from "react-icons/ai"; // Import React Icons

const Footer = ({ onSubmitQuestion }) => {
  const [question, setQuestion] = useState("");

  const handleAskQuestion = () => {
    // Call the onSubmitQuestion function passed from TrendingQuestions
    onSubmitQuestion(question);
    setQuestion(""); // Reset input after submitting
  };
  const handleKeyDown = (e) => {
    // Check if the pressed key is Enter (key code 13)
    if (e.key === "Enter") {
      handleAskQuestion();
    }
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>Where Facts Meet Your Questions</h3>
        <div className="input-container">
          {/* Input field with an icon */}
          <input
            type="text"
            placeholder="Ask something here..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            onKeyDown={handleKeyDown} // Add keydown event listener
          />
          <button onClick={handleAskQuestion}>
            {/* Icon added to the button */}
            <AiOutlineSend />
          </button>
        </div>
        {/* <p>
          &copy; {new Date().getFullYear()} IDR Online. All rights reserved.
        </p> */}
      </div>
    </footer>
  );
};

export default Footer;
