import React from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="nav-bar">
      <h1 className="nav-bar-logo">RIPHY</h1>
      <ul className="nav-categories-ul">
        <li className="tredning-button nav-categories-li">Trending</li>
        <li className="entertainment-button nav-categories-li">
          Entertainment
        </li>
        <li className="sports-button nav-categories-li">Sports</li>
        <li className="animals-button nav-categories-li">Animals</li>
        <li className="categories-button nav-categories-li">Categories</li>
      </ul>
      <button>
        <a href="https://www.ryanfuhrman.me">Built by: Ryan Fuhrman</a>
      </button>
    </nav>
  );
}

export default NavBar;
