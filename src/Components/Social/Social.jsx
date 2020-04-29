import React, {Component} from "react";
import '../Social/Social.css';
import twitter from '../../Images/twitter.svg';
import linkedin from '../../Images/linkedin.svg';
import github from '../../Images/github.svg';
import medium from '../../Images/medium.svg';


export const Social = () => {
  let socialObjs = [
    {
      img: twitter,
      link: "https://twitter.com/Christo75632564"
    },
    { img: linkedin, link: "https://www.linkedin.com/in/chrislanedev/" },
    { img: github, link: "https://github.com/CLLane" },
    { img: medium, link: "https://medium.com/@pankokrumbs" }
  ];

  return socialObjs.map(obj => {
    return (
      <>
        <a href={obj.link} target="_blank">
          <img className='social_icon' src={obj.img}></img>
        </a>
      </>
    )
  })
}