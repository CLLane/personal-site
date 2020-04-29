import React, { Component } from "react";
import { InfoItem } from "../InfoItem/InfoItem";
import "../Nav/Nav.css";
import dropDown from "../../Images/drop-down.svg";
import home from "../../Images/home.svg";
import resume from "../../Images/resume.svg";
import bio from "../../Images/bio.svg";
import projects from "../../Images/projects.svg";

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
           <button
            onMouseEnter={e => this.toggleShowOptions(e)}
            className="nav_button__false"
            >
            <img className="nav_button__img" src={dropDown}></img>
          </button>
          {this.state.showOptions && (
            <div className="nav_bar__verbose"
            onMouseLeave={e => this.toggleShowOptions(e)}>
              <div className="info_item__container">
                <InfoItem changePage={this.props.changePage}></InfoItem>
              </div>
            </div>
          )}
      </nav>
    );
  }
}
