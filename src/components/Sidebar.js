import React, { useState, useEffect } from "react";
// import { FcRight, FcLeft, FcNews } from "react-icons/fc";
import {
  MdLogout,
  MdLogin,
  MdSwitchAccount,
  MdReceiptLong,
} from "react-icons/md";
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
            {isCollapsed ? <MdLogout /> : <MdLogin />}
          </div>
          {!isCollapsed && (
            <div className="sidebar-text">
              <h4>Dashboard</h4>
            </div>
          )}
        </button>
        {!isCollapsed && (
          <>
            <button
              className="faq-button"
              onClick={() =>
                // window.open("https://www.indiaspend.com/about-us", "_blank")
                window.open("https://www.indiaspend.com/about-us")
              }
            >
              <div className="sidebar-icon">
                <MdSwitchAccount />
              </div>
              <div className="sidebar-text">
                <h4>About </h4>
              </div>
            </button>

            <button
              className="new-thread-button"
              onClick={() => window.location.reload()} // Reload the page
            >
              <div className="sidebar-icon">
                <MdReceiptLong />
              </div>
              <div className="sidebar-text">
                <h4>Start new thread</h4>
              </div>
            </button>

            <div className="previous-questions">
              <h4>Previous 7 Days</h4>
              {previousQuestions.length > 0 ? (
                <ul>
                  {previousQuestions.map((item, index) => (
                    <li key={index}>
                      <strong>Q:</strong> <h4>{item.question}</h4>
                    </li>
                  ))}
                </ul>
              ) : (
                <h5>No previous questions available</h5>
              )}
            </div>
          </>
        )}
        {isCollapsed && (
          <>
            <button
              className="faq-button"
              onClick={() =>
                // window.open("https://www.indiaspend.com/about-us", "_blank")
                window.open("https://www.indiaspend.com/about-us")
              }
            >
              <div className="sidebar-icon">
                <MdSwitchAccount />
              </div>
            </button>

            <button className="new-thread-button">
              <div className="sidebar-icon">
                <MdReceiptLong />
              </div>
            </button>
          </>
        )}
      </div>
    </aside>
  );
}

export default Sidebar;
