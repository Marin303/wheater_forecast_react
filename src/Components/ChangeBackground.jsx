import React from 'react'

import clearDay from "./Images/clear.png";
import clearNight from "./Images/clear-night.png";

import drizzle from "./Images/drizzle.png";
import mist from "./Images/mist.png";
import snow from "./Images/snow.png";
import rain from "./Images/rainy.png";
import cloudy from "./Images/cloudy.png";
import thunderStorm from "./Images/thunderstorm.png";
import noWeather from "./Images/noWeather.png";

const ChangeBackground = () => {
    const isDayTime =
      sunriseDate <= currentDatetime && currentDatetime <= sunsetDate; 

    if (isDayTime) {
      isNight = false;
      main.classList.toggle("day", true);
    } else {
      isNight = true;
      main.classList.toggle("night", true);
    }
  
  const weatherImages = {
    clouds: cloudy,
    clear: isNight ? clearNight : clearDay,
    snow: snow,
    rain: rain,
    drizzle: drizzle,
    thunderstorm: thunderStorm,
    mist: mist,
    default: noWeather,
  };

  const weatherImg =
    weatherImages[weatherConditionRef.current] || weatherImages.default;
  return (
    <div>
        {weatherImg}
    </div>
  )
}

export default ChangeBackground