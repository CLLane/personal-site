import React from "react";
import {Bio} from '../Bio/Bio'
import {Projects} from '../Projects/Projects'
import {Resume} from '../Resume/Resume'
import "./App.css";

function App() {
  return (
    <div>
      <nav>
        <input className="home-nav__input" value="Home" type="button"></input>
        <input
          className="resume-nav__input"
          value="Resume"
          type="button"
        ></input>
        <input
          className="projects-nav__input"
          value="Projects"
          type="button"
        ></input>
        <input
          className="about-nav__input"
          value="About Me"
          type="button"
        ></input>
      </nav>
      <div className="landing-img__div">
        <img
          className="landing-background__image"
          src="https://www.canva.com/learn/wp-content/uploads/2016/01/Patterns-3-03.jpg"
        ></img>
        <p className="landing-text__p">This is Chris Lane's Website</p>
      </div>
      <Bio></Bio>
      <Projects></Projects>
      <Resume></Resume>
    </div>
  );
}

export default App;
