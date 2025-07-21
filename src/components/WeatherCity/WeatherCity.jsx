import classes from "./WeatherCity.module.scss";
import { useWeatherContext } from "@components/context/WeatherContet.jsx";
import { weekday } from "@utils/weekDays.js";

export default function WeatherCity({ city, country }) {
  const { weather } = useWeatherContext();
  const err = weather.error?.message;

  const d = new Date();
  let day = weekday[d.getDay()];

  return (
    <section className={classes["weather-city"]}>
      <h1>
        {city}
        {err}
      </h1>
      <span>{day}</span>
    </section>
  );
}
