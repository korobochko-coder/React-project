import React, { useState } from "react";
import axios from "axios";
import DateAndTime from "./DateAndTime";

export default function CurrentWeather(props) {
  let [ready, setReady] = useState(false);
  let [weatherData, setWeatherData] = useState({});

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      temperature: response.data.temperature.current,
    });
    setReady(true);
  }

  if (ready) {
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
                  <DateAndTime date={weatherData.date} />
                </li>
                <li>{weatherData.description}</li>
                <li>
                  <strong>Humidity:</strong> {weatherData.humidity}%
                </li>
                <li>
                  <strong>Wind:</strong> {Math.round(weatherData.wind)}km/h
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
              <span id="temperature">
                {Math.round(weatherData.temperature)}
              </span>
              <span id="unit">°C</span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "7t4511aeb08oa9c81f0a54cd96843e2c";
    let city = "Paris";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return <h1>Loading...</h1>;
  }
}
