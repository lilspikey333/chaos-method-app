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
            <a href="">Home</a>
          </li>
          <li>
            <a href="">The Chaos Method</a>
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
