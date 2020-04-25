import React from "react";
import { Route, Link } from 'react-router-dom';
import {Bio} from '../Bio/Bio'
import {Projects} from '../Projects/Projects'
import {Resume} from '../Resume/Resume'
import "./App.css";

function App() {
  return (
    <div>
      <nav>
        <Link className="home-nav__link" value="Home" type="button"></Link>
        <Link
          className="resume-nav__link"
          to = "/Resume"
    
        >Resume</Link>
        <Link
          className="projects-nav__link"
          to = "/Projects"
         
        >Projects</Link>
        <Link
          className="about-nav__link"
          to = "/Bio"
          
        >About</Link>
      </nav>
      <div className="landing-img__div">
        <img
          className="landing-background__image"
          src="https://www.canva.com/learn/wp-content/uploads/2016/01/Patterns-3-03.jpg"
        ></img>
        <p className="landing-text__p">This is Chris Lane's Website</p>
      </div>
      <Route exact={true} path="/Bio" component={Bio}/>
      <Route exact={true} path="/Projects" component={Projects} />
      <Route exact={true} path="/Resume" component={Resume}/>
    </div>
  );
}

export default App;
