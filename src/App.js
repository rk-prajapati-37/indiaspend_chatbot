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
        <Header />
        <div className="main-content">
          <Sidebar />
          <div className="content-container">
            <Routes>
              <Route path="/" element={<TrendingQuestions />} />
              {/* Add routes for other pages */}
            </Routes>
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
