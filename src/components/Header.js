import React, { useState } from "react";
import "../styles/Header.css"; // Ensure the case matches the actual file name
import logo from "../assets/indiaspend_logo.svg";
// import apurvaLogo from "../assets/apurva-logo.png";
import { MdLightMode, MdOutlineDarkMode } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";

const Header = () => {
  const [theme, setTheme] = useState("light");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isSignupMode, setIsSignupMode] = useState(false);
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    username: "",
  });

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleAuthSubmit = (e) => {
    e.preventDefault();
    if (isSignupMode) {
      console.log("Signup Data:", credentials);
    } else {
      console.log("Login Data:", credentials);
    }
    setShowDropdown(false);
    setIsLoggedIn(true);
    setCredentials({ email: "", password: "", username: "" });
  };

  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="IndiaSpend Logo" className="logo" />
      </div>

      <div className="right-section">
        {/* <img src={apurvaLogo} alt="Apurva.ai Logo" className="apurva-logo" /> */}
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label="Toggle Theme"
        >
          {theme === "light" ? <MdOutlineDarkMode /> : <MdLightMode />}
        </button>

        <div className="user-section">
          <FaRegUserCircle
            className="user-icon"
            onClick={toggleDropdown}
            aria-label="User Menu"
          />
          {showDropdown && (
            <div className="auth-dropdown">
              <form className="auth-form" onSubmit={handleAuthSubmit}>
                <h2>{isSignupMode ? "Signup" : "Login"}</h2>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={credentials.email}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={credentials.password}
                  onChange={handleInputChange}
                  required
                />
                {isSignupMode && (
                  <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={credentials.username}
                    onChange={handleInputChange}
                    required
                  />
                )}
                <button type="submit" className="auth-submit-button">
                  {isSignupMode ? "Signup" : "Login"}
                </button>
              </form>
              <p className="auth-switch">
                {isSignupMode ? "Already have an account?" : "New here?"}{" "}
                <button
                  type="button"
                  className="auth-switch-button"
                  onClick={() => setIsSignupMode((prev) => !prev)}
                >
                  {isSignupMode ? "Login" : "Signup"}
                </button>
              </p>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
