import React from "react";
import "../styles/main.scss";

const Card = ({ earning, description }: any) => {
  return (
    <div className="card">
      <p className="header">Total Earning</p>
      <h2>$12,548</h2>
      <p className="description">compared to 321,490 last year</p>
    </div>
  );
};

export default Card;
