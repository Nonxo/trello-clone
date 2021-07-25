import React, { useEffect, useState } from "react";
import Modal from "../modal/modal";
import useForm from "../../utils/useform";

const Card = ({ data, updateSpecificCard }) => {
  const [showModal, toggleModal] = useState(false);
  const [cardDetails, setCardDetails] = useState(data);

  // Show modal to edit card
  const handleShow = () => toggleModal(true);

  // update Card details
  const update = () => {
    if (Object.entries(inputs).length === 0) return;
    setCardDetails({
      id: data.id,
      columnId: inputs.columnId ? inputs.columnId : data.columnId,
      name: data.name,
      value: inputs.value ? inputs.value : data.value,
    });
    toggleModal(false);
  };

  const { handleChange, handleSubmit, inputs } = useForm(update);

  useEffect(() => {
    if (Object.entries(inputs).length === 0) return;
    updateSpecificCard(data, cardDetails);
  }, [inputs, cardDetails]);

  return (
    <React.Fragment>
      <div className="content" onClick={() => handleShow()}>
        <span className="material-icons edit-icon">edit</span>
        <p>{cardDetails.value}</p>
      </div>
      <Modal
        show={showModal}
        toggle={toggleModal}
        cardDetails={cardDetails}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </React.Fragment>
  );
};

export default Card;
