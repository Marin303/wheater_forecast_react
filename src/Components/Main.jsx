import React, { useState } from "react";
import WeatherValues from "./WeatherDescription";

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
          /* console.log(data); */
        })
        .catch(() => console.error("Failed to load weather data"));
    }
  };

  return { weather, fetchWeatherData };
};

const Main = () => {
  const [location, setLocation] = useState("");
  const { weather, fetchWeatherData } = useWeatherFetch(location);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    fetchWeatherData();
    setLocation("");
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
      {weather?.cod === "404" && (
        <p className="errorMessage">
          No weather data found for the given location
        </p>
      )}
    </>
  );
};

export default Main;
