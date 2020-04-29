import React from "react";
import "./Bio.css";
import university from "../../Images/university.svg";
import chemist from "../../Images/chemist.svg";
import chef from "../../Images/chef.svg";
import artist from "../../Images/artist.svg";
import climbing from "../../Images/climbing.svg";
import developer from "../../Images/developer.svg";
import running from "../../Images/running.svg";

export const Bio = () => {
  let bioObjects = [
    { img: university, p: "I went to school at Florida State University." },
    {
      img: chemist,
      p:
        "Where I studied Biochemistry, but decided that I didn't want to make soap for a living."
    },
    { img: chef, p: "So I decided to follow a passion and become a chef." },
    {
      img: artist,
      p:
        "While pursuing cooking as a career, I had a couple of shows where I hung some paintings and sketches"
    },
    {
      img: running,
      p:
        "A resturaunt can be a stressful place so I ran almost every morning to clear my head"
    },
    {
      img: climbing,
      p: "And when I could get some time away I would escape to go climb"
    },
    {
      img: developer,
      p:
        "I decided that I wanted a new challenge and switched careers to become a software developer"
    }
  ];

  return bioObjects.map((obj, index) => {
    if (index == 0) {
      return (
        <>
          <div className="bio_container__div">
            <h1>MY STORY IMG HERE</h1>
          </div>
          <div className="bio_container__div">
            <img className="bio_svg" src={obj.img}></img>
            <p>{obj.p}</p>
          </div>
        </>
      );
    } else if (index % 2 === 0) {
      return (
        <div className="bio_container__div">
          <p>{obj.p}</p>
          <img className="bio_svg" src={obj.img}></img>
        </div>
      );
    } else {
      return (
        <div className="bio_container__div">
          <img className="bio_svg" src={obj.img}></img>
          <p>{obj.p}</p>
        </div>
      );
    }
  });
};
