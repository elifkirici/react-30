import React from "react";
import "./styles.css";
import { useState } from "react";

function ClearButton({ setUsers }) {
  const [isClick, setIsClick] = useState(false);
  const ClearButton = () => {
    setUsers([]);
    setIsClick(true);
  };
  return (
    <div>
      {isClick && <h1>There is no birthday </h1>}
      <button className="clearBtn" onClick={ClearButton}>
        Clear All
      </button>
    </div>
  );
}

export default ClearButton;
