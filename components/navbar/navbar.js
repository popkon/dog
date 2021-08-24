import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.scss";
import logo from "./d.jpg";

const Navbar = () => {
  return (
    <header className="header">
      <div className="navbar">
        <Link
          to="/"
          className="navbar__logo bgImg"
          style={{ backgroundImage: `url(${logo})` }}
        ></Link>
        <div className="navbar__nav">
          <div className="navbar__nav--item">
            <NavLink to="/">Home</NavLink>
          </div>
          <div className="navbar__nav--item">
            <NavLink to="/characters">Characters</NavLink>
          </div>
          <div className="navbar__nav--item">
            <NavLink to="/episodes">Episodes</NavLink>
          </div>
          <div className="navbar__nav--item">
            <NavLink to="/locations">Locations</NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
