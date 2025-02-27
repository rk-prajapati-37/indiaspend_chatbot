import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// ✅ Function to dynamically load reCAPTCHA v3 script
const loadRecaptcha = () => {
  const script = document.createElement("script");
  script.src =
    "https://www.google.com/recaptcha/api.js?render=6LeC5tsqAAAAAC5lYukG4yRTdDviTMLuw8tvBwSo"; // Replace with your site key
  script.async = true;
  script.defer = true;
  document.body.appendChild(script);

  script.onload = () => {
    console.log("✅ reCAPTCHA script loaded successfully!");
  };
};

// Call the function to load reCAPTCHA
loadRecaptcha();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
