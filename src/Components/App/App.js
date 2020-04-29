import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import avatar from "../../Images/avatar.svg";
import upArrow from "../../Images/up-arrow.svg";
import home from '../App/App.js'
import { Social } from "../Social/Social";
import { PopUp } from "../PopUp/PopUp";
import { Bio } from "../Bio/Bio";
import { Projects } from "../Projects/Projects";
import { Resume } from "../Resume/Resume";
import { Nav } from "../Nav/Nav";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: 0,
      landingStatus: "home",
      results: null
    };
  }
  componentDidMount() {
    document.addEventListener("keydown", this.keyPressed);
  }
  keyPressed = e => {
    if (e.key === "Enter") {
      this.setState({ input: this.state.input + 1 });
    }
  };

  changePage = place => {
    console.log("place", place);
    this.setState({ landingStatus: place });
  };

  setUserResults = userRequests => {
    if (userRequests.length !== 1) {
      this.setState({ results: userRequests });
      this.toggleUserPrompt();
    } else {
      this.setState({ landingStatus: userRequests[0] });
    }
  };
  toggleUserPrompt = () => {
    this.setState({ promptStatus: !this.state.promptStatus });
  };
  render() {
    console.log('this.state.landingStatus', this.state.landingStatus)
    if (this.state.landingStatus === "home") {
      return (
        <>
          <Nav changePage={this.changePage}></Nav>
          <main>
            <div className="landing-img__div">
              <img
                className="landing-background__image"
                src="https://i.pinimg.com/originals/73/a8/8e/73a88ecbd4975baa42761451d144445e.jpg"
              ></img>
              <div className="landing-text__p">
                <img
                  src="https://fontmeme.com/permalink/200429/035542dad20b38cc2d6b4370af9226fb.png"
                  alt="script-fonts"
                  border="0"
                ></img>
              </div>
            </div>
            <div className='social_container__div'>
              <Social></Social>
            </div>
            <div className="component_divider__div">
              <Bio></Bio>
            </div>
            <div className="component_divider__div">
              <Projects></Projects>
            </div>
            <div className="component_divider__div">
              <Resume></Resume>
            </div>

            
          </main>
          <Route exact={true} path="/Home" component={home} />
          <Route exact={true} path="/Commands" component={PopUp} />
          <Route exact={true} path="/Bio" component={Bio} />
          <Route exact={true} path="/Projects" component={Projects} />
          <Route exact={true} path="/Resume" component={Resume} />
        </>
      );
    } else if (this.state.landingStatus === "resume") {
      return (
        <div>
          <Nav changePage={this.changePage}></Nav>
          <div>
            <Resume></Resume>
          </div>
        </div>
      );
    } else if (this.state.landingStatus === "projects") {
      return (
        <div>
          <Nav changePage={this.changePage}></Nav>
          <div>
            <Projects></Projects>
          </div>
        </div>
      );
    } else if (this.state.landingStatus === "bio") {
      return (
        <div>
          <Nav changePage={this.changePage}></Nav>
          <div>
            <Bio></Bio>
          </div>
        </div>
      );
    }
  }

}

export default App;
