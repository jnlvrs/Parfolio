import React from "react";
import HeadShot from "../img/HeadShot.jpg";

function About() {
  return (
    <div id="About" className="about-container bg3g borderb">
      <div className="about-heading-container">
        <h2>About Me</h2>
        <div className="about-p-img-container">
          <div className="about-img-container">
            <img src={HeadShot} className="about-img" />
          </div>
          <div className="about-p-container bg1 hl2 bxs">
            <p>
              &emsp;&emsp;Hi, am a JavaScript Developer located in Minnesota. I
              am learning and growing a passion for coding thanks to my cousins.
              I am a well-organized individual that enjoys solving problems and
              has a high drive and interest to move forward in my life as well
              as my career.
            </p>
            <br />
            <p>
              &emsp;&emsp;I am a father of three kiddos that I very much love.
              Interested in the entire full stack spectrum and working on projects
              with positive people!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
