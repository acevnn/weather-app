export default function SearchBar({ onInputChange, submitQuery }) {
  return (
    <>
      <input
        type="text"
        onChange={onInputChange}
        onKeyDown={(e) => e.key === "Enter" && submitQuery()}
        placeholder="Enter city..."
      />
      <button onClick={submitQuery}>Submit!</button>
    </>
  );
}
