import React from "react";
import "./dashboard.css";
import CardInput from "../../components/card-input/card-input";
import Column from "../../components/column/column";

const Dashboard = () => {
  return (
    <div className="container">
      <CardInput />
      <Column />
    </div>
  );
};

export default Dashboard;
