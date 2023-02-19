import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, HashRouter as Router } from "react-router-dom";
import App from "./app/App";
import "./index.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
