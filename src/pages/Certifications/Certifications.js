import { Container } from "react-bootstrap";
import Typewriter from 'typewriter-effect';
import { CardCertifications } from "../../components/CardCertifications/CardCertification";
import certifications from "../../data/certifications.json";
import "./Certifications.css";

export function Certifications() {
  return (
    <Container>
      <div className="certifications-main-content">
        <div className="certifications-header">
        <h2>
          <Typewriter
            options={{
              strings: ['certifications'],
              autoStart: true,
              loop: true,
            }}
          />
          </h2>
        </div>
        <div className="certifications-container">
          {certifications.map((certification) => {
            return (
              <CardCertifications
                key={certification.id}
                title={certification.title}
                link={certification.link}
                school={certification.school}
                issued={certification.issued}
              />
            );
          })}
        </div>
      </div>
    </Container>
  );
}
