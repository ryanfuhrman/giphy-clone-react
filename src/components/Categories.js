import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import "./styles/CategoriesStyles.css";

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
    <div className="categories">
      <h1 className="section-title categories-title">Categories</h1>
      <ul className="categories-list">
        {gifs.data.map((category) => (
          <li className="categories-li" id={category.gif.id} key={uuid()}>
            <h1 className="category-title">{category.name}</h1>
            <img
              className="category-image"
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
