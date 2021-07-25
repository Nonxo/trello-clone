import React, { useEffect, useState } from "react";
import "./column.css";
import useForm from "../../utils/useform";
import Card from "../card/card";
import * as _ from "lodash";

const Column = (props) => {
  const { data, updateColumn } = props;
  const [isTextAreaActive, setTextAreaActive] = useState(false);
  const [columnUpdate, setColumnUpdate] = useState({});
  const [cards, setCards] = useState(data.tasks);

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

  const updateSpecificCard = (previousState, currentState) => {
    const index = _.findIndex(cards, previousState);
    cards.splice(index, 1, currentState);
  };

  useEffect(() => {
    if (cards.length > 0) {
      setColumnUpdate({
        id: data.id,
        name: data.name,
        value: data.value,
        tasks: cards,
      });
    }
  }, [cards]);

  useEffect(() => {
    if (Object.entries(columnUpdate).length === 0) return;
    updateColumn(data, columnUpdate);
  }, [columnUpdate]);

  const { handleChange, handleSubmit, inputs } = useForm(submit);

  return (
    <React.Fragment>
      <div className="card column">
        <h5 className="label-heading">{data.value}</h5>
        {cards.map(
          (card) =>
            card.columnId === data.id && (
              <Card
                key={card.id}
                data={card}
                updateSpecificCard={updateSpecificCard}
              />
            )
        )}
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
    </React.Fragment>
  );
};

export default Column;
