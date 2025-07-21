import classes from "./SearchBar.module.scss";
import { IconSearch } from "../../assets/Icons/Search/Search.jsx";

export default function SearchBar({ onInputChange, submitQuery }) {
  return (
    <section className={classes["search-bar"]}>
      <div className={classes["search-bar__search-wrapper"]}>
        <input
          className={classes["search-bar__search-input"]}
          type="text"
          onChange={onInputChange}
          onKeyDown={(e) => e.key === "Enter" && submitQuery()}
          placeholder="Search city..."
        />
        <IconSearch width={24} onClick={submitQuery} />
      </div>
      {/*<button onClick={submitQuery} className={classes["search-bar__submit"]}>*/}
      {/*  Review*/}
      {/*</button>*/}
    </section>
  );
}
