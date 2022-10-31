import React, { useState } from "react";

const UseStateBasics = () => {
  const [text, setText] = useState("Random Value");

  const handleClick = () => {
    if (text === "Random Value") {
      setText("Hello World");
    } else {
      setText("Random Value");
    }
  };
  return (
    <React.Fragment>
      <h2>{text}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        Change Text
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
