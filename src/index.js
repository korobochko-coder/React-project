import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import SearchEngine from "./SearchEngine";
import Creator from "./Creator";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="AppContainer">
      <SearchEngine defaultcity="Paris" />
    </div>
    <Creator />
  </React.StrictMode>
);

reportWebVitals();
