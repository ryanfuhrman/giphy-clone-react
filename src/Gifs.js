import React, { useEffect } from "react";

const Gifs = () => {
  const key = process.env.REACT_APP_API_KEY;

  const url = `http://api.giphy.com/v1/gifs/trending?api_key=${key}&limit=10`;

  useEffect(() => {
    console.log("hi");
    fetch(url)
      .then((response) => response.json())
      .then((data) => console.log(data));
  });

  return (
    <div className="gifs">
      <h1 className="section-title gifs-title">Trending GIFS</h1>
      <ul className="gifs-list"></ul>
    </div>
  );
};

export default Gifs;
