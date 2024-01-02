import React, { useState } from "react";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState(" "); 

  const handleInputChange = (event) => {
    setSearchValue(event.target.value); 
  };

  const handleSearch = () => {
    console.log("Search value:", searchValue);
  };

  return (
    <div className="row no-gutters mt-3 align-items-center ">
      <div className="col col-md-4 w-100  ">
        <input
          className="form-control border-secondary rounded-pill pr-5 m-8"
          type="search"
          placeholder="Search"
          id="example-search-input2"
          value={searchValue} 
          onChange={handleInputChange} 
        />
      </div>
      <div className="col-auto">
        <button
          className="btn btn-outline-light text-dark border-0 rounded-pill ml-n5"
          type="button"
          onClick={handleSearch}
        >
          <i className="fa fa-search"></i>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
