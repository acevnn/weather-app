import { useEffect, useState } from "react";

export function useWeather(query) {
  const [weather, setWeather] = useState("");

  useEffect(() => {
    if (!query) return;
    const key = "e9ddf2073a9f49ab98a91154252506";
    const url = `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${query}&days=3&aqi=yes&alerts=yes`;

    async function fetchWeatherData() {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setWeather(result);
      } catch (error) {
        console.error("this is the error available", error);
      }
    }

    fetchWeatherData();
  }, [query]);

  return weather;
}
