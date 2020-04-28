import React, { Component } from "react";
import {InfoItem} from '../InfoItem/InfoItem'
import "../Nav/Nav.css";
import dropDown from "../../Images/drop-down.svg";
import home from "../../Images/home.svg";
import { Route, Link } from "react-router-dom";

export class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showOptions: false,
      popUpStatus: ""
    };
  }
  toggleShowOptions = e => {
    e.preventDefault();
    this.setState({ showOptions: !this.state.showOptions });
  };
  togglePopUp = e => {
    e.preventDefault();
    this.setState({ popUpStatus: e.target.value });
  };
  render() {
    return (
      <nav>
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
          <button onClick={e => this.props.changePage("resume")}>Resume</button>
          <button onClick={e => this.props.changePage("projects")}>
            Projects
          </button>
          <button onClick={e => this.props.changePage("bio")}>Bio</button>
          {this.state.showOptions && (
            <div className="nav_bar__verbose">
              <h3>Icons</h3>
              <div className="info_item__container">
                <InfoItem ></InfoItem>
              </div>
            </div>
          )}
        </div>
      </nav>
    );
  }
}
