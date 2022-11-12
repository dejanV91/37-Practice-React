import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    console.log("useEffect");
    if (value > 0) {
      document.title = `New Message (${value})`;
    } else {
      document.title = "React App";
    }
  }, [value]);

  useEffect(() => {
    console.log("second effect");
  }, []);

  return (
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        click me
      </button>
      <button className="btn" onClick={() => setValue(value - 1)}>
        decrease
      </button>
    </>
  );
};

export default UseEffectBasics;
