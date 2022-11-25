import React, { useReducer, useState } from "react";
import Modal2 from "./Modal2";
const reducer = (state, action) => {
  console.log(state);
  console.log(action);
};
const index2 = () => {
  const defaultState = {
    people: [],
    isModalOpen: false,
    modalContent: "hello world",
  };
  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const newPeople = { id: new Date().getTime().toString(), name };
      dispatch({ type: "ADD_ITEM", newPeople });
      setName("");
    }
  };

  return (
    <>
      {state.isModalOpen && <Modal2 modalContent={state.modalContent} />}
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
      {/* <div>
        {state.people.map((item) => {
         
          const { id, name } = item;
          return <h2 key={id}>{name}</h2>;
        })}
      </div> */}
    </>
  );
};

export default index2;
