import React, { useState } from "react";

const UseStateCounter = () => {
  const [counter, changeNumber] = useState(0);

  return (
    <>
      <h1>{counter}</h1>
      <button className="btn" onClick={() => changeNumber(counter - 1)}>
        decrease
      </button>
      <button className="btn" onClick={() => changeNumber(0)}>
        reset
      </button>
      <button className="btn" onClick={() => changeNumber(counter + 1)}>
        increase
      </button>
    </>
  );
};

export default UseStateCounter;
