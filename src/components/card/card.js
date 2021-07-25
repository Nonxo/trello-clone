import React, { useEffect, useState } from "react";
import Modal from "../modal/modal";
import useForm from "../../utils/useform";

const Card = ({ data, updateSpecificCard }) => {
  const [showModal, toggleModal] = useState(false);
  const [cardUpdate, setCardUpdate] = useState({});

  // Show modal to edit card
  const handleShow = () => toggleModal(true);

  // update Card details
  const update = () => {
    if (Object.entries(inputs).length === 0) return;
    setCardUpdate({
      id: data.id,
      columnId: inputs.columnId ? inputs.columnId : data.columnId,
      name: data.name,
      value: inputs.value ? inputs.value : data.value,
    });
    toggleModal(false);
  };

  useEffect(() => {
    if (Object.entries(cardUpdate).length > 0) {
      debugger;
      updateSpecificCard(data, cardUpdate);
    }
  }, [cardUpdate]);

  const { handleChange, handleSubmit, inputs } = useForm(update);

  return (
    <React.Fragment>
      <div className="content" onClick={() => handleShow()}>
        <span className="material-icons edit-icon">edit</span>
        <p>{data.value}</p>
      </div>
      <Modal
        show={showModal}
        toggle={toggleModal}
        cardDetails={data}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </React.Fragment>
  );
};

export default Card;
