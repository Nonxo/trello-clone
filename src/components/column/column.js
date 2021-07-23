import React, { useState } from "react";
import "./column.css";

const Column = () => {
  const [isTextAreaActive, setTextAreaActive] = useState(false);

  return (
    <div className="card column">
      <h5 className="label-heading">Nonxo</h5>
      <div className="content">
        <span className="material-icons edit-icon">edit</span>
        <p>My name is nonxo nnwabuokei</p>
      </div>
      {isTextAreaActive && (
        <div className="form-control">
          <textarea placeholder="Enter title for this card..." />
          <button className="button">Add card</button>
          <span
            className="material-icons close-icon"
            onClick={() => setTextAreaActive(false)}
          >
            close
          </span>
        </div>
      )}
      {!isTextAreaActive && (
        <p className="action-text" onClick={() => setTextAreaActive(true)}>
          <span className="material-icons add-card-icon">add</span> Add a card
        </p>
      )}
    </div>
  );
};

export default Column;
