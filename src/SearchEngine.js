import React, { useState } from "react";
import axios from "axios";
import CurrentWeather from "./CurrentWeather";

export default function SearchEngine(props) {
  let [weatherData, setWeatherData] = useState({ ready: false });
  Search();

  function Search() {
    const apiKey = "7t4511aeb08oa9c81f0a54cd96843e2c";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultcity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(GetData);
  }

  function GetData(response) {
    setWeatherData({
      ready: true,
      city: response.data.city,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      temperature: response.data.temperature.current,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="SearchEngine">
        <form>
          <input type="search" placeholder=" 🔍    Type your city" />
        </form>
        <CurrentWeather data={weatherData} />;
      </div>
    );
  } else {
    Search();
    return "Loading...";
  }
}
