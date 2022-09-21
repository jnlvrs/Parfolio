
import ProjectData from "../../Utils/ProjectData"
import "./projects.css"

import ImgSlider from "./ImgSlider";

function Projects() {
  
  return (
    <div id="Projects" className="projects bg2 borderb">
      <h2 className="projects-h2">Projects</h2>
      <div className="showcases-container" >
      {ProjectData.map((projects, index) => {
        return (
          <div className="showcase-container" key={index}>
            <h3 className="showcase-title">{projects.title}</h3>
            <ImgSlider slides={projects.images}  />
            <a href={projects.link} >See Code at Github</a>
          </div>
        )
        })}
      </div>
    </div>
  );
}

export default Projects;