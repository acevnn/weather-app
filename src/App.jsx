import WeatherCity from "@components/WeatherCity/WeatherCity.jsx";
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import WeatherInfo from "@components/WeatherInfo/WeatherInfo.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { RoundNumber } from "./utils/roundNumber.js";
import { useWeatherContext } from "@components/context/WeatherContet.jsx";

export function App() {
  const { weather, inputValue, setInputValue, setQuery } = useWeatherContext();

  console.log("weather", weather);

  function getInputData(event) {
    setInputValue(event.target.value);
  }

  function submitQuery() {
    if (inputValue.trim()) {
      setQuery(inputValue.trim());
    }
  }

  let roundedNumber = RoundNumber(weather?.current?.temp_c);

  console.log(weather);
  return (
    <>
      <main>
        <WeatherCity
          city={weather?.location?.name}
          country={weather?.location?.country}
        />
        <SearchBar onInputChange={getInputData} submitQuery={submitQuery} />
        <WeatherInfo
          temp={roundedNumber}
          iconUrl={weather?.current?.condition?.icon}
          iconDescription={weather?.current?.condition?.text}
          iconAltText={weather?.current?.condition?.text}
        />
      </main>
      <Footer />
    </>
  );
}
