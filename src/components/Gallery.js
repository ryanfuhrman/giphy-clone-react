import React from "react";
// import Categories from "./Categories";
// import Trending from "./Trending";
import SearchResults from "./SearchResults";

function Gallery({ searchTerm }) {
  return (
    <section className="gifs">
      <SearchResults searchTerm={searchTerm} />
      {/* <Trending />
      <Categories /> */}
    </section>
  );
}

export default Gallery;
