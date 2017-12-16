import React from "react";
import "../styles/Header.css";

// By importing the Header.css file, it is added to the DOM whenever this component loads


const Header = () => (
  <header className="header">
    <h1>Clicky Game!</h1>
      <h2>Play!</h2>
  </header>
);

export default Header;
