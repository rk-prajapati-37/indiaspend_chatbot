import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import TrendingQuestions from "./components/TrendingQuestions"; // Import the TrendingQuestions component
import Footer from "./components/Footer";
import { MdQuestionAnswer } from "react-icons/md"; // Import another icon

import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <div className="main-content">
          <Header />
          {/* <div className="sub-content"> */}
          <div className="content-container">
            <Sidebar />
            <Routes>
              <Route path="/" element={<TrendingQuestions />} />
              {/* Add routes for other pages */}
            </Routes>
          </div>
          {/* </div> */}
        </div>
        {/* <Footer /> */}
        {/* <p>
          &copy; {new Date().getFullYear()} ask.indiaspend.com Online. All
          rights reserved.
        </p> */}
      </div>
    </Router>
  );
}

export default App;
