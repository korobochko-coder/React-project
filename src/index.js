import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import SearchEngine from "./SearchEngine";
import LocationButton from "./LocationButton";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SearchEngine />
    <LocationButton />
  </React.StrictMode>
);

reportWebVitals();
