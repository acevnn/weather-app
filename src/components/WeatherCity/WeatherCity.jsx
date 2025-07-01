import classes from "./WeatherCity.module.scss";
import { useWeatherContext } from "@components/context/WeatherContet.jsx";

export default function WeatherCity({ city, country }) {
  console.log(city);

  const { weather } = useWeatherContext();

  if (weather.error?.message) {
    return weather.error.message;
  }

  const err = weather.error?.message;

  console.log("cityWeather comp", weather);

  if (!city) return;

  return (
    <section>
      <h1 className={classes.heading}>
        {`${city + ","} ${country}`}
        {err}
      </h1>
    </section>
  );
}
