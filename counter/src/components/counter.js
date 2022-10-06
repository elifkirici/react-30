import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter(counter - 1);
  };

  const decrease = () => {
    setCounter(counter + 1);
  };
  return (
    <div>
      <h1
        style={{
          color: counter === 0 ? "black" : counter < 0 ? "red" : "green",}}>{counter}</h1>
      <button className="btn" onClick={increase}>
        Increase
      </button>
      <button className="btn" onClick={decrease}>
        Decrease
      </button>
    </div>
  );
}
export default Counter;
