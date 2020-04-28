import React, { Component } from "react";
import "../Nav/Nav.css";
import dropDown from "../../Images/drop-down.svg";
import home from "../../Images/home.svg";
import { Route, Link } from "react-router-dom";

export class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showOptions: false,
      popUpStatus: ''
    };
  }
  toggleShowOptions = e => {
    e.preventDefault();
    this.setState({ showOptions: !this.state.showOptions });
  };
  togglePopUp = e => {
    e.preventDefault();
    this.setState({ popUpStatus: e.target.value})
  }
  render() {
    return (
      <nav>
        {!this.state.showOptions && (
          <div>
            <button
              onClick={e => this.toggleShowOptions(e)}
              className="nav_button__false"
            >
              <img className="nav_button__img" src={dropDown}></img>
            </button>
            <button
              onClick={() => this.props.changePage("home")}
              className="home_nav__false"
            >
              <img className="nav_home__img" src={home}></img>
            </button>
          </div>
        )}
        {this.state.showOptions && (
          <div className="nav_bar__verbose">
            <Link
              to="/"
              onClick={() => this.props.changePage("home")}
              className="home-nav__link"
              value=""
              type="button"
            >
              Home
            </Link>
            <Link
              onClick={() => this.props.changePage("resume")}
              className="resume-nav__link"
              to="/Resume"
            >
              Resume
            </Link>
            <Link
              onClick={() => this.props.changePage("projects")}
              className="projects-nav__link"
              to="/Projects"
            >
              Projects
            </Link>
            <Link
              onClick={() => this.props.changePage("bio")}
              className="about-nav__link"
              to="/Bio"
            >
              About
            </Link>
            <Link to='/Commands' onClick={() => this.props.changePage('commands')} className="commands_nav__link">Commands</Link>
            <button
              onClick={e => this.toggleShowOptions(e)}
              className="nav_button__true"
              // value="Nav"
              // type="button"
            >
              <img className="nav_button__img" src={dropDown}></img>
            </button>
          </div>
        )}
      </nav>
    );
  }
}
