import classes from "./WeatherInfo.module.scss";

export default function WeatherInfo({
  iconUrl,
  iconAltText,
  iconDescription,
  temp,
}) {
  if (!iconUrl) return null;
  return (
    <section className={classes["weather-icon__wrapper"]}>
      <img src={iconUrl} alt={iconAltText || "Weather Icon"} />
      <div className={classes["weather-icon__description-wrapper"]}>
        <p className={classes["weather-icon__description"]}>
          {iconDescription}
        </p>
        <span>{temp} °C</span>
      </div>
    </section>
  );
}
