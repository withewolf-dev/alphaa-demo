import React from "react";
import "../styles/catalog-card.scss";

const CatalogCard = ({ title }: any) => {
  return (
    <div className="catalogCard">
      <h5>{title}</h5>
      <p className="description">
        You can use this to understand the funding patterns across different
        customers
      </p>
    </div>
  );
};

export default CatalogCard;
