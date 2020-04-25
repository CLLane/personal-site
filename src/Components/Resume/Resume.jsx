import React from "react";
import '../Resume/Resume.css'
import Cv from '../../../src/Images/chris-lane-resume.jpg'

export const Resume = () => {
  return (
    <div className='resume_container'>
    <img className="resume_pdf"
      src={Cv}
    ></img>
    </div>
  );
}