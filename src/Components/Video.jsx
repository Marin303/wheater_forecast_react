import React from "react";
import videoBackground from "../Images/Raindrops_4K_Living_Background.mp4";
import Fetch from "../Components/Fetch";

const Video = () => {
  return (
    <div>
      <video autoPlay muted loop className="backgroundVideo">
        <source src={videoBackground} type="video/mp4" />
      </video>
      <h1>Wheater Forecast</h1>
      <Fetch />
    </div>
  );
};

export default Video;
