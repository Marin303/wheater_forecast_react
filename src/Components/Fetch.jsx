import React, { useEffect } from "react";

const Fetch = () => {
  useEffect(() => {
    getWeatherData();
  }, []);

  const getWeatherData = async () => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
    );
    const data = await response.json();
    console.log(data);
  };
  return (
    <div>
      <h2>Weather fetch</h2>
      <input type="text" value={location} />
      <button onClick={getWeatherData}>SEARCH</button>
    </div>
  );
};

export default Fetch;
