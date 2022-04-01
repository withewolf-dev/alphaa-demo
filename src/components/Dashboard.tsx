import React from "react";
import "../styles/dashboard.scss";

const Dashboard = () => {
  return (
    <div className="wrapper">
      <h4>Select a Dashboard</h4>
      <div className="dashCard">
        <h5>User Level</h5>
        <p className="description">
          You can use this to understand the funding patterns across different
          customers
        </p>
      </div>
      <div>
        <p>click to ask question</p>
      </div>
    </div>
  );
};

export default Dashboard;
