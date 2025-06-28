import classes from "./WeatherCity.module.scss";

export default function WeatherCity({ city, country }) {
  return (
    <section>
      <h1 className={classes.heading}>
        {city}
        {", "}
        {country}
      </h1>
    </section>
  );
}
