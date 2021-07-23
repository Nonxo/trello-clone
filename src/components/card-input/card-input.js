import React from "react";
import "./card-input.css";

const CardInput = () => {
  return (
    <React.Fragment>
      <div className="card">
        <h5>Add a new Column</h5>
        <div className="form-control">
          <input placeholder="Add Column Label" name="label" type="text" />
        </div>
        <button className="button">Save</button>
      </div>
    </React.Fragment>
  );
};

export default CardInput;
