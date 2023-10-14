import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import hilongos_connect_logo from "../assets/images/hilongos-connect-logo.PNG";
import "../assets/styles/Header.css";
function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className="container-hilongos-links">
        <Navbar.Brand href="/" className="navbar-parent-img-p">
          <img
            src={hilongos_connect_logo}
            alt="hilongos-connect-logo"
            className="hilongos-connect-logo"
          />
          <p>
            HILONGOS{" "}
            <span className="hilongos-connect-connectspan">CONNECT</span>
          </p>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav "
          className="nav-links-container-parent"
        >
          <Nav className="nav-links-hilongos-connect">
            {/* <Nav.Link className="nav-link-header" href="/">
              Home
            </Nav.Link> */}
            <Nav.Link className="nav-link-header" href="/about">
              About
            </Nav.Link>
            <Nav.Link className="nav-link-header" href="/contact-us">
              Contact Us
            </Nav.Link>
            <Nav.Link
              href="/login"
              className="login-hilongos-connect nav-link-header"
            >
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
