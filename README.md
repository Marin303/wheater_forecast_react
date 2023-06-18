# React Weather Forecast Documentation

The React Weather Forecast is a weather application built using React. This documentation provides an overview of the project, installation instructions, and details about the application's features and components.

## Overview

The React Weather Forecast is an application that provides live weather information and forecasts for different locations. It utilizes React for the frontend user interface and integrates with the OpenWeatherMap API to fetch weather data.

Key features of the application include:

- Real-time weather updates for specified locations.
- Detailed weather information such as temperature, humidity, wind speed, and more.

### Create free Weather account and get your own API KEY

[OpenWeatherMap](https://openweathermap.org/)

## Installation

To install and run the Weather project, follow these steps:

<ol>
  <li>Clone the repository:</li>
</ol>

```
git clone git@github.com:Marin303/wheater_forecast_react.git
```

<ol start="2">
  <li>Navigate to the project directory:</li>
</ol>

```
cd weather_forecast_react
```

<ol start="3">
  <li>Install dependencies:</li>
</ol>

```
npm install
```

<ol start="4">
  <li>Start the development server:</li>
</ol>

```
npm start
```

<ol start="5">
  <li>Open the application in your browser:</li>
</ol>

```
http://localhost:3000
```

## Components

The Weather forecast project consists of the following main components:

- `Fetch`: The main component that handles the overall application structure and state management.

- `Video`: The video component handles video as background of project.

## Configuration

The application can be configured to use a specific Scaledrone channel or to customize other settings.
Create new `.env` in root of project file using `.env.example` as example. Modify the following values according to your requirements:

```javascript
REACT_APP_API_KEY = "API_KEY_HERE";
```

Replace `API_KEY_HERE` with your actual Weather API key, respectively.

## Customization

The Weather forecast project can be customized to match your desired design and styling preferences. The main CSS file for the project is located at `src/App.css`. Modify the styles and add your own custom CSS as needed.

## Contributing

Contributions to the Weather forecast project are welcome! If you encounter any issues or have suggestions for improvements, please feel free to raise an issue or submit a pull request on the project's GitHub repository.

Before contributing use:

```
git remote update
```

## Deployment

The Weather forecast application is deployed and accessible at the following URL:

[Deploy preview here](https://weather-app-marin.netlify.app/)

Feel free to visit the deployed application to explore its features and functionality.
