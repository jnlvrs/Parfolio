import React, {useState} from "react";
import './About.css'
import * as BsIcons from "react-icons/bs";

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
              &emsp;Hi, I am a JavaScript Developer with a passion for excellence in the world of coding.  Thanks to my cousins,
          I have found a career that combines my enjoyment of solving problems and being well-organized, with my love for computers.  
          I am interested in the entire full-stack spectrum and bringing my positive mindset to table and enjoy working in both group and solo projects.   
              
              
            </p>
            <br />
            <p>
              &emsp;&emsp;I live in Minnesota with my loving wife of 12 years with our three energetic kids.  When I'm not coding or learning new techniques I can be found adventuring outside with my fun-loving family. 
              
            </p>
          </div>
        </div>
        <div className="fullstack-container">
          <button onClick={showToggle} className="fs-btn">
            Familiar Technologies
            {open ?<BsIcons.BsFillCaretUpFill className="arr-dwn arr-svg" /> : <BsIcons.BsFillCaretDownFill className="arr-dwn arr-svg"/>}
          </button>
          <div className={open ? "list-toggle-on" : "list-toggle-off"}>
            <ul>
              <li data-count="1">JavaScript</li>
              <li data-count="2">React/JSX</li>
              <li data-count="3">Angular</li>
              <li data-count="4">Express-Node</li>
              <li data-count="5">HTML5</li>
              <li data-count="6">CSS3</li>
              <li data-count="7">Github</li>
              <li data-count="8">VS Code</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
