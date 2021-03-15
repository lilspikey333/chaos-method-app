import React from "react";
import "./App.css";
import Header from "./components/Header";
import Jumbotron from "./components/Jumbotron";
import ChaosMethodHomeDesc from "./components/ChaosMethodHomeDesc";
import ContactSection from "./components/ContactSection";

function App() {
  return (
    <div className="App">
      <Header />
      <body>
        <Jumbotron />
        <ChaosMethodHomeDesc />
        <ContactSection />
      </body>
    </div>
  );
}

export default App;
