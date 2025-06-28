import classes from "./WeatherInfo.module.scss";
import ToggleButton from "@components/ToggleButton/ToggleButton.jsx";

export default function WeatherInfo({
  iconUrl,
  iconAltText,
  iconDescription,
  temp,
}) {
  if (!iconUrl) return null;

  console.log(temp);

  function handleTempValue() {
    setIsValue(true);
  }

  return (
    <>
      <section className={classes["weather-info__wrapper"]}>
        <div className={classes["weather-info__container"]}>
          <img src={iconUrl} alt={iconAltText || "Weather Icon"} />
          <div className={classes["weather-info__description-wrapper"]}>
            <p className={classes["weather-info__description"]}>
              {iconDescription}
            </p>
            <span>{temp} °C</span>
          </div>
        </div>
        <ToggleButton isTempVal={handleTempValue} />
      </section>
    </>
  );
}
