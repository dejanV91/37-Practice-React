import React, { useReducer, useState } from "react";
import Modal2 from "./Modal2";

const index2 = () => {
  const defaultState = {
    people: [],
    isModalOpen: true,
    modalContent: "",
  };
  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit">add</button>
      </form>
      <div>
        {state.people.map((item) => {
          const { id, title } = item;
          return <h2 key={id}>{title}</h2>;
        })}
      </div>
    </>
  );
};

export default index2;
