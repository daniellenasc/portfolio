import { Container } from "react-bootstrap";

import ContactImg from "../../assets/Images/contact-img-02.svg";
import "./Contact.css";

export function Contact() {
  return (
    <Container>
      <div className="contact-main-content">
        <div className="contact-text">
          <h2>Keep connected with me and my work</h2>
          <div>
            <div className="contact-button-container">
              <button>
                <a
                  href="https://github.com/daniellenasc"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <i className="fa-brands fa-github"></i>{" "}
                </a>
              </button>
              <button size="medium" variant="light">
                <a
                  href="https://www.linkedin.com/in/d-nascimento/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </button>

              <button size="medium" variant="light">
                <a
                  href="mailto:danielle_nascimento_@hotmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <i className="fa-solid fa-envelope"></i>{" "}
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="contact-img">
          <img src={ContactImg} alt="contact-img" />      
        </div>
      </div>
    </Container>
  );
}
