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
    {
      img: university,
      p:
        "https://fontmeme.com/permalink/200429/028713d6ca1b2ad9dd3bf3e305168c0c.png"
    },
    {
      img: chemist,
      p:
        "https://fontmeme.com/permalink/200429/dd3f90aaea92883bcb01ff1511898c9c.png"
    },
    {
      img: chef,
      p:
        "https://fontmeme.com/permalink/200429/dba0b2fb2f4d910e07ad9baa83f14731.png"
    },
    {
      img: artist,
      p:
        "https://fontmeme.com/permalink/200429/f95a34c75d791b9a417a07974cdafe1c.png"
    },
    {
      img: running,
      p:
        "https://fontmeme.com/permalink/200429/8701f376173811f3e170318fa0d4b432.png"
    },
    {
      img: climbing,
      p:
        "https://fontmeme.com/permalink/200429/8f4c3a4ad010b7f2ab42c17159671a6e.png"
    },
    {
      img: developer,
      p:
        "https://fontmeme.com/permalink/200429/dd0f59fce3089ffb3c91382ce64eae3a.png"
    }
  ];

  return bioObjects.map((obj, index) => {
    if (index == 0) {
      return (
        <>
          <div className="bio_container__div">
            <img src="https://fontmeme.com/permalink/200429/1567c8c48f228d0b19ec315ff9fdd58b.png"></img>
          </div>
          <div className="bio_container__div">
            <img className="bio_svg" src={obj.img}></img>
            <img
              src={obj.p}
              alt="wander-over-yonder-font"
              border="0"
            ></img>
          </div>
        </>
      );
    } else if (index % 2 === 0) {
      return (
        <div className="bio_container__div">
          <img src={obj.p} alt="wander-over-yonder-font" border="0"></img>
          <img className="bio_svg" src={obj.img}></img>
        </div>
      );
    } else {
      return (
        <div className="bio_container__div">
          <img className="bio_svg" src={obj.img}></img>
          <img src={obj.p} alt="wander-over-yonder-font" border="0"></img>
        </div>
      );
    }
  });
};
