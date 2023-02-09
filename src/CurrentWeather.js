import React from "react";

export default function CurrentWeather(props) {
  return (
    <div className="CurrentWeather">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h1>Paris</h1>
            <ul>
              <li>
                {props.day}, {props.time}
              </li>
              <li>{props.description}</li>
              <li>Humidity: {props.humidity}%</li>
              <li>Wind: {props.wind}km/h</li>
            </ul>
          </div>
          <div className="col-6">
            <img
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png"
              alt="Weather Icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
