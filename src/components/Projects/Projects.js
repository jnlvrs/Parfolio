
import ProjectData from "../../Utils/ProjectData"
import "./projects.css"

import * as FaIcons from "react-icons/fa"

function Projects() {

  const leftArrow = <FaIcons.FaChevronLeft size={20} className="LA-btn"/>
  const rightArrow = <FaIcons.FaChevronRight size={20} className="RA-btn"/>
  return (
    <div id="Projects" className="projects bg2 borderb">
      <h2 className="projects-h2">My Projects</h2>
      
    </div>
  );
}

export default Projects;
