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
          <p>{cardDetails.value}</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Modal;
