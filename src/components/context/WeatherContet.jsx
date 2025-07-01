import { createContext, useContext, useState } from "react";
import { useWeather } from "@hooks/useWeather";
import { RoundNumber } from "@utils/roundNumber";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [inputValue, setInputValue] = useState("Skopje");
  const [query, setQuery] = useState("Skopje");
  const [isCelsius, setIsCelsius] = useState(true);

  const weather = useWeather(query);
  const tempNumber = isCelsius
    ? RoundNumber(weather?.current?.temp_c)
    : RoundNumber(weather?.current?.temp_f);

  const tempUnit = isCelsius ? "°C" : "°F";

  const iconDescription = weather?.current?.condition?.text;

  const value = {
    inputValue,
    setInputValue,
    query,
    setQuery,
    weather,
    isCelsius,
    setIsCelsius,
    tempNumber,
    tempUnit,
    iconDescription,
  };

  return (
    <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
  );
};

export const useWeatherContext = () => useContext(WeatherContext);
