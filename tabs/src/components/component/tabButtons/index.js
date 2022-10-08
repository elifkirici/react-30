import React from "react";
import "./styles.css";

function TabButtons({ setSelectedTab }) {
  const setPg = (e) => {
    setSelectedTab(e.target.name);
  };
  return (
    <div id="tabButtons">
      <button name="History" onClick={setPg}>
        History
      </button>
      <button name="Vision" onClick={setPg}>
        Vision
      </button>
      <button name="Goals" onClick={setPg}>
        Goals
      </button>
    </div>
  );
}

export default TabButtons;
