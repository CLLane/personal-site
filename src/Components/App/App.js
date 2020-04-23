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
        <input className="resume-nav__input" value="Resume" type="button"></input>
        <input className="projects-nav__input" value="Projects" type="button"></input>
        <input className="about-nav__input" value="About Me" type="button"></input>
      </nav>
      <div className='landing-img__div'>
        <img
          className="landing-background__image"
          src="https://cdn.pixabay.com/photo/2020/01/20/11/28/fantasy-4780122_1280.jpg"
        ></img>
        <p className="landing-text__p">This is Chris Lane's Website</p>
      </div>
      <Bio></Bio>
      <Projects></Projects>
    </div>
  );
}

export default App;
