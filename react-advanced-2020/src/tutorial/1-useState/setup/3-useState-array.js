import React from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPerson] = React.useState(data);

  const deleteItems = () => {
    setPerson([]);
  };

  const deleteSingleItem = (id) => {
    const newPerson = people.filter((person) => person.id !== id);
    setPerson(newPerson);
  };

  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item" id={id}>
            <h4>{name}</h4>
            <button onClick={() => deleteSingleItem(id)}>remove</button>
          </div>
        );
      })}
      <button type="button" className="btn" onClick={() => deleteItems()}>
        Delete Items
      </button>
    </>
  );
};

export default UseStateArray;
