import React from "react";
import "./Projects.css";

export const Projects = () => {
  return (
    <div>
      <h1>PROJECTS</h1>
      <div className="project-container__div">
        <h2>Color Picker</h2>
        <img
          src="https://alumni.turing.io/sites/default/files/styles/project_screenshot/public/project_screenshots/HomeScreen.png?itok=khB_dNLF"
          class="project-image"
        ></img>
        <p>
          A random hex-code generator that allows a user to create projects and
          save palettes to projects. The app allows user to login or create a
          new account. Once logged in the user will be able to generate random
          hexcodes and in the event they find one they like there is an option
          to save a palette. If the user chooses to save a palette they must
          first create a project and once a project is created the palette will
          be saved, this can happen simultaneously. A user can create as many
          palettes as they would like and assign them to new or existing
          projects. The users projects and palettes. The user can utilze a
          button to logout, see all palettes, and lock hex-codes they like.
        </p>
        <div className="stack-container__div">
          <h3>TechStack</h3>
          <ul>
            <li>React</li>
            <li>React Router</li>
            <li>React Hooks</li>
            <li>Jest</li>
            <li>Enzyme</li>
          </ul>
        </div>
      </div>
      <div className="project-container__div">
        <h2>Color Picker</h2>
        <img
          src="https://alumni.turing.io/sites/default/files/styles/project_screenshot/public/project_screenshots/Home.png?itok=988q-cEX"
          class="project-image"
        ></img>
        <p>
          Launch Log, was built over the course of six days utilizing an agile
          workflow, and allows users to search the Launch Library API for
          upcoming space launches around the world as well as do research into
          companies, specific rockets, and missions. The application is
          bootstrapped with Create React App utilizes React Router for page
          navigation, Redux to assist in data management, PropTypes to ensure
          the correct data types are passed within the program, and a testing
          suite utilizing Enzyme and Jest. Tests cover UI changes, event
          simulation, async fetch calls, React state changes, and Redux store
          updates.
        </p>
        <div className="stack-container__div">
          <h3>TechStack</h3>
          <ul>
            <li>React</li>
            <li>React Router</li>
            <li>Redux</li>
            <li>Jest</li>
            <li>Enzyme</li>
          </ul>
        </div>
      </div>
      <h3>
        Checkout out my other Projects on{" "}
        <a href="https://github.com/CLLane">Github</a>{" "}
      </h3>
    </div>
  );
};
