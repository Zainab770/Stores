import React, { useState } from "react";
import Allpro from "./Allpro";

const Search = () => {
  const [sortOption, setSortOption] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  return (
    <>
      <div className="search">
        <div className="inputs">
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Featured"
              aria-label="Search"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </form>
        </div>
        <div className="sort">
        <select
  className="form-select"
  value={sortOption}
  onChange={handleSortChange}
  aria-label="Sort By"
>
  <option value="">Sort By</option> 
  <option value="Price: Low to High">Price: Low to High</option>
  <option value="Price: High to Low">Price: High to Low</option>
  <option value="Newest">Newest</option>
</select>
        </div>
      </div>
      <h1 className="head">Our Products</h1>
      <Allpro searchTerm={searchTerm} sortOption={sortOption} />
    </>
  );
};

export default Search;
