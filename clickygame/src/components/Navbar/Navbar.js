import React from "react";
import "./Navbar.css"

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="#">
    Clicky Game
    </a>
    <button
      className="navbar-toggler"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <p className="navbar-text navbar-right">Score: 0 | Top Score: 0 </p>
  </nav>
);

export default Navbar;
