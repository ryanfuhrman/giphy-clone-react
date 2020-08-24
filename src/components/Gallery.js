import React from "react";
import Gifs from "./Gifs";
import Categories from "./Categories";

function Gallery() {
  return (
    <section className="gifs">
      <h1 className="section-title gifs-title">Trending GIFS</h1>
      <Gifs />
      <Categories />
    </section>
  );
}

export default Gallery;
