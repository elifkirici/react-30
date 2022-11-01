import React from "react";
import { UseList } from "../../context/contextInput";

import EmojiList from "./Emoji.json";

function List() {
  const { inputValue } = UseList();

  const filtred = EmojiList.filter((emoji) =>
    emoji.title.toLowerCase().includes(inputValue.toLowerCase())
  );

  const copy = (symbol) => {
    navigator.clipboard.writeText(symbol);
  };
  return (
    <div className="list">
      {filtred.slice(0, 20).map((emoji, index) => (
        <div className="row listElement border border-1 " key={index}>
          <div className="col-1 ">
            <p>{emoji.symbol}</p>
          </div>
          <div className="col-8">
            <p>{emoji.title}</p>
          </div>
          <div className="col-3 ">
            <span onClick={() => copy(`${emoji.symbol}`)} class="copyButton">
              Click to copy emoji
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default List;
