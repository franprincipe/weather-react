import React, { useState } from "react";
import Weather from "./Weather";
import axios from "axios";

export default function SearchEngine() {
  let [city, setCity] = useState(null);
  let [weatherData, setWeatherData] = useState(null);

  function updateCity(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = `57b2c40fdae71a6ba41d72685e3226e2`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

    axios.get(apiUrl).then(function (response) {
      setWeatherData(response.data);
    });
  }

  return (
    <div className="CitySearch">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          onChange={updateCity}
          placeholder="Enter a city..."
        />
        <input type="submit" value="Search" />
      </form>
      
      <Weather weatherData={weatherData} />
      
      <small>
  <a href="https://github.com/franprincipe/weather-react"  alt="">Open-source code</a> by Francisca Principe
  </small>

     
    </div>
  );
}
