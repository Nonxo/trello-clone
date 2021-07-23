import React, { useState } from "react";
import "./column.css";
import useForm from "../../utils/useform";

const Column = ({ data }) => {
  const [isTextAreaActive, setTextAreaActive] = useState(false);

  const submit = () => {
    console.log(inputs);
  };

  const { handleChange, handleSubmit, inputs } = useForm(submit);

  return (
    <div className="card column">
      <h5 className="label-heading">{data.value}</h5>
      <div className="content">
        <span className="material-icons edit-icon">edit</span>
        <p>My name is nonxo nnwabuokei</p>
      </div>
      {isTextAreaActive && (
        <form className="form-control" onSubmit={handleSubmit}>
          <textarea
            name="card"
            placeholder="Enter title for this card..."
            onChange={handleChange}
          />
          <button type="submit" className="button">
            Add card
          </button>
          <span
            className="material-icons close-icon"
            onClick={() => setTextAreaActive(false)}
          >
            close
          </span>
        </form>
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
