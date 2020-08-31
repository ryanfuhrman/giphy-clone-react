import React, { useState } from "react";
import NavBar from "./NavBar";
import Search from "./Search";
import Gallery from "./Gallery";
import "./styles/App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState(null);

  function getSearchTerm(term) {
    setSearchTerm(term);
  }

  return (
    <div className="App">
      <NavBar />
      <Search getSearchTerm={getSearchTerm} />
      <Gallery searchTerm={searchTerm} />
    </div>
  );
}

export default App;
