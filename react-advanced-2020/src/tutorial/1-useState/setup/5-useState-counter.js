import React, { useState } from "react";

const UseStateCounter = () => {
  const [counter, changeNumber] = useState(0);

  const decrease = () => {
    let i = counter - 1;
    changeNumber(i);
  };
  const reset = () => {
    changeNumber(0);
  };
  const increase = () => {
    let i = counter + 1;
    changeNumber(i);
  };

  return (
    <>
      <h1>{counter}</h1>
      <button className="btn" onClick={() => decrease()}>
        decrease
      </button>
      <button className="btn" onClick={() => reset()}>
        reset
      </button>
      <button className="btn" onClick={() => increase()}>
        increase
      </button>
    </>
  );
};

export default UseStateCounter;
