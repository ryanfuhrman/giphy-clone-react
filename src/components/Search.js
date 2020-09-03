import React, { useState } from "react";
import SearchField from "./SearchField";
import SearchResults from "./SearchResults";

function Search() {
  const [searchTerm, setSearchTerm] = useState(null);

  function getSearchTerm(term) {
    setSearchTerm(term);
  }
  return (
    <>
      <SearchField getSearchTerm={getSearchTerm} />
      <SearchResults searchTerm={searchTerm} />
    </>
  );
}

export default Search;
