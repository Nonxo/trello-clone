import React, { useState } from "react";
import Modal from "../modal/modal";

const Card = ({ data }) => {
  const [showModal, toggleModal] = useState(false);

  // Show modal to edit card
  const handleShow = () => toggleModal(true);

  return (
    <React.Fragment>
      <div className="content" onClick={() => handleShow()}>
        <span className="material-icons edit-icon">edit</span>
        <p>{data.value}</p>
      </div>
      <Modal show={showModal} toggle={toggleModal} cardDetails={data} />
    </React.Fragment>
  );
};

export default Card;
