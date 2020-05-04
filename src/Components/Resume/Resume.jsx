import React from "react";
import '../Resume/Resume.css'
import Cv from '../../../src/Images/chris-lane-resume.jpg'

export const Resume = () => {
  return (
    <div className='resume_container'>
    <img src="https://fontmeme.com/permalink/200430/61442083d368409e21e4da7843210d95.png" alt="wander-over-yonder-font" border="0"></img>
    <img className="resume_pdf"
      src={Cv}
    ></img>
    </div>
  );
}