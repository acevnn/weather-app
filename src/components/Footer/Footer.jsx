import classes from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <h5>Powered by </h5>
      <div className={classes["footer__link-wrapper"]}>
        <a href="https://www.weatherapi.com/" title="Free Weather API">
          WeatherAPI.com
        </a>
        <a href="https://www.weatherapi.com/" title="Free Weather API">
          <img
            alt="Weather data by WeatherAPI.com"
            src="//cdn.weatherapi.com/v4/images/weatherapi_logo.png"
          />
        </a>
      </div>
    </footer>
  );
}
