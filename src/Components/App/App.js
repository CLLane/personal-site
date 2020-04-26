import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import { Bio } from "../Bio/Bio";
import { Projects } from "../Projects/Projects";
import { Resume } from "../Resume/Resume";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      landingStatus: "home"
    };
  }

  changePage = place => {
    this.setState({ landingStatus: place });
  };

  render() {
    if (this.state.landingStatus === "home") {
      return (
        <div>
          <nav>
            <Link
              to="/"
              onClick={() => this.changePage("home")}
              className="home-nav__link"
              value=""
              type="button"
            >
              Home
            </Link>
            <Link
              onClick={() => this.changePage("resume")}
              className="resume-nav__link"
              to="/Resume"
            >
              Resume
            </Link>
            <Link
              onClick={() => this.changePage("projects")}
              className="projects-nav__link"
              to="/Projects"
            >
              Projects
            </Link>
            <Link
              onClick={() => this.changePage("bio")}
              className="about-nav__link"
              to="/Bio"
            >
              About
            </Link>
          </nav>
          <div className="landing-img__div">
            <img
              className="landing-background__image"
              src="https://www.canva.com/learn/wp-content/uploads/2016/01/Patterns-3-03.jpg"
            ></img>
            <p className="landing-text__p">This is Chris Lane's Website</p>
          </div>
          <Route exact={true} path="/Bio" component={Bio} />
          <Route exact={true} path="/Projects" component={Projects} />
          <Route exact={true} path="/Resume" component={Resume} />
        </div>
      );
    } else if (this.state.landingStatud === "resume") {
      return (
        <div>
        <nav>
            <Link
              to="/"
              onClick={() => this.changePage("home")}
              className="home-nav__link"
              value=""
              type="button"
            >
              Home
            </Link>
            <Link
              onClick={() => this.changePage("resume")}
              className="resume-nav__link"
              to="/Resume"
            >
              Resume
            </Link>
            <Link
              onClick={() => this.changePage("projects")}
              className="projects-nav__link"
              to="/Projects"
            >
              Projects
            </Link>
            <Link
              onClick={() => this.changePage("bio")}
              className="about-nav__link"
              to="/Bio"
            >
              About
            </Link>
          </nav>
          <div className="landing-img__div">
            <img
              className="landing-background__image"
              src="https://www.canva.com/learn/wp-content/uploads/2016/01/Patterns-3-03.jpg"
            ></img>
            <p className="landing-text__p">This is Chris Lane's Website</p>
          </div>
          <Route exact={true} path="/Bio" component={Bio} />
          <Route exact={true} path="/Projects" component={Projects} />
          <Route exact={true} path="/Resume" component={Resume} />
        </div>
      );
      }
  }
}

export default App;
