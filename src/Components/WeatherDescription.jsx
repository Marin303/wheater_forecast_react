import React from "react";
import WeatherIcon from "./WeatherIcon";
import noWeather from "../Images/noWeather.png";
import {
  getWindDirection,
  getVisibilityDescription,
  getCloudinessDescription,
  getTimezoneString,
} from "../Utils/Weather";

const WeatherValues = ({ weather }) => {
  const {
    name = "-",
    sys: { country } = {},
    main: { temp, humidity, pressure } = {},
    wind: { speed, deg } = {},
    visibility = "-",
    timezone = "",
    clouds: { all: cloudiness } = {},
    weather: [weatherDetails = {}] = [],
  } = weather || {};

  let formattedVisibility =
    visibility !== "-" ? `${visibility / 1000} km` : visibility;

  let visibilityDescription =
    visibility !== "-" ? `(${getVisibilityDescription(visibility)})` : "";

  let cloudinessDescription = cloudiness
    ? `(${getCloudinessDescription(cloudiness)})`
    : "";

  const timezoneString = getTimezoneString(timezone);

  return (
    <div className="weatherContainer">
      <div className="weatherImg">
        {weatherDetails.main ? (
          <WeatherIcon condition={weatherDetails.main} />
        ) : (
          <img src={noWeather} alt="empty cloud" />
        )}
      </div>
      <div className="description">
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
          Visibility: {formattedVisibility} {visibilityDescription}
        </p>
        <p>
          Cloudiness: {cloudiness || "0"}% {cloudinessDescription}
        </p>
        <p>Timezone: {timezoneString || "-"}</p>
      </div>
    </div>
  );
};

export default WeatherValues;
