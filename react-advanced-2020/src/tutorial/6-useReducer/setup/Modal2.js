import React, { useEffect } from "react";

const Modal2 = ({ modalContent, color, closeModal }) => {
  useEffect(() => {
    setTimeout(() => {
      closeModal();
    }, 3000);
  });
  return (
    <div className="modal" style={{ backgroundColor: color }}>
      <p>{modalContent}</p>
    </div>
  );
};

export default Modal2;
