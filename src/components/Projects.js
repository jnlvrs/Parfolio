import Card from "./Card";
import ProjectData from "../Utils/ProjectData";

function Projects(props) {
  return (
    <div id="Projects" className="projects bg2g borderb">
      <h2 className="projects-h2">My Projects</h2>
      <div className="project-cards">
        {ProjectData.map((project, i) => (
          <div key={i}>
            <Card text={project.title} Link={project.link} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
