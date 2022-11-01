import React from "react";
import { UseList } from "../../context/contextInput";

function Search() {
  const { inputValue, setInputValue } = UseList();
  const filtredEmoji = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div className="Header">
        <label>Emoji Search 
      <input  value={inputValue} type="text" onChange={filtredEmoji} />
      </label>
    </div>
  );
}

export default Search;
