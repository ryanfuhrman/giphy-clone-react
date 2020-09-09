import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import "./styles/SearchResultsStyles.css";

const SearchResults = ({ searchTerm }) => {
  const [gifs, setGifs] = useState([]);
  const [offset, setOffset] = useState(25);

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
            return setGifs(data.data);
          });
      };
      fetchData();
    }
  }, [searchTerm]);

  async function loadMore() {
    const key = process.env.REACT_APP_API_KEY;
    const limit = 25;
    const moreURL = `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${key}&limit=${limit}&offset=${offset}`;
    await fetch(moreURL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setGifs([...gifs, ...data.data]);
      });
    setOffset(offset + limit);

    console.log(gifs);
  }

  return (
    <div className="gifs">
      {gifs && (
        <h1 className="section-title gifs-title">Results for {searchTerm}</h1>
      )}
      <ul className="gifs-list">
        {gifs &&
          gifs.map((gif) => (
            <li className="gifs-li" id={gif.id} key={uuid()}>
              <img
                className="gifs-img"
                src={gif.images.original_still.url}
                alt={gif.title}
              />
            </li>
          ))}
      </ul>
      <button className="load-more-button" onClick={loadMore}>
        Load More
      </button>
    </div>
  );
};

export default SearchResults;
