import React, { useState } from "react";

const UseStateBasics = () => {
  const [text, setText] = useState("Random Value");
  const handleChange = () => {
    if (text === "Random Value") {
      setText("Hello");
    } else {
      setText("Random Value");
    }
  };

  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button type="button" className="btn">
        Change Text
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
