import React, { useEffect, useRef } from "react";
import "./modal.css";

function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }

      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount
}

const Modal = (props) => {
  const columnList = JSON.parse(localStorage.getItem("columnList"));
  const { show, toggle, cardDetails } = props;
  const ref = useRef();

  useOnClickOutside(ref, () => toggle(false));

  return (
    <React.Fragment>
      <div id="myModal" className={show ? "modal open" : "modal hide"}>
        <div className="modal-content">
          <span className="material-icons close" onClick={() => toggle(false)}>
            close
          </span>
          <form className="form">
            <p>Edit Card Details</p>
            <div className="form-control">
              <label htmlFor="column-list">Select column</label>
              <select name="column-list" defaultValue={cardDetails.columnId}>
                {columnList.map((list) => (
                  <option key={list.id} value={list.id}>
                    {list.value}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-control">
              <label htmlFor="card">Edit card tile</label>
              <textarea name="card" defaultValue={cardDetails.value} />
            </div>
            <button type="submit" className="button">
              Update card
            </button>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Modal;
