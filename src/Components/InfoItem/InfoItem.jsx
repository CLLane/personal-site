import React from "react";
import home from "../../Images/home.svg";
import resume from '../../Images/resume.svg';

export const InfoItem = () => {
  let infoObjects = [{ name: "Home", img: home  }, {name: "Resume", img: resume}, {name: 'Projects', img:'' }, {name: "Bio", img: ''}];

  return infoObjects.map(obj => {
    console.log('obj', home)
    return (
      <div className='info_item'>
        <p>{obj.name}</p>
        <img className="nav_home__img" src={obj.img}></img>
      </div>
    );
  });
};
