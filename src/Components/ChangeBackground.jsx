import React from 'react'

 import clear from "../Images/clear.png";
/*import clearNight from "../Images/clear-night.png"; */

import drizzle from "../Images/drizzle.png";
import mist from "../Images/mist.png";
import snow from "../Images/snow.png";
import rain from "../Images/rainy.png";
import cloudy from "../Images/cloudy.png";
import thunderStorm from "../Images/thunderstorm.png";



    /* const isDayTime =
      sunriseDate <= currentDatetime && currentDatetime <= sunsetDate;  */

/*     if (isDayTime) {
      isNight = false;
      main.classList.toggle("day", true);
    } else {
      isNight = true;
      main.classList.toggle("night", true);
    } */
  
    const ChangeBackground = ({ condition }) => {
      const weatherImages = {
        Clear: clear,
        Cloudy: cloudy,
        Snow: snow,
        Rain: rain,
        Drizzle: drizzle,
        Thunderstorm: thunderStorm,
        Mist: mist,
      };
    
      const weatherImg = weatherImages[condition];
    
      return (
        <img src={weatherImg} alt={condition} />
      );
    };
    
    export default ChangeBackground;