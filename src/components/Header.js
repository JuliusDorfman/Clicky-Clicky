import React from "react";
import "../styles/Header.css";

// By importing the Header.css file, it is added to the DOM whenever this component loads


const Header = (props) => (
  <header className="header">
    <h1>Clicky Game!</h1>
          <div>{props.message}</div>
      <h2>Play!</h2>
  </header>
);

export default Header;
