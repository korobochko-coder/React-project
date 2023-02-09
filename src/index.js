import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import SearchEngine from "./SearchEngine";
import LocationButton from "./LocationButton";
import CurrentWeather from "./CurrentWeather";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";

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
      <CurrentWeather
        day="Monday"
        time="12:50"
        description="Sunny"
        humidity="10"
        wind="8"
      />
    </div>
  </React.StrictMode>
);

reportWebVitals();
