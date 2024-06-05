import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {AppState} from "./state/AppState";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppState>
      <App />
    </AppState>
  </React.StrictMode>
);
