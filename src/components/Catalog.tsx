import React from "react";
import "../styles/main.scss";
import CatalogCard from "./CatalogCard";
import SearchBar from "./SearchBar";
const Catalog = () => {
  const data = [
    {
      title: "Funding",
    },
    {
      title: "AUM",
    },
    {
      title: "Transactions",
    },
    {
      title: "Payment",
    },
    {
      title: "Holdings",
    },
    {
      title: "Add a catalog",
    },
  ];
  return (
    <div className="catalogBlock">
      <p className="header">Select a Business Catalog</p>
      <SearchBar />
      <div className="cardBlock">
        {data.map((e, i) => (
          <CatalogCard key={i} title={e.title} />
        ))}
      </div>
    </div>
  );
};

export default Catalog;
