import React from "react";
import "../styles/Navbar.css";

// By importing the Navbar.css file, it is added to the DOM whenever this component loads

const Navbar = (props) => (
  <nav className="navbar">
      <ul>
          <li><a href="/">Reset</a></li>
          <li>Score: {props.score} | Top Score: {props.topscore}</li>
      </ul>
  </nav>
);	

export default Navbar;
