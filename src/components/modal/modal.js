import React from "react";
import "./modal.css";

const Modal = (props) => {
  const { show, onHide, children } = props;

  const onClose = (e) => onHide && onHide(e);
  return (
    <React.Fragment>
      {show && (
        <div className="modal" id="modal">
          <h2>Modal Window</h2>
          <div className="content">{children}</div>
          <div className="actions">
            <button className="toggle-button" onClick={onClose}>
              close
            </button>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Modal;
