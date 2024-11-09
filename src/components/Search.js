import React, { useState } from "react";

function Search() {
  const [search, setSearch] = useState("");
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        value={search}
        placeholder="Type a name to search..."
        onChange={(e) => setSearch(search)}
      />
    </div>
  );
}

export default Search;
