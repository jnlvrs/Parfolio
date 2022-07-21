import React, {useState} from "react";
import HeadShot from "../img/HeadShot2.jpg";
import Wife from "../img/Wife.jpg";
import Kiddos from "../img/Kiddos.jpg";

function About() {
  const [open, setOpen] = useState(true);

  const showToggle = () => setOpen(!open);

  return (
    <div id="About" className="about-container bg2 borderb">
      <div className="about-heading-container">
        <h2>About Me</h2>
        <div className="about-p-img-container">
          <div className="about-img-container">
            <div className="avatar me" data-tooltip="Me!"></div>
            <div className="avatar wife" data-tooltip="Wife!"></div>
            <div className="avatar kiddos" data-tooltip="Kiddos!"></div>
          </div>
          <div className="about-p-container bg1 hl2 bxs">
            <p>
              &emsp;Hi, am a JavaScript Developer located in Minnesota. I am
              learning and growing a passion for coding thanks to my cousins. I
              am a well-organized individual that enjoys solving problems and
              has a high drive and interest to move forward in my life as well
              as my career.
            </p>
            <br />
            <p>
              &emsp;&emsp;I am a father of three kiddos that I very much love.
              Interested in the entire Full-Stack spectrum and working on
              projects with positive people!
            </p>
          </div>
        </div>
        <div className="fullstack-container">
          <button onClick={showToggle} className="fs-btn">
            Familiar Technologies
          </button>
          <div className={open ? "list-toggle-on" : "list-toggle-off"}>
            <ul>
              <li data-count="1">JavaScript</li>
              <li data-count="2">React/JSX</li>
              <li data-count="3">Angular</li>
              <li data-count="4">OOP</li>
              <li data-count="5">Express-Node</li>
              <li data-count="6">HTML5</li>
              <li data-count="7">CSS3</li>
              <li data-count="8">Github</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
