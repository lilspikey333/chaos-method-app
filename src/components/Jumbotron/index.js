import React from "react";
import "./styles.css";
import logo from '../../images/logo.png'

function Jumbotron() {
  return (
    <div id="jumbotron">
      <div id="jumbotron-text">
        <section id="title-section" className="title-header">
          Unlock your mind.
        </section>
        <h1 className="title-header">Discover your power &</h1>
        <h2 className="title-header">free yourself</h2>
        <img id="logo" alt="logo" src={logo}/>
      </div>
    </div>
  );
}

export default Jumbotron;
