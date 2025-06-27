import { useState } from "react";
import WeatherInfo from "./components/WeatherInfo/WeatherInfo.jsx";
import { useWeather } from "./hooks/useWeather.js";
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import WeatherIcon from "./components/WeatherIcon/WeatherIcon.jsx";
import Footer from "./components/Footer/Footer.jsx";

export function App() {
  const [inputValue, setInputValue] = useState("Skopje");
  const [query, setQuery] = useState("Skopje");

  const weather = useWeather(query);

  function getInputData(event) {
    setInputValue(event.target.value);
  }

  function submitQuery() {
    if (inputValue.trim()) {
      setQuery(inputValue.trim());
    }
  }

  console.log(inputValue);
  console.log(weather?.current?.condition);

  return (
    <>
      <main>
        <section>
          <WeatherInfo
            city={weather?.location?.name}
            country={weather?.location?.country}
          />
          <SearchBar onInputChange={getInputData} submitQuery={submitQuery} />
          <WeatherIcon
            iconUrl={weather?.current?.condition?.icon}
            iconDescription={weather?.current?.condition?.text}
            iconAltText={weather?.current?.condition?.text}
          />
        </section>
      </main>
      <Footer />
    </>
  );
}
