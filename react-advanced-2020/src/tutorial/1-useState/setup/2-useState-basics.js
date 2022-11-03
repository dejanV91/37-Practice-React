import React, { useState } from "react";

const UseStateBasics = () => {
  const [text, setText] = useState("Random Value");
  const handleChange = () => {};

  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button type="button" className="btn" onClick={handleChange}>
        Change Title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
