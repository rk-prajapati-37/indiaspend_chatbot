import React, { useState, useEffect } from "react";
import {
  FaInfoCircle,
  FaQuestionCircle,
  FaTransgenderAlt,
  FaLink,
  FaBook,
} from "react-icons/fa";
import { FaEarthAsia } from "react-icons/fa6";
import { BsChatDotsFill } from "react-icons/bs";
import { RiChatAiFill } from "react-icons/ri";
import { MdMail } from "react-icons/md";
import {
  TbLayoutSidebarLeftCollapseFilled,
  TbLayoutSidebarRightCollapseFilled,
} from "react-icons/tb";

import "../styles/Sidebar.css";

function Sidebar({ setShowFAQ, setShowFeedback }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [previousQuestions, setPreviousQuestions] = useState([]);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  useEffect(() => {
    const storedHistory =
      JSON.parse(localStorage.getItem("questionHistory")) || [];
    setPreviousQuestions(storedHistory.slice(0, 5));
  }, []);

  return (
    <aside className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      <div className="sidebar-content">
        {/* Sidebar Toggle Button */}
        <p className="toggle-button sidebar-icon" onClick={toggleSidebar}>
          {isCollapsed ? (
            <TbLayoutSidebarLeftCollapseFilled size={25} />
          ) : (
            <TbLayoutSidebarRightCollapseFilled size={25} />
          )}
          <span className={`sidebar-text ${isCollapsed ? "" : "hidden"}`}>
            Collapse
          </span>
        </p>

        {/* Quick Links */}
        <div className={`ttlquicklink ${isCollapsed ? "" : "hidden"}`}>
          <h2>Quick Links</h2>
        </div>

        {[
          {
            text: "IndiaSpend",
            link: "https://www.indiaspend.com",
            icon: <FaLink />,
          },
          {
            text: "Earthcheck India",
            link: "https://www.indiaspend.com/earthcheckindia",
            icon: <FaEarthAsia />,
          },
          {
            text: "Education Check",
            link: "https://www.indiaspend.com/education-check",
            icon: <FaBook />,
          },
          {
            text: "GenderCheck",
            link: "https://www.indiaspend.com/gendercheck",
            icon: <FaTransgenderAlt />,
          },
          {
            text: "Newsletters",
            link: "https://www.indiaspend.com/subscribe",
            icon: <MdMail />,
          },
          {
            text: "About",
            link: "https://www.indiaspend.com/about-us",
            icon: <FaInfoCircle />,
          },
        ].map((item, index) => (
          <p
            key={index}
            className="faq-button"
            onClick={() => window.open(item.link)}
          >
            <div className="sidebar-icon">{item.icon}</div>
            <span className={`sidebar-text ${isCollapsed ? "" : "hidden"}`}>
              {item.text}
            </span>
          </p>
        ))}

        {/* FAQ Button */}
        <p
          className="faq-button"
          onClick={() => {
            setShowFAQ(true);
            setShowFeedback(false); // ✅ Feedback ko close karein
          }}
        >
          <div className="sidebar-icon">
            <FaQuestionCircle />
          </div>
          <span className={`sidebar-text ${isCollapsed ? "" : "hidden"}`}>
            FAQ
          </span>
        </p>

        {/* Feedback Button ✅ */}
        <p
          className="faq-button"
          onClick={() => {
            setShowFeedback(true);
            setShowFAQ(false); // ✅ FAQ ko close karein
          }}
        >
          <div className="sidebar-icon">
            <BsChatDotsFill />
          </div>
          <span className={`sidebar-text ${isCollapsed ? "" : "hidden"}`}>
            Feedback
          </span>
        </p>

        {/* New Thread Button */}
        <p
          className="new-thread-button"
          onClick={() => window.location.reload()}
        >
          <div className="sidebar-icon">
            <RiChatAiFill />
          </div>
          <span className={`sidebar-text ${isCollapsed ? "" : "hidden"}`}>
            Start new thread
          </span>
        </p>

        {/* ✅ Previous Questions - Always Visible */}
        <div className="previous-questions">
          <h2>Previous 7 Days</h2>
          {previousQuestions.length > 0 ? (
            <ul>
              {previousQuestions.map((item, index) => (
                <li key={index}>
                  <p>{item.question}</p>
                </li>
              ))}
            </ul>
          ) : (
            <h5>No previous questions available</h5>
          )}
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
