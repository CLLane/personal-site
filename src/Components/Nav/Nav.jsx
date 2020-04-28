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
              onClick={(e) => {this.props.changePage("home"); this.toggleShowOptions(e)}}
              className="home-nav__link"
              value=""
              type="button"
            >
              Home
            </Link>
            <Link
              onClick={(e) => {this.props.changePage("resume"); this.toggleShowOptions(e)}}
              className="resume-nav__link"
              to="/Resume"
            >
              Resume
            </Link>
            <Link
              onClick={(e) => {this.props.changePage("projects"); this.toggleShowOptions(e)}}
              className="projects-nav__link"
              to="/Projects"
            >
              Projects
            </Link>
            <Link
              onClick={(e) => {this.props.changePage("bio"); this.toggleShowOptions(e)}}
              className="about-nav__link"
              to="/Bio"
            >
              About
            </Link>
            <Link to='/Commands' onClick={() => {this.props.changePage('commands'); this.toggleShowOptions()}} className="commands_nav__link">Commands</Link>
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
