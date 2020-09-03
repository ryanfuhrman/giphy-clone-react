import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
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
          <NavLink to="/">RIPHY</NavLink>
        </h1>
        <ul className="nav-categories-ul">
          <li className="tredning-button nav-categories-li">
            <NavLink to="/trending">Trending</NavLink>
          </li>
          <li className="entertainment-button nav-categories-li">
            <NavLink to="/entertainment">Entertainment</NavLink>
          </li>
          <li className="sports-button nav-categories-li">
            <NavLink to="/sports">Sports</NavLink>
          </li>
          <li className="animals-button nav-categories-li">
            <NavLink to="/animals">Animals</NavLink>
          </li>
          <li className="categories-button nav-categories-li">
            <NavLink to="/categories">Categories</NavLink>
          </li>
          <li className="categories-button nav-categories-li">
            <NavLink to="/search">Search</NavLink>
          </li>
        </ul>
        <button>
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
