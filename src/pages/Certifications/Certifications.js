import { Container } from "react-bootstrap";
import Fade from "react-reveal";
import { CardCertifications } from "../../components/CardCertifications/CardCertification";
import certifications from "../../data/certifications.json";
import "./Certifications.css";

export function Certifications() {
  return (
    <Container>
      <div className="certifications-main-content">
        <div className="certifications-header">
          <h2>certifications</h2>
        </div>
        <div className="certifications-container">
          {certifications.map((certification) => {
            return (
              <Fade>
                <CardCertifications
                  key={certification.id}
                  title={certification.title}
                  link={certification.link}
                  school={certification.school}
                  issued={certification.issued}
                />
              </Fade>
            );
          })}
        </div>
      </div>
    </Container>
  );
}
