import React from "react";
import "./search-box.css";

export const SearchBox = ({ placeholder, handleSearch }) => {
  return (
    <div>
      <input
        type="search"
        className="search-box"
        placeholder={placeholder}
        onChange={handleSearch}
      />
    </div>
  );
};
