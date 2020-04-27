import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import avatar from "../../Images/avatar.svg";
import upArrow from "../../Images/up-arrow.svg";
import { Bio } from "../Bio/Bio";
import { Projects } from "../Projects/Projects";
import { Resume } from "../Resume/Resume";
import { Nav } from "../Nav/Nav";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: 4,
      commands: false,
      landingStatus: "home"
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
  toggleCommands = () => {
    this.setState({ commands: !this.state.commands });
  };

  changePage = place => {
    console.log("place", place);
    this.setState({ landingStatus: place });
  };

  render() {
    if (this.state.landingStatus === "home") {
      return (
        <div>
          <Nav changePage={this.changePage}></Nav>
          <main>
            <div className="chat-box">
              <img className="avatar" src={avatar}></img>

              {this.state.input === 0 && (
                <p className="typewriter">
                  Hi, I'm Chris. Welcome to my site. Click Enter to continue.
                </p>
              )}
              {this.state.input === 1 && (
                <p className="typewriter">
                  Ask me anything or use the nav bar up there{" "}
                  <img className="up_arrow__svg" src={upArrow}></img> to get
                  around.
                </p>
              )}
              {this.state.input === 2 && (
                <p className="typewriter">
                  A list of commands is at the bottom left corner of the page.
                </p>
              )}
              {this.state.input === 3 && (
                <p className="typewriter">
                  Just type your question out in the input below and click
                  enter.
                </p>
              )}
            </div>
            {this.state.input >= 2 && !this.state.commands && (
              <div className="response_container">
                <form className="user_input--container">
                  <input className="user_input" type="text"></input>
                  <button className="submit_button">Submit</button>
                </form>
                <div className="command_button--container">
                  <button
                    className="command_button"
                    onClick={this.toggleCommands}
                  >
                    Commands
                  </button>
                </div>
              </div>
            )}
            {this.state.commands && (
              <>
                <div className="response_container">
                  <form className="user_input--container">
                    <input className="user_input" type="text"></input>
                    <button className="submit_button">Submit</button>
                  </form>
                  <div className="command_button--container">
                    <article className="command_info">
                      <h2>Include one of these key words in your question:</h2>
                      <p>Resume</p>
                      <p>Bio</p>
                      <p>Portfolio</p>
                    </article>
                  </div>
                </div>
                <button
                  className="command_button"
                  onClick={this.toggleCommands}
                >
                  Commands
                </button>
              </>
            )}
          </main>
          <Route exact={true} path="/Bio" component={Bio} />
          <Route exact={true} path="/Projects" component={Projects} />
          <Route exact={true} path="/Resume" component={Resume} />
        </div>
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
