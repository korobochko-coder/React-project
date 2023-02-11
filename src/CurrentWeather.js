import React from "react";
import DateAndTime from "./DateAndTime";

export default function CurrentWeather(props) {
  return (
    <div className="CurrentWeather">
      <div className="container">
        <div className="row">
          <h1>{props.city}</h1>
        </div>
        <div className="row">
          <div className="col-6">
            <ul>
              <li>
                <DateAndTime date={props.data.date} />
              </li>
              <li>{props.data.description}</li>
              <li>
                <strong>Humidity:</strong> {props.data.humidity}%
              </li>
              <li>
                <strong>Wind:</strong> {Math.round(props.data.wind)}km/h
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
            <span id="temperature">{Math.round(props.data.temperature)}</span>
            <span id="unit">°C</span>
          </div>
        </div>
      </div>
    </div>
  );
}
