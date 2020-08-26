import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";

const Categories = () => {
  const [gifs, setGifs] = useState({ data: [] });

  useEffect(() => {
    const key = process.env.REACT_APP_API_KEY;
    const url = `http://api.giphy.com/v1/gifs/categories?api_key=${key}`;

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
    <div className="gifs">
      <h1 className="section-title categories-title">Categories</h1>
      <ul className="gifs-list">
        {gifs.data.map((category) => (
          <li className="category-li" id={category.gif.id} key={uuid()}>
            <h1 className="category-name">{category.name}</h1>
            <img
              src={category.gif.images.original_still.url}
              alt={category.gif.title}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
