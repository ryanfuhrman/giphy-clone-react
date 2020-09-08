import React, { useState, useEffect } from "react";
import "./styles/SearchResultsStyles.css";

const SearchResults = ({ searchTerm }) => {
  const [gifs, setGifs] = useState(null);

  useEffect(() => {
    if (searchTerm != null) {
      const key = process.env.REACT_APP_API_KEY;
      const url = `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${key}&limit=25`;

      const fetchData = async () => {
        await fetch(url)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            setGifs(data);
          });
      };

      fetchData();
    }
  }, [searchTerm]);

  return (
    <div className="gifs">
      {gifs && (
        <h1 className="section-title gifs-title">Results for {searchTerm}</h1>
      )}
      <ul className="gifs-list">
        {gifs &&
          gifs.data.map((gif) => (
            <li className="gifs-li" id={gif.id} key={gif.id}>
              <img
                className="gifs-img"
                src={gif.images.original_still.url}
                alt={gif.title}
              />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default SearchResults;
