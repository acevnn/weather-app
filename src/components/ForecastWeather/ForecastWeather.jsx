import { useWeatherContext } from "@components/context/WeatherContet.jsx";
import classes from "./ForecastWeather.module.scss";

export default function ForecastWeather() {
  const { weather, tempUnit } = useWeatherContext();

  const forecastDays = weather?.forecast?.forecastday || [];

  return (
    <section>
      {forecastDays.map((day) => {
        return (
          <div key={day.date}>
            <h4>
              {new Date(day.date).toLocaleDateString("en-US", {
                weekday: "long",
                month: "short",
                day: "numeric",
              })}
            </h4>
            <ul className={classes["forecast-weather__hour-wrapper"]}>
              {day.hour.map((hour) => {
                const temp = tempUnit === "°" ? hour.temp_c : hour.temp_f;
                return (
                  <li
                    className={classes["forecast-weather__hour-item"]}
                    key={hour.time}
                  >
                    <p>{hour.time.split(" ")[1]}</p>
                    <p>
                      Temp: {Math.round(temp)}
                      {tempUnit}
                    </p>
                    <img src={hour.condition.icon} alt={hour.condition.text} />
                    <p>{hour.condition.text}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </section>
  );
}
