import React from "react";
import "./styles.css";
import logo from "../../images/logo.png";

function Header() {
  return (
    <header className="App-header">
      <img id="logo" alt="logo" src={logo} />
      <nav id="nav">
        <ul>
          <li>
            <h3>Home</h3>
          </li>
          <li>
            <h3>The Chaos Method</h3>
          </li>
          <li>Services</li>
          <li>Your Guide</li>
          <li>Gifts</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
