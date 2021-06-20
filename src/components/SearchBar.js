import React from "react";

const SearchBar = () => {
  return (
    <div className="d-flex justify-content-center my-4 search">
      <h4>Search for a Movie: </h4>
      <input type="text" className="mx-3" placeholder="Enter text here" />
    </div>
  );
};

export default SearchBar;
