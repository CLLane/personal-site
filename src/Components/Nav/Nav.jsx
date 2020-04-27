import React from 'react';
import { Route, Link } from "react-router-dom";

export let Nav = (props) => {
  return (
    <nav>
      <Link
        to="/"
        onClick={() => props.changePage("home")}
        className="home-nav__link"
        value=""
        type="button"
      >
        Home
      </Link>
      <Link
        onClick={() => props.changePage("resume")}
        className="resume-nav__link"
        to="/Resume"
      >
        Resume
      </Link>
      <Link
        onClick={() => props.changePage("projects")}
        className="projects-nav__link"
        to="/Projects"
      >
        Projects
      </Link>
      <Link
        onClick={() => props.changePage("bio")}
        className="about-nav__link"
        to="/Bio"
      >
        About
      </Link>
    </nav>
  );
}