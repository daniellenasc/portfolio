import { Container } from "react-bootstrap";

import Dev from "../../assets/Images/undraw-dev-focus-full.svg";
import "./Home.css";

export function Home() {
  return (
    <Container>
      <div className="main-bg">
        <div className="home-main-content">
          <div className="home-text">
            <h1>Hello, I'm Danielle Nascimento!</h1>
            <p>
              Web Developer passionate about simple solutions to difficult
              problems.
            </p>
            <p>Here you can find a little bit more about me and my work.</p>
          </div>
          
          <div className="home-img">              
            <img src={Dev} alt="developer" />          
          </div>
      
        </div>
      </div>
    </Container>
  );
}
