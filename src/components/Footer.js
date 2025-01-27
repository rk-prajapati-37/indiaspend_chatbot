import React, { useState } from "react";
import "../styles/Footer.css"; // Ensure the case matches the actual file name
import { MdSend } from "react-icons/md"; // Import React Icons

const Footer = ({ onSubmitQuestion, onLoading }) => {
  const [question, setQuestion] = useState("");
  console.log(onLoading);

  const handleAskQuestion = () => {
    // Prevent submission if input is empty
    if (!question.trim()) {
      alert("Please enter a question before submitting!");
      return;
    }

    // Call the onSubmitQuestion function passed from TrendingQuestions
    onSubmitQuestion(question);

    // Reset input after submitting and simulate answer fetching delay
    setQuestion("");
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
        <div className="input-container">
          {/* Input field with an icon */}
          <input
            type="text"
            placeholder="Ask something here..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            onKeyDown={handleKeyDown} // Add keydown event listener
            disabled={onLoading} // Disable input while loading
          />
          <button
            onClick={handleAskQuestion}
            disabled={onLoading || question == ""} // Disable button while loading or empty input
          >
            {/* Icon added to the button */}
            <MdSend />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
