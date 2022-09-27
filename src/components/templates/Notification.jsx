import React from "react";
import ReactDOM from "react-dom";

const Notification = ({ message, isOpen, onClick }) => {
  if (!isOpen) {
    return null;
  }
  return ReactDOM.createPortal(
    <section className="notification">
      <div className="notification__container">
        <h2>{message}</h2>
        <button onClick={onClick}>Close</button>
      </div>
    </section>,
    document.getElementById("modal")
  );
};

export default Notification;
