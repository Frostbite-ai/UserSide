import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
// import i18n (needs to be bundled ;))
import "./i18n";

const dfMessengerScript = document.createElement("script");
dfMessengerScript.src =
  "https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1";
dfMessengerScript.async = true;

document.body.appendChild(dfMessengerScript);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
