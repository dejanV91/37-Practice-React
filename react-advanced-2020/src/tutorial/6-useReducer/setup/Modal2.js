import React from "react";

const Modal2 = ({ modalContent, color }) => {
  return (
    <div className="modal" style={{ backgroundColor: color }}>
      <p>{modalContent}</p>
    </div>
  );
};

export default Modal2;
