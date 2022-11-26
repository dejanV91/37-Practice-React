import React, { useReducer, useState } from "react";
import Modal2 from "./Modal2";

const reducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const newPeople = [...state.people, action.payload];
    return {
      people: newPeople,
      isModalOpen: true,
      modalContent: "item added",
      color: "#dcf4da",
    };
  }
  if (action.type === "EMPTY") {
    return {
      people: { ...state },
      isModalOpen: true,
      modalContent: "please enter name",
      color: "#f8afb9",
    };
  }
};
const index2 = () => {
  const defaultState = {
    people: [],
    isModalOpen: false,
    modalContent: "hello world",
    color: "",
  };

  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const newPeople = { id: new Date().getTime().toString(), name };
      dispatch({ type: "ADD_ITEM", payload: newPeople });
      setName("");
    } else {
      dispatch({ type: "EMPTY" });
    }
  };

  return (
    <>
      {state.isModalOpen && (
        <Modal2 modalContent={state.modalContent} color={state.color} />
      )}
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
          const { id, name } = item;
          return (
            <div key={id}>
              <h3>{name}</h3>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default index2;
