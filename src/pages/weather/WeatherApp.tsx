import React, { useState } from "react";
import { Oval } from "react-loader-spinner";
import "./weather.css";
import { fetchWeather } from "../../services/modules/weather/weatherServices"

const WeatherApp: React.FC = () => {
  const [input, setInput] = useState("");
  const [weather, setWeather] = useState<{
    loading: boolean;
    data: any;
    error: boolean;
  }>({
    loading: false,
    data: {},
    error: false,
  });

  const toDateFunction = () => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const WeekDays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const currentDate = new Date();
    const date = `${WeekDays[currentDate.getDay()]} ${currentDate.getDate()} ${
      months[currentDate.getMonth()]
    }`;
    return date;
  };

 const search = async (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      setInput("");
      setWeather({ ...weather, loading: true });

      try {
        const data = await fetchWeather(input);
        setWeather({ data, loading: false, error: false });
      } catch (err) {
        setWeather({ ...weather, data: {}, error: true });
        setInput("");
      }
    }
  };

  return (
    <div className="weather-app">
      <h1 className="app-name">Weather App</h1>
      <div className="search-bar">
        <input
          type="text"
          className="city-search"
          placeholder="Enter City Name.."
          name="query"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          onKeyDown={search}
        />
      </div>
      {weather.loading && (
        <>
          <br />
          <br />
          <Oval height={100} width={100} color="black" ariaLabel="loading" />
        </>
      )}
      {weather.error && (
        <>
          <br />
          <br />
          <span className="error-message">
            <span style={{ fontSize: "20px" }}>City not found</span>
          </span>
        </>
      )}
      {weather && weather.data && weather.data.main && (
        <div>
          <div className="city-name">
            <h2>
              🏠{weather.data.name}, <span>{weather.data.sys.country}</span>
            </h2>
          </div>
          <div className="date">
            <span>{toDateFunction()}</span>
          </div>
          <div className="icon-temp">
            <img
              className=""
              src={`https://openweathermap.org/img/wn/${weather.data.weather[0].icon}@2x.png`}
              alt={weather.data.weather[0].description}
            />
            {Math.round(weather.data.main.temp)}
            <sup className="deg">°C</sup>
          </div>
          <div className="des-wind">
            <p>{weather.data.weather[0].description.toUpperCase()}</p>
            <p>Wind Speed: {weather.data.wind.speed}m/s</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
