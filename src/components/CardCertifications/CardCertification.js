import { Card } from "react-bootstrap";
import "./CardCertifications.css";
export function CardCertifications(props) {
  return (
    <Card className="text-center card-certification">
      <Card.Header className="card-white-bg">{props.school}</Card.Header>
      <Card.Body className="card-white-bg">
        <Card.Title className="card-white-bg ">
          <a
            className="card-certification-link"
            href={props.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            {props.title.toUpperCase()}
          </a>
        </Card.Title>
        <Card.Text className="card-white-bg">{props.issued}</Card.Text>
        <Card.Text className="card-white-bg">{props.description}</Card.Text>
      </Card.Body>
    </Card>
  );
}
