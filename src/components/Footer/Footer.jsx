import classes from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <h3>Powered by </h3>
      <a href="https://www.weatherapi.com/" title="Free Weather API">
        WeatherAPI.com
      </a>
      <a href="https://www.weatherapi.com/" title="Free Weather API">
        <img
          alt="Weather data by WeatherAPI.com"
          src="//cdn.weatherapi.com/v4/images/weatherapi_logo.png"
        />
      </a>
    </footer>
  );
}
