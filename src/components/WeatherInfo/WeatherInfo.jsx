import classes from "./WeatherInfo.module.scss";
import ToggleButton from "@components/ToggleButton/ToggleButton.jsx";
import { useWeatherContext } from "@components/context/WeatherContet.jsx";

export default function WeatherInfo({ iconUrl }) {
  if (!iconUrl) return null;
  const { iconDescription, tempUnit, tempNumber } = useWeatherContext();

  console.log(tempNumber);

  return (
    <>
      <section className={classes["weather-info__wrapper"]}>
        <div className={classes["weather-info__container"]}>
          <img src={iconUrl} alt={iconDescription || "Weather Icon"} />
          <span className={classes["weather-info__temperature"]}>
            <span>{tempNumber}</span>
            <span>{tempUnit}</span>
          </span>
          <div className={classes["weather-info__description-wrapper"]}>
            <p className={classes["weather-info__description"]}>
              {iconDescription}
            </p>
          </div>
        </div>
        <ToggleButton />
      </section>
    </>
  );
}
