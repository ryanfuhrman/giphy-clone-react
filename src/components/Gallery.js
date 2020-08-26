import React from "react";
import Categories from "./Categories";
import Trending from "./Trending";

function Gallery() {
  return (
    <section className="gifs">
      <Trending />
      <Categories />
    </section>
  );
}

export default Gallery;
