import React, { useState } from "react";

const UseStateBasics = () => {
  const [data, setText] = useState("Random Value");
  const handleChange = () => {
    if ((data = "Random Value")) {
      setText("Hello World");
    } else {
      setText("Random Value");
    }
  };

  return (
      <h1>{data}</h1>
      <button type="button" className="btn" onClick={handleChange}>
        Change Title
      </button>
  );
};

export default UseStateBasics;
