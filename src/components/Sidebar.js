import React, { useState, useEffect } from "react";
import { FcRight, FcLeft, FcCollaboration, FcNews } from "react-icons/fc";
import "../styles/Sidebar.css";

function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [previousQuestions, setPreviousQuestions] = useState([]);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  useEffect(() => {
    // Load history from localStorage
    const storedHistory =
      JSON.parse(localStorage.getItem("questionHistory")) || [];
    setPreviousQuestions(storedHistory.slice(0, 5)); // Show the last 5 questions
  }, []); // Runs only on component mount

  return (
    <aside className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      <div className="sidebar-content">
        <button className="toggle-button sidebar-icon" onClick={toggleSidebar}>
          <div className="sidebar-icon">
            {isCollapsed ? <FcRight /> : <FcLeft />}
          </div>
          {!isCollapsed && <div className="sidebar-text">Dashboard</div>}
        </button>
        {!isCollapsed && (
          <>
            <button
              className="faq-button"
              onClick={() =>
                // window.open("https://www.indiaspend.com/contact-us", "_blank")
                window.open("https://www.indiaspend.com/contact-us")
              }
            >
              <div className="sidebar-icon">
                <FcCollaboration />
              </div>
              <div className="sidebar-text">FAQ</div>
            </button>

            <button
              className="new-thread-button"
              onClick={() => window.location.reload()} // Reload the page
            >
              <div className="sidebar-icon">
                <FcNews />
              </div>
              <div className="sidebar-text">Start new thread</div>
            </button>

            <div className="previous-questions">
              <h3>Previous 7 Days</h3>
              {previousQuestions.length > 0 ? (
                <ul>
                  {previousQuestions.map((item, index) => (
                    <li key={index}>
                      <strong>Q:</strong> {item.question}
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No previous questions available</p>
              )}
            </div>
          </>
        )}
        {isCollapsed && (
          <>
            <button
              className="faq-button"
              onClick={() =>
                // window.open("https://www.indiaspend.com/contact-us", "_blank")
                window.open("https://www.indiaspend.com/contact-us")
              }
            >
              <div className="sidebar-icon">
                <FcCollaboration />
              </div>
            </button>

            <button className="new-thread-button">
              <div className="sidebar-icon">
                <FcNews />
              </div>
            </button>
          </>
        )}
      </div>
    </aside>
  );
}

export default Sidebar;
