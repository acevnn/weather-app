import classes from "./WeatherIcon.module.scss";

export default function WeatherIcon({ iconUrl, iconAltText, iconDescription }) {
  if (!iconUrl) return null;
  return (
    <section className={classes["weather-icon__wrapper"]}>
      <img src={iconUrl} alt={iconAltText || "Weather Icon"} />
      <p className={classes["weather-icon__description"]}>{iconDescription}</p>
    </section>
  );
}
