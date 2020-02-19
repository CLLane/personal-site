import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      <nav>
        <input className="home-nav__input" value="Home"></input>
        <input className="resume-nav__input" value="Resume"></input>
        <input className="projects-nav__input" value="Projects"></input>
        <input className="about-nav__input" value="About Me"></input>
      </nav>
    </div>
  );
}

export default App;
