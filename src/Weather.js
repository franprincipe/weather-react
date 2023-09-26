import React from "react";
import "./styles.css";

export default function Weather(props) {
  if (props.weatherData) {
    let temperature = props.weatherData.main.temp;
    let humidity = props.weatherData.main.humidity;
    let wind = props.weatherData.wind.speed;
    let description = props.weatherData.weather[0].description;
    let icon = `http://openweathermap.org/img/wn/${props.weatherData.weather[0].icon}@2x.png`;

    return (
      <div className="Weather">
        <h3>{description.charAt(0).toUpperCase() + description.slice(1)}</h3>
        <ul>
          <li>Temperature: {Math.round(temperature)}°F</li>
          <li>Wind: {wind}km/h</li>
          <li>Humidity: {humidity}%</li>
        </ul>
        <img src={icon} alt="" />
      </div>
    );
  }
}
