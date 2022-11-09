import { useMode } from "../../context/DarkModeContext";

function Search({ setSearchInput, searchinput }) {
  const { setMode, mode } = useMode();
  return (
    <div className={mode === "dark" ? "darkSearch" : "Search"}>
      <div className="form-check form-switch">
        <input
          className="form-check-input shadow-none outline-0"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
          onChange={() => setMode(mode === "light" ? "dark" : "light")}
        />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
          Dark Mode
        </label>
      </div>
      <h2>Search</h2>
      <input
        onChange={(e) => {
          setSearchInput(e.target.value);
        }}
        value={searchinput}
        placeholder="Search"
        type="text"
      />
    </div>
  );
}

export default Search;
