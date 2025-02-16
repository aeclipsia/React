import { useEffect, useState } from "react";
import { fetchWeatherData } from "../services/weatherService";

export function useFetchWeatherData(city) {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchWeatherData(city).then((data) => {
      setWeatherData(data);
      setLoading(false);
    });
  });

  return { weatherData, loading };
}
