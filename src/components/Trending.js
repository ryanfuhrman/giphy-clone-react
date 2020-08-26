import React, { useState, useEffect } from "react";

const Trending = () => {
  const [gifs, setGifs] = useState({ data: [] });

  useEffect(() => {
    const key = process.env.REACT_APP_API_KEY;
    const url = `http://api.giphy.com/v1/gifs/trending?api_key=${key}&limit=10`;

    const fetchData = async () => {
      await fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setGifs(data);
        });
    };

    fetchData();
  }, []);

  return (
    <div className="trending-gifs">
      <h1 className="section-title gifs-title">Trending GIFS</h1>
      <ul className="gifs-list">
        {gifs.data.map((gif) => (
          <li className="gifs-li" id={gif.id} key={gif.id}>
            <img src={gif.images.original_still.url} alt={gif.title} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Trending;
