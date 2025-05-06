import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import DataContext from "./Context/DataContext";

function Nav() {
  const { search, setSearch } = useContext(DataContext);
  return (
    <nav className="Nav">
      <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="Search">Search Post</label>
        <input
          id="search"
          type="text"
          placeholder="Search Posts"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        ></input>
      </form>
      <ul>
        {/* Please note that this Link element from the tells the router, do
          not go to the server but to the proper component. */}
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/post"}>Post</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
