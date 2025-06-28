import classes from "./WeatherInfo.module.scss";
import ToggleButton from "@components/ToggleButton/ToggleButton.jsx";
import { useWeatherContext } from "@components/context/WeatherContet.jsx";

export default function WeatherInfo({ iconUrl }) {
  if (!iconUrl) return null;
  const { roundedTemp, iconDescription } = useWeatherContext();
  console.log("weatjer info", iconDescription);

  return (
    <>
      <section className={classes["weather-info__wrapper"]}>
        <div className={classes["weather-info__container"]}>
          <img src={iconUrl} alt={iconDescription || "Weather Icon"} />
          <div className={classes["weather-info__description-wrapper"]}>
            <p className={classes["weather-info__description"]}>
              {iconDescription}
            </p>
            <span>{roundedTemp} °C</span>
          </div>
        </div>
        <ToggleButton />
      </section>
    </>
  );
}
