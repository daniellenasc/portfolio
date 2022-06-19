import "./heroimghome.css";
import { Container } from "react-bootstrap";
import Computer from "../../assets/Images/bc-img2.jpg";

export function HeroImgHome() {
  return (
    <div>
      <Container>
        <figure className="position-relative">
          <img src={Computer} alt="computer" className="img-fluid figure-img" />
          <figcaption>
            <h1>Hi, I'm Danielle Nascimento</h1>
            <p>
              Web Developer passionate about simple solutions to difficult
              problems.
            </p>
            <p>Here you can find a little bit more about me and my work.</p>
          </figcaption>
        </figure>
      </Container>
    </div>
  );
}
