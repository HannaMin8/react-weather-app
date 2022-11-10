import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  let apiKey = "17e6938b8ca35f2e9d6cfa919b2079c1";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecastDay">Thuesday</div>
          <WeatherIcon code="01n" size={36} />
          <div className="WeatherForecastTemperature">
            <span className="WeatherForecastTemperatureMax">19</span>
            <span className="WeatherForecastTemperatureMin">10</span>
          </div>
        </div>
      </div>
    </div>
  );
}
