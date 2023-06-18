import React, { useState } from "react";

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
const getHumidityDescription = (humidity) => {
  if (humidity < 30) {
    return "Dry";
  } else if (humidity >= 30 && humidity <= 70) {
    return "Moderate";
  } else {
    return "Humid";
  }
};
const getVisibilityDescription = (visibility) => {
  if (visibility >= 1000) {
    return "Excellent";
  } else if (visibility >= 500 && visibility < 1000) {
    return "Good";
  } else if (visibility >= 100 && visibility < 500) {
    return "Moderate";
  } else {
    return "Poor";
  }
};
const getCloudinessDescription = (cloudiness) => {
  if (cloudiness < 20) {
    return "Clear";
  } else if (cloudiness >= 20 && cloudiness <= 60) {
    return "Partly Cloudy";
  } else {
    return "Cloudy";
  }
};
const Fetch = () => {
  const [location, setLocation] = useState("");
  const { weather, fetchWeatherData } = useWeatherFetch(location);
  const [checkCondition, setCheckCondition] = useState(false);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setLocation("");
    setCheckCondition(true);
  };

  return (
    <div>
      <form onSubmit={handleOnSubmit} className="WeatherContainer">
        <input
          type="text"
          onChange={(e) => setLocation(e.target.value)}
          value={location}
          autoFocus={true}
          placeholder="Enter country/city name"
        />
        <button onClick={fetchWeatherData}>Search</button>
      </form>

      {weather?.main ? (
        <div className="weatherValues">
          <p>Search: {weather.name}</p>
          <p>Country: {weather.sys.country}</p>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Wind speed: {weather.wind.speed} m/s</p>
          <p>
            Wind direction: {weather.wind.deg}°
            {getWindDirection(weather.wind.deg)}
          </p>
          <p>
            Humidity: {weather.main.humidity}% (
            {getHumidityDescription(weather.main.humidity)})
          </p>
          <p>Pressure: {weather.main.pressure} hPa</p>
          <p>
            Visibility: {weather.visibility / 1000} km (
            {getVisibilityDescription(weather.visibility)})
          </p>
          <p>
            Cloudiness: {weather.clouds.all}% (
            {getCloudinessDescription(weather.clouds.all)})
          </p>
          <p>Visual display of current weather:</p>
          {weather.weather[0].icon && (
            <div className="weatherIcon">
              <img
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
                alt="Weather Icon"
              />
            </div>
          )}
          <p>Description: {weather.weather[0].description}</p>
        </div>
      ) : (
        checkCondition && (
          <p className="errorMessage">
            No weather data found for the given location
          </p>
        )
      )}
    </div>
  );
};

export default Fetch;
