import React, { useReducer, useState } from "react";
import Modal2 from "./Modal2";
import reducer from "./reducer";

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

  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  return (
    <>
      {state.isModalOpen && (
        <Modal2
          closeModal={closeModal}
          modalContent={state.modalContent}
          color={state.color}
        />
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
            <div key={id} className={"item"}>
              <h3>{name}</h3>
              <button
                onClick={() => dispatch({ type: "REMOVE_ITEM", payload: id })}
              >
                remove
              </button>
            </div>
          );
        })}
      </div>
      {state.people.length !== 0 && (
        <button onClick={() => dispatch({ type: "CLEAR_ALL" })}>
          clear all
        </button>
      )}
    </>
  );
};

export default index2;
