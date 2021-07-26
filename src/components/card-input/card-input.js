import React from "react";
import "./card-input.css";

const CardInput = (props) => {
  const { handleChange, handleSubmit } = props;

  return (
    <React.Fragment>
      <form className="card" onSubmit={handleSubmit}>
        <h5>Add a new Column</h5>
        <div className="form-control">
          <input
            placeholder="Add Column Label"
            name="label"
            onChange={handleChange}
            type="text"
          />
        </div>
        <button type="submit" className="button">
          <span className="material-icons add-card-icon">add</span>
          Add new column
        </button>
      </form>
    </React.Fragment>
  );
};

export default CardInput;
