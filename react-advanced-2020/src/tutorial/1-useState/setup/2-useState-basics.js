import React, { useState } from "react";

const UseStateBasics = () => {
  const [text, setText] = useState("Random Value");

  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button type="button">Change Title</button>
    </React.Fragment>
  );
};

export default UseStateBasics;
