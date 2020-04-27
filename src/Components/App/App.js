import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import { Bio } from "../Bio/Bio";
import { Projects } from "../Projects/Projects";
import { Resume } from "../Resume/Resume";
import {Nav} from '../Nav/Nav'
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      landingStatus: "home"
    };
  }

  changePage = place => {
    console.log('place', place)
    this.setState({ landingStatus: place });
  };

  render() {
    if (this.state.landingStatus === "home") {
      return (
        <div>
         <Nav changePage={this.changePage}></Nav>
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
