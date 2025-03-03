import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import TrendingQuestions from "./components/TrendingQuestions";
import FAQ from "./components/FAQ";
import FeedbackForm from "./components/FeedbackForm";
// import ChatbotWithGuide from "./components/ChatbotWithGuide";
import { MdClose } from "react-icons/md";

import "./App.css";

function App() {
  const [showFAQ, setShowFAQ] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);

  const handleShowFAQ = () => {
    setShowFAQ(true);
    setShowFeedback(false);
  };

  const handleShowFeedback = () => {
    setShowFAQ(false);
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
          <Header
            setShowFAQ={setShowFAQ}
            setShowFeedback={setShowFeedback}
            showFAQ={showFAQ}
            showFeedback={showFeedback}
          />

          <div className="content-container">
            {/* ✅ Sidebar */}
            <Sidebar
              setShowFAQ={setShowFAQ}
              setShowFeedback={setShowFeedback}
            />

            {/* ✅ TrendingQuestions sirf tab dikhe jab FAQ or Feedback band ho */}
            {!showFAQ && !showFeedback && <TrendingQuestions />}

            {/* ✅ Chatbot Component */}
            {/* <ChatbotWithGuide /> */}

            {/* FAQ Modal */}
            {showFAQ && (
              <div className="faq-content modal">
                <button className="close-btn" onClick={closeModals}>
                  <MdClose size={24} />
                </button>
                <FAQ />
              </div>
            )}

            {/* Feedback Modal */}
            {showFeedback && (
              <div className="faq-content modal">
                <button className="close-btn" onClick={closeModals}>
                  <MdClose size={24} />
                </button>
                <FeedbackForm />
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <section className="copyright-section">
          <div className="copyright-disclaimer">
            <p>
              Ask IndiaSpend is an AI-powered tool that derives information from
              IndiaSpend’s articles and interprets data based on our reporting.
              While we strive to provide accurate and contextual insights, some
              responses may not be current. For more information, please refer
              to our stories linked in the responses. For any concerns or
              clarifications, please reach out to us at{" "}
              <a href="mailto:respond@indiaspend.org">
                respond@indiaspend.org.
              </a>
            </p>
            <p>&copy; {new Date().getFullYear()} Indiaspend.com</p>
          </div>
        </section>
      </div>
    </Router>
  );
}

export default App;
