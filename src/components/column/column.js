import React from "react";
import "./column.css";


const Column = () => {
  let isTextFieldActive = false;

  const makeTextFieldActive = () => {
    isTextFieldActive = true;
  };

  return (
    <div className="card column">
      <h5 className="label-heading">Nonxo</h5>
      <div className="content">
        <span className="material-icons edit-icon">edit</span>
        <p>My name is nonxo nnwabuokei</p>
      </div>
      {isTextFieldActive && (
        <div className="form-control">
          <textarea placeholder="Enter title for this card..." />
        </div>
      )}
      {!isTextFieldActive && (
        <p className="action-text" onClick={makeTextFieldActive}>
          <span className="material-icons add-card-icon">add</span> Add a card
        </p>
      )}
    </div>
  );
};

export default Column;
