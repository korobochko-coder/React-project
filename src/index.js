import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import SearchEngine from "./SearchEngine";
import LocationButton from "./LocationButton";
import CurrentWeather from "./CurrentWeather";
import Creator from "./Creator";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="AppContainer">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <SearchEngine />
          </div>
          <div className="col-6">
            <LocationButton />
          </div>
        </div>
      </div>
      <CurrentWeather />
    </div>
    <Creator />
  </React.StrictMode>
);

reportWebVitals();
