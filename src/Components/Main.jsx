import React, { useState } from "react";

import ChangeBackground from "./ChangeBackground";
import noWeather from "../Images/noWeather.png";
const useWeatherFetch = (location) => {
  const [weather, setWeather] = useState(null);

  const fetchWeatherData = () => {
    if (location) {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
      )
        .then((res) => res.json())
        .then((data) => {
          setWeather(data);
          console.log(data);
        })
        .catch(() => console.log("Failed to load weather data"));
    }
  };

  return { weather, fetchWeatherData };
};
const getWindDirection = (degree) => {
  const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
  const index = Math.round((degree % 360) / 45);
  return directions[index];
};

const getVisibilityDescription = (visibility) => {
  switch (true) {
    case visibility >= 1000:
      return "Excellent";

    case visibility >= 500:
      return "Good";

    case visibility >= 100:
      return "Moderate";

    default:
      return "Poor";
  }
};

const getCloudinessDescription = (cloudiness) => {
  const cloudy = cloudiness >= 20 && cloudiness <= 60;

  switch (true) {
    case cloudiness < 20:
      return "Clear";
    case cloudy:
      return "Partly Cloudy";
    default:
      return "Cloudy";
  }
};

const WeatherValues = ({ weather }) => {
  const {
    name = "-",
    sys: { country } = {},
    main: { temp, humidity, pressure } = {},
    wind: { speed, deg } = {},
    visibility = "-",
    clouds: { all: cloudiness } = {},
    weather: [weatherDetails = {}] = [],
  } = weather || {};

  return (
    <div className="weatherValues">
      <div className="weatherIcon">
        {weatherDetails.main ? (
          <ChangeBackground condition={weatherDetails.main} />
        ) : (
          <img src={noWeather} alt="empty cloud" />
        )}
      </div>

      <p>Description: {weatherDetails.description || "-"}</p>
      <p>Search: {name}</p>
      <p>Country: {country || "-"}</p>
      <p>Temperature: {temp || "-"}°C</p>
      <p>Wind speed: {speed || "-"} m/s</p>
      <p>
        Wind direction: {deg || "0"}° {deg ? getWindDirection(deg) : "-"}
      </p>
      <p>Humidity: {humidity || "-"}%</p>
      <p>Pressure: {pressure || "-"} hPa</p>
      <p>
        Visibility: {visibility !== "-" ? visibility / 1000 : visibility} km{" "}
        {visibility !== "-" ? `(${getVisibilityDescription(visibility)})` : ""}
      </p>
      <p>
        Cloudiness: {cloudiness || "0"}%{" "}
        {cloudiness ? `(${getCloudinessDescription(cloudiness)})` : ""}
      </p>
    </div>
  );
};

const Main = () => {
  const [location, setLocation] = useState("");
  const { weather, fetchWeatherData } = useWeatherFetch(location);
  const [checkCondition, setCheckCondition] = useState(false);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    fetchWeatherData();
    setLocation("");
    setCheckCondition(true);
  };

  return (
    <>
      <h1>Weather Forecast</h1>
      <form onSubmit={handleOnSubmit} className="WeatherContainer">
        <input
          type="text"
          onChange={(e) => setLocation(e.target.value)}
          value={location}
          autoFocus={true}
          placeholder="Enter country/city name"
        />
        <button type="submit">Search</button>
      </form>

      <WeatherValues weather={weather} />

      {checkCondition && !weather && (
        <p className="errorMessage">
          No weather data found for the given location
        </p>
      )}
    </>
  );
};

export default Main;
