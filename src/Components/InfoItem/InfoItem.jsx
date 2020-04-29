import React from "react";
import home from "../../Images/home.svg";
import resume from "../../Images/resume.svg";
import bio from "../../Images/bio.svg";
import projects from "../../Images/projects.svg";
import '../InfoItem/InfoItem.css'

export const InfoItem = ({ changePage }) => {
  let infoObjects = [
    { name: "Home", img: home, tag: 'home', class: 'info_item__home' },
    { name: "Resume", img: resume, tag: 'resume', class: 'info_item__resume' },
    { name: "Projects", img: projects, tag: 'projects', class: 'info_item__projects' },
    { name: "Bio", img: bio, tag: 'bio', class: 'info_item__bio' }
  ];

  return infoObjects.map(obj => {
    console.log("obj", obj);
    return (
      <div
        onClick={e => changePage(obj.tag)}
        className={obj.class}
      >
        <img className="nav_home__img" src={obj.img}></img>
        <p className='nav_tag'>{obj.name}</p>
      </div>
    );
  });
};
