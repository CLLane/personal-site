import React from "react";
import github from "../../Images/github.svg";
import api from "../../Images/api.svg";
import "./Projects.css";

export const Projects = () => {
  return (
    <div className="project">
      <img
        className="project_title"
        src="https://fontmeme.com/permalink/200429/c574a4eaf640af3ddcbfa52c8fc21a8d.png"
        alt="wander-over-yonder-font"
        border="0"
      ></img>

      <h2 className="project_title">Color Picker</h2>
      <div className="project-container__div">
        <img
          src="https://alumni.turing.io/sites/default/files/styles/project_screenshot/public/project_screenshots/HomeScreen.png?itok=khB_dNLF"
          className="project-image"
        ></img>
        <div className="project_p">
          <p>
            A random hex-code generator that allows a user to create projects
            and save palettes to projects. The app allows user to login or
            create a new account. The backend to this app was created using
            node.js and is set up to allow a user to register, create, delete,
            and edit color palettes.
          </p>
        </div>
        <div className="projects_secondRow">
          <div className="project_tech__container">
            <h3>TechStack</h3>
            <ul>
              <li>React</li>
              <li>React Router</li>
              <li>React Hooks</li>
              <li>Jest</li>
              <li>Enzyme</li>
              <li>Node.js</li>
            </ul>
          </div>
          <div className="project_link__container">
            <a href="https://github.com/CLLane/color-picker-ui" target="_blank">
              <img className="link_icon" src={github}></img>
              FrontEnd
            </a>
            <a
              href="https://github.com/djavanm/color-picker-api"
              target="_blank"
            >
              <img className="link_icon" src={github}></img>
              BackEnd
            </a>
          </div>
        </div>
      </div>
      <h2 className="project_title">Launch Log</h2>
      <div className="project-container__div">
        <img
          src="https://alumni.turing.io/sites/default/files/styles/project_screenshot/public/project_screenshots/Home.png?itok=988q-cEX"
          className="project-image"
        ></img>
        <div className="project_p">
          <p>
            Launch Log allows users to search the Launch Library API for
            upcoming space launches around the world as well as research
            companies, specific rockets, and missions. The application is
            bootstrapped with Create React App utilizes React Router for page
            navigation, Redux to assist in data management, PropTypes to ensure
            the correct data types are passed within the program, and a testing
            suite utilizing Enzyme and Jest. Tests cover UI changes, event
            simulation, async fetch calls, React state changes, and Redux store
            updates.
          </p>
        </div>
        <div className="projects_secondRow">
          <div className="project_tech__container">
            <h3>TechStack</h3>
            <ul>
              <li>React</li>
              <li>React Router</li>
              <li>Redux</li>
              <li>Jest</li>
              <li>Enzyme</li>
            </ul>
          </div>
          <div className="project_link__container">
            <a href="https://github.com/CLLane/space-launch" target="_blank">
              <img className="link_icon" src={github}></img>
              FrontEnd
            </a>
            <a
              href="hhttps://launchlibrary.net/docs/1.4.1/api.html"
              target="_blank"
            >
              <img className="link_icon" src={api}></img>
              API
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
