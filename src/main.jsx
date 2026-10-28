import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { siteConfig } from "./config/siteConfig";
import "./index.css";

// Apply theme colours from siteConfig so a client re-brand needs only one file.
const cssVarMap = {
  deep: "--color-deep",
  deepSoft: "--color-deep-soft",
  gold: "--color-gold",
  goldSoft: "--color-gold-soft",
  ivory: "--color-ivory",
  charcoal: "--color-charcoal",
};
Object.entries(siteConfig.theme).forEach(([key, value]) => {
  if (cssVarMap[key]) {
    document.documentElement.style.setProperty(cssVarMap[key], value);
  }
});
document.title = `${siteConfig.businessName} | ${siteConfig.tagline}`;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
