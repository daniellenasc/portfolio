import { Container } from "react-bootstrap";
import { CardProjects } from "../../components/CardProjects/cardProjects";
import projects from "../../data/projects.json";
import "./Projects.css";

export function Projects() {
  return (
    <Container>
      <div className="projects-main-content">
        <div className="projects-header">
          <h2>projects</h2>
        </div>
        <div className="projects-container">
          {projects.map((project) => {
            return (
              <CardProjects
                key={project.id}
                title={project.title}
                description={project.description}
                repo={project.repo}
                deploy={project.deploy}
              />
            );
          })}
        </div>
      </div>
    </Container>
  );
}
