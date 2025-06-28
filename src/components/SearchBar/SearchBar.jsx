import classes from "./SearchBar.module.scss";

export default function SearchBar({ onInputChange, submitQuery }) {
  return (
    <section className={classes["search-bar"]}>
      <input
        type="text"
        onChange={onInputChange}
        onKeyDown={(e) => e.key === "Enter" && submitQuery()}
        placeholder="Search city"
      />
      <button onClick={submitQuery} className={classes["search-bar__search"]}>
        Review
      </button>
    </section>
  );
}
