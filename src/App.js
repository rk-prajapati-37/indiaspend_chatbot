import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import TrendingQuestions from "./components/TrendingQuestions";
import FAQ from "./components/FAQ";
import FeedbackForm from "./components/FeedbackForm"; // ✅ Import Feedback Form
import { MdClose } from "react-icons/md";

import "./App.css";

function App() {
  const [showFAQ, setShowFAQ] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false); // ✅ Feedback Modal State

  // ✅ Function to handle FAQ and Feedback visibility
  const handleShowFAQ = () => {
    setShowFAQ(true);
    setShowFeedback(false); // Feedback close ho jayega
  };

  const handleShowFeedback = () => {
    setShowFAQ(false); // FAQ close ho jayega
    setShowFeedback(true);
  };

  const closeModals = () => {
    setShowFAQ(false);
    setShowFeedback(false);
  };

  return (
    <Router>
      <div className="app">
        <div className="main-content">
          {/* ✅ Pass updated handlers */}
          <Header
            setShowFAQ={setShowFAQ}
            setShowFeedback={setShowFeedback}
            showFAQ={showFAQ}
            showFeedback={showFeedback}
          />

          <div className="content-container">
            <Sidebar
              setShowFAQ={setShowFAQ}
              setShowFeedback={setShowFeedback}
            />

            {/* TrendingQuestions sirf tab dikhe jab FAQ or Feedback band ho */}
            {!showFAQ && !showFeedback && <TrendingQuestions />}

            {/* FAQ Page */}
            {showFAQ && (
              <div className="faq-content">
                {/* <button className="close-btn" onClick={closeModals}>
                  <MdClose size={24} />
                </button> */}
                <FAQ />
              </div>
            )}

            {/* Feedback Page */}
            {showFeedback && (
              <div className="faq-content">
                {/* <button className="close-btn" onClick={closeModals}>
                  <MdClose size={24} />
                </button> */}
                <FeedbackForm />
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <section className="copyright-stion">
          <div className="copyright-disclaimer-isrk">
            <div className="disclaim-isd">
              <p>
                Disclaimer: This tool uses AI and may generate incorrect or
                misleading information. Please verify critical details from
                reliable sources.
              </p>
            </div>
            <div className="copyrigt-isd">
              <p>&copy; {new Date().getFullYear()} Indiaspend.com</p>
            </div>
          </div>
        </section>
      </div>
    </Router>
  );
}

export default App;
