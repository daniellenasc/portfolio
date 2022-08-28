import { Card } from "react-bootstrap";
import "./CardProjects.css";


export function CardProjects(props) {
  return (
    <Card className="card-project ">
      <Card.Body className="card-project-bg ">
        <Card.Title className="card-project-bg card-project-margin-bottom">
          {props.title.toUpperCase()}
        </Card.Title>
        <Card.Text className="card-project-bg ">{props.description}</Card.Text>
      </Card.Body>
      <Card.Body className="card-project-bg ">
        <button className="card-project-button project-button-container card-project-bg">
          <a href={props.repo} target="_blank" rel="noopener noreferrer">
            {" "}
            <i className="fa-brands fa-github card-project-bg"></i>{" "}
          </a>
        </button>
        {props.deploy ? (
          <button className="card-project-button project-button-container card-project-bg ">
            <a href={props.deploy} target="_blank" rel="noopener noreferrer">
              {" "}
              <i className="fa-solid fa-house card-project-bg"></i>
            </a>
          </button>
        ) : null}
      </Card.Body>
    </Card>
  );
}
