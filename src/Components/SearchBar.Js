import React from "react";

const SearchBar = (changeFunc) => {
  return (
    <div class="input-group rounded">
      <input
        onChange={changeFunc}
        type="search"
        class="form-control rounded"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="search-addon"
      />
    </div>
  );
};

export default SearchBar;
