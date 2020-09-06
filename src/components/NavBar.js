import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Categories from "./Categories";
import Trending from "./Trending";
import SearchResults from "./SearchResults";
import Search from "./Search";
import "./styles/NavBarStyles.css";

function NavBar() {
  return (
    <Router>
      <nav className="nav-bar">
        <h1 className="nav-bar-logo">
          <Link to="/">RIPHY</Link>
        </h1>
        <ul className="nav-categories-ul">
          <li className="tredning-button nav-categories-li">
            <Link to="/trending">Trending</Link>
          </li>
          <li className="entertainment-button nav-categories-li">
            <Link to="/entertainment">Entertainment</Link>
          </li>
          <li className="sports-button nav-categories-li">
            <Link to="/sports">Sports</Link>
          </li>
          <li className="animals-button nav-categories-li">
            <Link to="/animals">Animals</Link>
          </li>
          <li className="categories-button nav-categories-li">
            <Link to="/categories">Categories</Link>
          </li>
          <li className="categories-button nav-categories-li">
            <Link to="/search">Search</Link>
          </li>
        </ul>
        <button className="nav-website-button">
          <a href="https://www.ryanfuhrman.me">Built by: Ryan Fuhrman</a>
        </button>
      </nav>

      <Switch>
        <Route exact path="/">
          <Trending />
        </Route>
        <Route path="/trending">
          <Trending />
        </Route>
        <Route path="/categories">
          <Categories />
        </Route>
        <Route path="/entertainment">
          <SearchResults searchTerm={"entertainment"} />
        </Route>
        <Route path="/sports">
          <SearchResults searchTerm={"sports"} />
        </Route>
        <Route path="/animals">
          <SearchResults searchTerm={"animals"} />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
      </Switch>
    </Router>
  );
}

export default NavBar;
