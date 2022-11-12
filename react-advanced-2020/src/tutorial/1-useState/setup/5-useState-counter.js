import React, { useState } from "react";

const UseStateCounter = () => {
  const [counter, changeNumber] = useState(0);

  const complexIncrease = () => {
    setTimeout(() => {
      changeNumber((number) => {
        return number + 1;
      });
    }, 2000);
  };

  return (
    <>
      <section>
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
      </section>
      <section
        style={{
          border: "2px solid black",
          padding: "50px 0",
          width: "50%",
          margin: "50px auto",
        }}
      >
        <h2>More Complex Counter</h2>
        <h1>{counter}</h1>
        <button className="btn" onClick={() => complexIncrease()}>
          increase
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
