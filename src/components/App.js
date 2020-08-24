import React from "react";
import NavBar from "./NavBar";
import Search from "./Search";
import Gallery from "./Gallery";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Search />
      <Gallery />
    </div>
  );
}

export default App;
