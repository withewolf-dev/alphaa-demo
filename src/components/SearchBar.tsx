import React from "react";
import { SearchIcon } from "@heroicons/react/solid";
import "../styles/search.scss";

const SearchBar = () => {
  return (
    <div className="searchBlock">
      <input className="input" placeholder="search your catalogs and metrics" />
      <SearchIcon className="icon" />
    </div>
  );
};

export default SearchBar;
