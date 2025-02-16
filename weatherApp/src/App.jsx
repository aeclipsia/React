import { useState } from "react";
import "./App.css";
import { useFetchWeatherData } from "./hooks/fetchData";
import { Search } from "lucide-react";

function App() {
  const [city, setCity] = useState("");
  const [selectedCity, setSelectedCity] = useState("Madrid");
  const { weatherData, loading } = useFetchWeatherData(selectedCity);
  const [unit, setUnit] = useState("C");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const toggleUnit = () => {
    setUnit((prevUnit) => (prevUnit === "C" ? "F" : "C"));
  };

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    setMousePosition({ x: clientX, y: clientY });
  };

  const getTransform = (multiplierX, multiplierY) => {
    const offsetX = (mousePosition.x / window.innerWidth - 0.5) * multiplierX;
    const offsetY = (mousePosition.y / window.innerHeight - 0.5) * multiplierY;
    return `translate(${offsetX}px, ${offsetY}px)`;
  };

  const currentTemp =
    unit === "C" ? weatherData?.current?.temp_c : weatherData?.current?.temp_f;

  const epochTime = weatherData?.current?.last_updated_epoch;

  const date = epochTime ? new Date(epochTime * 1000) : new Date();

  const isValidDate = !isNaN(date.getTime());

  const dayName = isValidDate
    ? new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date)
    : "Invalid Date";

  const time = isValidDate
    ? date.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      })
    : "00:00";

  const bgCondition = weatherData?.current?.condition?.text
    ?.toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^a-z0-9-]/g, "");

  const today = new Date();

  const forecastNext5Days =
    weatherData?.forecast?.forecastday?.slice(1, 6) || [];

  const getDayName = (forecastDate) => {
    const date = new Date(forecastDate);
    const options = { weekday: "long" };
    const dayName = new Intl.DateTimeFormat("en-US", options).format(date);
    const diffDays = Math.ceil((date - today) / (1000 * 60 * 60 * 24));
    return diffDays === 1 ? "Tomorrow" : dayName;
  };

  const handleSearch = () => {
    if (city.trim() !== "") {
      setSelectedCity(city);
    }
  };

  return (
    <div
      className={`container ${bgCondition || ""}`}
      onMouseMove={handleMouseMove}
    >
      <div className="weather-card">
        <div className="info-header">
          <h3
            className="day"
            style={{ transform: getTransform(10, 10) }}
          >{`${dayName} ${time}`}</h3>
          {weatherData && (
            <>
              <div className="bottom-info">
                <div className="bottom-info-left">
                  <h1
                    className="temperature"
                    style={{ transform: getTransform(10, 10) }}
                  >
                    {currentTemp}º
                  </h1>
                  <h2
                    className="region"
                    style={{ transform: getTransform(10, 10) }}
                  >
                    {weatherData.location.name}, {weatherData.location.country}
                  </h2>
                  <h3
                    className="condition"
                    style={{ transform: getTransform(10, 10) }}
                  >
                    {weatherData.current.condition.text}
                  </h3>
                </div>
                <div
                  className="unit-toggle"
                  style={{ transform: getTransform(10, 10) }}
                >
                  <span
                    className={`unit ${unit === "C" ? "active" : ""}`}
                    onClick={() => setUnit("C")}
                  >
                    Celsius
                  </span>
                  <span> | </span>
                  <span
                    className={`unit ${unit === "F" ? "active" : ""}`}
                    onClick={() => setUnit("F")}
                  >
                    Fahrenheit
                  </span>
                </div>
              </div>
            </>
          )}
        </div>
        <div className="right-panel">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Enter city name"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <button onClick={handleSearch}>
              <Search />
            </button>
          </div>
          {loading && <div>Loading...</div>}
          {!loading && weatherData && (
            <>
              <h2 className="right-panel-header">Weather Details</h2>
              <div className="details-grid">
                <div className="label">Cloudy</div>
                <div className="data">{weatherData.current.cloud}%</div>
                <div className="label">Humidity</div>
                <div className="data">{weatherData.current.humidity}%</div>
                <div className="label">Wind</div>
                <div className="data">{weatherData.current.wind_kph} km/h</div>
                <div className="label">Rain</div>
                <div className="data">{weatherData.current.precip_mm} mm</div>
              </div>
              <div className="forecast">
                {forecastNext5Days.map((day, index) => {
                  const { avgtemp_c, condition } = day.day;
                  const label = getDayName(day.date);
                  return (
                    <div key={index} className="forecast-card">
                      <h2>{label}</h2>
                      <p>{avgtemp_c}ºC</p>
                      <img src={condition.icon} alt="" />
                      <p>{condition.text}</p>
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </div>
      <p className="copyright">Aeclipsia&copy; All rights reserved. 2025</p>
    </div>
  );
}

export default App;
