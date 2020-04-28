import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import avatar from "../../Images/avatar.svg";
import upArrow from "../../Images/up-arrow.svg";
import { Response } from "../Response/Response";
import { PopUp } from "../PopUp/PopUp";
import { Prompt } from "../Prompt/Prompt";
import { Form } from "../Form/Form";
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
  // toggleUserPrompt = () => {
  //   this.setState({promptStatus: !this.state.promptStatus})
  // }

  render() {
    if (this.state.landingStatus === "home") {
      return (
        <div>
          <Nav changePage={this.changePage}></Nav>
          <main>
            <div className="chat-box">
              <img className="avatar" src={avatar}></img>
              {this.state.input == 0 && (
                <Response
                  input={this.state.input}
                  results={this.state.results}
                ></Response>
              )}
              {this.state.input == 1 && (
                <Response
                  input={this.state.input}
                  results={this.state.results}
                ></Response>
              )}
              {this.state.input == 2 && (
                <Response
                  input={this.state.input}
                  results={this.state.results}
                ></Response>
              )}
              {this.state.input >= 3 && (
                <Response
                  input={this.state.input}
                  results={this.state.results}
                ></Response>
              )}
              {this.state.promptStatus === true && this.state.results && (
                <p>
                  Looks like you want to see more than one thing please chooose
                  one :
                  <Prompt
                    results={this.state.results}
                    changePage={this.changePage}
                  ></Prompt>
                </p>
              )}
            </div>
            {this.state.input >= 3 && (
              <div className="response_container">
                <Form setUserResults={this.setUserResults}></Form>
              </div>
            )}
          </main>
          <Route exact={true} path="/Commands" component={PopUp} />
          <Route exact={true} path="/Bio" component={Bio} />
          <Route exact={true} path="/Projects" component={Projects} />
          <Route exact={true} path="/Resume" component={Resume} />
        </div>
      );
    } else if (this.state.landingStatus === "commands") {
      return <PopUp changePage={this.changePage}></PopUp>;
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
