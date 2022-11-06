import React, { useState } from "react";

const UseStateBasics = () => {
  const [data, setText] = useState("Random Value");
  const handleChange = () => {
    setText(2);
  };

  return (
    <React.Fragment>
      <h1>{data}</h1>
      <button type="button" className="btn" onClick={handleChange}>
        Change Title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
