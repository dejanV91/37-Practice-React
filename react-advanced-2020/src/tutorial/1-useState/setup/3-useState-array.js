import React, { Fragment } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = React.useState([data]);

  return (
    <React.Fragment>
      <h2>UseState Array</h2>
    </React.Fragment>
  );
};

export default UseStateArray;
