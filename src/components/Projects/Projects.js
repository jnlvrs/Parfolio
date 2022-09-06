import ProjectData from "../../Utils/ProjectData";
import "./projects.css"

function Projects() {
  return (
    <div id="Projects" className="projects bg2 borderb">
      <h2 className="projects-h2">My Projects</h2>
      <div className="card-container">
        {ProjectData.map((p, i) => (
        <div className="card" key={i}>
          <h3 className="title">{p.title}</h3>
          <div className="bar">
            <div className="emptybar"></div>
            <div className="filledbar"></div>
          </div>
          <div className="project-title">
            <a href={p.link}>Github repository</a>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
