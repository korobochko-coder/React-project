import React from "react";

export default function CurrentWeather(props) {
  return (
    <div className="CurrentWeather">
      <div className="container">
        <div className="row">
          <h1>Paris</h1>
        </div>
        <div className="row">
          <div className="col-6">
            <ul>
              <li>
                {props.day}, {props.time}
              </li>
              <li>{props.description}</li>
              <li>
                <strong>Humidity:</strong> {props.humidity}%
              </li>
              <li>
                <strong>Wind:</strong> {props.wind}km/h
              </li>
            </ul>
          </div>
          <div className="col-3">
            <img
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png"
              alt="Weather Icon"
            />
          </div>
          <div className="col-3">
            <span id="temperature">{props.temperature}</span>
            <span id="unit">°C</span>
          </div>
        </div>
      </div>
    </div>
  );
}
