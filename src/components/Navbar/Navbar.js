import { Navbar, Container, Nav } from "react-bootstrap";

export function NavbarExterna() {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand>
          <Nav.Link href="/" style={{ color: "black" }}>
            <i className="fa-solid fa-code"></i>
          </Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/about" style={{ color: "black" }}>
              About
            </Nav.Link>
            <Nav.Link href="/projects" style={{ color: "black" }}>
              Projects
            </Nav.Link>
            <Nav.Link href="/certifications" style={{ color: "black" }}>
              Certifications
            </Nav.Link>
            <Nav.Link href="/contact" style={{ color: "black" }}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
