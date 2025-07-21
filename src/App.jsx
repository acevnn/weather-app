import WeatherCity from "@components/WeatherCity/WeatherCity.jsx";
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import WeatherInfo from "@components/WeatherInfo/WeatherInfo.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { useWeatherContext } from "@components/context/WeatherContet.jsx";

export function App() {
  const { weather, inputValue, setInputValue, setQuery } = useWeatherContext();

  console.log(weather);

  function getInputData(event) {
    setInputValue(event.target.value);
  }

  function submitQuery() {
    if (inputValue.trim()) {
      setQuery(inputValue.trim());
    }
  }

  return (
    <>
      <main>
        <SearchBar onInputChange={getInputData} submitQuery={submitQuery} />
        <WeatherInfo iconUrl={weather?.current?.condition?.icon} />
        {/*<ForecastWeather />*/}
        <WeatherCity city={weather?.location?.name} />
      </main>

      <Footer />
    </>
  );
}
