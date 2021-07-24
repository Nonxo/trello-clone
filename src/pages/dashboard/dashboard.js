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
    const newColumn = [...columns, { id: uid(), name, value }];
    setColumns(newColumn);
  };

  useEffect(() => {
    localStorage.setItem("columnList", JSON.stringify(columns));
  }, [columns]);

  const { handleChange, inputs, handleSubmit } = useForm(submit);
  return (
    <div className="container">
      <CardInput handleChange={handleChange} handleSubmit={handleSubmit} />
      <div className="column-section">
        {columns.map((column) => (
          <Column key={column.id} data={column} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
