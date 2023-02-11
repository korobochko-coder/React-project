import React, { useState } from "react";
import axios from "axios";
import CurrentWeather from "./CurrentWeather";

export default function SearchEngine(props) {
  let [weatherData, setWeatherData] = useState({ ready: false });
  let [city, setCity] = useState(props.defaultcity);
  Search();

  function Search() {
    const apiKey = "7t4511aeb08oa9c81f0a54cd96843e2c";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(GetData);
  }

  function GetData(response) {
    setWeatherData({
      ready: true,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      temperature: response.data.temperature.current,
    });
  }

  function HandleSubmit(event) {
    event.preventDefault();
    Search();
  }

  function HandleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="SearchEngine">
        <form onSubmit={HandleSubmit}>
          <input
            type="search"
            placeholder=" 🔍    Type your city"
            onChange={HandleCityChange}
          />
        </form>
        <CurrentWeather data={weatherData} city={city} />;
      </div>
    );
  } else {
    Search();
    return "Loading...";
  }
}
