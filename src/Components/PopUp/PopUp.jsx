import React from "react";

export const PopUp = ({ togglePopUp }) => {
  return (
    <div>
      <h3>Keywords</h3>
      <div>
        <h4>Resume</h4>
        <ol>
          Include this in your query if:
          <li>You want to see my resume</li>
          <li>You want to download my resume</li>
        </ol>
      </div>
      <div>
        <h4>Bio</h4>
        <ol>
          Include this in your query if:
          <li>You want to learn about me</li>
        </ol>
      </div>
      <div>
        <h4>Projects</h4>
        <ol>
          Include this in your query if:
          <li>You want to see my completed projects</li>
        </ol>
      </div>
      <div>
        <h4>Social</h4>
        <ol>
          Include this in your query if:
          <li>You want to be linked to my Github page</li>
          <li>You want to be linked to my LinkedIn</li>
          <li>You want to email me</li>
        </ol>
      </div>
    </div>
  );
};
