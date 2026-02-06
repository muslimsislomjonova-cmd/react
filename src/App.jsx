import React, { useState } from "react";
import "./App.css";

const apiKey = "46351da790226c653537b9628dc20463";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

function App() {
  const [city, setCity] = useState("");      
  const [weather, setWeather] = useState(null); 
  const [error, setError] = useState("");       

  async function getWeather(cityName) {
    try {
      const response = await fetch(apiUrl + cityName + `&appid=${apiKey}`);

      if (response.status === 404) {
        setWeather(null);
        setError("City not found");
        return;
      }

      const data = await response.json();
      setWeather(data);
      setError("");
    } catch (err) {
      console.log(err);
      setError("Nmadur xato");
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      getWeather(city);
    }
  };

  return (
    <div className="app">
      <h1>Weather App</h1>
      <input
        type="text"
        placeholder="Enter city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={handleKeyDown}
        style={{ padding: "10px", width: "200px" }}
      />

      <div className="clouds" >
        {error && <p>{error}</p>}

        {weather && (
          <div>
            <h1 className="city-name">{weather.name}</h1>
            <p className="temperature">Temperature: {Math.round(weather.main.temp)}°C</p>
            <p className="weather">Weather: {weather.weather[0].main}</p>
            <p className="pressure">Pressure: {weather.main.pressure} hPa</p>
            <p className="speed">Wind speed: {weather.wind.speed} km/h</p>
            <p className="humidity">Humidity: {weather.main.humidity}%</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
