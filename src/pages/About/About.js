import { Container } from "react-bootstrap";
import profile from "../../assets/Images/profile.jpg";
import "./About.css";

export function About() {
  return (
    <Container>
      <div className="about-main-content">
        <div className="about-header">
          <h2>about</h2>
        </div>

        <div className="about-container">
          <section className="about-text">
            <p>
              Web Developer with 'fantastic enthusiasm and a natural eye for all
              things digital'.
            </p>
            <p>
              Portuguese born in Brazil currently living in France, I am
              passionate about finding simple solutions to difficult problems. I
              am always talking about technology, philosophy, books and movies.
            </p>
            <p>
              After working as a lawyer and police officer, in extremely
              challenging environments where I developed many interpersonal
              skills, I decided to join my family in Europe and start my journey
              in technology.
            </p>
            <p>
              I am an{" "}
              <a
                className="about-link"
                href="https://www.ironhack.com/en"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ironhack
              </a>{" "}
              Web Dev bootcamp 'alumni', and at the moment I am expanding my
              knowledge on{" "}
              <a
                className="about-link"
                href="https://www.codecademy.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Codecademy
              </a>{" "}
              and{" "}
              <a
                className="about-link"
                href="https://www.udemy.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Udemy
              </a>{" "}
              .
            </p>
            <p>
              <b>
                My tech skills are: Javascript (ES6), TypeScript, ReactJS,
                HTML5/CSS3, Bootstrap, Material UI, NodeJS, Express, Axios,
                HTTP/JSON, MongoDB, Responsive Layout, Git & GitHub, Agile,
                Scrum & Remote Work Methods.
              </b>
            </p>
            <p>
              'Dani learns very quickly, has independent problem solving
              abilities, demonstrates natural curiosity, and has high quality
              standards for herself as well as others.'
            </p>
          </section>
          <section>
            <img className="about-image" src={profile} alt="Me" />
          </section>
        </div>
      </div>
    </Container>
  );
}
