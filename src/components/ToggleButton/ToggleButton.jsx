import classes from "./ToggleButton.module.scss";
import { useState } from "react";

export default function ToggleButton(props) {
  const [isValue, setIsValue] = useState(false);

  return (
    <>
      <label className={classes["toggle-button"]}>
        <input
          type="checkbox"
          checked={isValue}
          onChange={() => setIsValue((prev) => !prev)}
        />
        <span
          className={`
    ${classes["toggle-button__slider"]}
    ${classes["toggle-button__round"]}
    ${isValue ? classes["is-active"] : ""}
  `}
        >
          {isValue ? "°C" : "°F"}
        </span>
      </label>
    </>
  );
}
