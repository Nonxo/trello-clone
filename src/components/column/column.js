import React, { useState } from "react";
import "./column.css";
import useForm from "../../utils/useform";

const Card = ({ data }) => {
  return (
    <div className="content">
      <span className="material-icons edit-icon">edit</span>
      <p>{data.value}</p>
    </div>
  );
};

const Column = ({ data }) => {
  const [isTextAreaActive, setTextAreaActive] = useState(false);
  const [cards, setCards] = useState([]);

  // To generate unique Ids for cards
  const uid = () =>
    Date.now().toString(36) + Math.random().toString(36).substr(2);

  // Add new Card to a Column
  const submit = () => {
    if (Object.entries(inputs).length === 0) return;
    let name;
    let value;
    for (let key in inputs) {
      name = key;
      value = inputs[key];
    }
    const newCard = [...cards, { id: uid(), columnId: data.id, name, value }];
    setCards(newCard);
    setTextAreaActive(false);
  };

  const { handleChange, handleSubmit, inputs } = useForm(submit);

  return (
    <div className="card column">
      <h5 className="label-heading">{data.value}</h5>
      {cards.map((card) => (
        <Card key={card.id} data={card} />
      ))}
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
