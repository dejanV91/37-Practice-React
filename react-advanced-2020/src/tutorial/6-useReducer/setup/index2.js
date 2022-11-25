import React, { useState } from "react";
import Modal2 from "./Modal2";

const index2 = () => {
  const [name, setName] = useState("");

  return (
    <>
      <form>
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit">add</button>
      </form>
    </>
  );
};

export default index2;
