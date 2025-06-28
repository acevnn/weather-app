import classes from "./ToggleButton.module.scss";
import { useWeatherContext } from "@components/context/WeatherContet.jsx";

export default function ToggleButton() {
  const { isCelsius, setIsCelsius } = useWeatherContext();

  return (
    <>
      <label className={classes["toggle-button"]}>
        <input
          type="checkbox"
          checked={!isCelsius}
          onChange={() => setIsCelsius((prev) => !prev)}
        />
        <span
          className={`
    ${classes["toggle-button__slider"]}
    ${classes["toggle-button__round"]}
    ${isCelsius ? classes["is-active"] : ""}
  `}
        >
          {isCelsius ? "°C" : "°F"}
        </span>
      </label>
    </>
  );
}
