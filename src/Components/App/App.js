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
      landingStatus: true,
    };
  }

  changePage = (e) => {
    e.preventDefault();
    let oldValue = this.state.landingStatus
    console.log('hey :>> ')
    this.setState({landingStatus: !oldValue})
  };

  render() {
    if(this.state.landingStatus === false) {
       return (
      <div>
        <nav>
          <Link to ='/' onClick={this.changePage} className="home-nav__link" value="" type="button">Home</Link>
          <Link className="resume-nav__link" to="/Resume">
            Resume
          </Link>
          <Link className="projects-nav__link" to="/Projects">
            Projects
          </Link>
          <Link className="about-nav__link" to="/Bio">
            About
          </Link>
        </nav>
      </div>)
    } else {
    return (
      <div>
        <nav>
          <Link to ='/' onClick={this.changePage} className="home-nav__link" value="" type="button">Home</Link>
          <Link className="resume-nav__link" to="/Resume">
            Resume
          </Link>
          <Link className="projects-nav__link" to="/Projects">
            Projects
          </Link>
          <Link className="about-nav__link" to="/Bio">
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
