import classes from "./WeatherInfo.module.scss";
import ToggleButton from "@components/ToggleButton/ToggleButton.jsx";
import { useWeatherContext } from "@components/context/WeatherContet.jsx";

export default function WeatherInfo({ iconUrl }) {
  if (!iconUrl) return null;
  const { iconDescription, tempUnit, tempNumber } = useWeatherContext();

  console.log(tempUnit, tempNumber);
  return (
    <>
      <section className={classes["weather-info__wrapper"]}>
        <div className={classes["weather-info__container"]}>
          <div className={classes["weather-info__description-wrapper"]}>
            <span className={classes["weather-info__temperature"]}>
              <span>{tempNumber}</span>
              <span>{tempUnit}</span>
            </span>
            <p className={classes["weather-info__description"]}>
              {iconDescription}
            </p>
          </div>
        </div>
        <img src={iconUrl} alt={iconDescription || "Weather Icon"} />
        <ToggleButton />
      </section>
    </>
  );
}
