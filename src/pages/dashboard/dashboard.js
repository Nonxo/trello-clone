import React, { useEffect, useState } from "react";
import "./dashboard.css";
import CardInput from "../../components/card-input/card-input";
import Column from "../../components/column/column";
import useForm from "../../utils/useform";

const Dashboard = () => {
  const [columns, setColumns] = useState([]);

  // To generate unique Ids for columns
  const uid = () =>
    Date.now().toString(36) + Math.random().toString(36).substr(2);

  // Add new columns
  const submit = () => {
    if (Object.entries(inputs).length === 0) return;
    let name;
    let value;
    for (let key in inputs) {
      name = key;
      value = inputs[key];
    }
    const newColumns = [...columns, { id: uid(), name, value, tasks: [] }];
    setColumns(newColumns);
  };

  // Move cards if the column has been updated
  const moveCardToColumn = (card) => {
    columns.forEach((column) => {
      if (card.columnId === column.id) {
        return column.tasks.push(card);
      }
    });
    setColumns(columns);
  };

  // Temporarily store and remove column columns created in-memory
  useEffect(() => {
    setColumns(columns);
    localStorage.setItem("columnList", JSON.stringify(columns));

    return () => {
      localStorage.removeItem("columnList");
    };
  });

  const { handleChange, inputs, handleSubmit } = useForm(submit);
  return (
    <div className="container">
      <CardInput handleChange={handleChange} handleSubmit={handleSubmit} />
      <div className="column-section">
        {columns.map((column) => (
          <Column
            key={column.id}
            data={column}
            // updateColumn={updateColumn}
            changeCardColumn={moveCardToColumn}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
