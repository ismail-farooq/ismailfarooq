import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import logo from '../../../public/logo.png';
import linkedin from '../../../public/linkedin.png';
import github from '../../../public/github-mark-white.png';

function NavBar() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 1) {
        setScrolled(true);
        const navbar = document.getElementById("navbar");
        navbar.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
        navbar.style.transition = "background-color 0.5s ease-in-out";
      } else {
        setScrolled(false);
        document.getElementById("navbar").style.background = "transparent";
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  const handleModalOpen = () => setShowModal(true);
  const handleModalClose = () => setShowModal(false);

  return (
    <>
      <Navbar id="navbar" expand="lg" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="#home">
            <img className="logo1" src={logo} alt="LOGO"></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                href="#skills"
                className={
                  activeLink === "skills" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("skills")}
              >
                Tech Stack
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={
                  activeLink === "projects" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("projects")}
              >
                Projects
              </Nav.Link>
              <Nav.Link
                href="#qualification"
                className={
                  activeLink === "qualification"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("qualification")}
              >
                Qualification
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a
                  href="https://www.linkedin.com/in/ismail-omer-farooq/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={linkedin} alt="LinkedIn" />
                </a>
                <a
                  href="https://github.com/ismail-farooq"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={github} alt="GitHub" />
                </a>
              </div>
              <button className="vvd" onClick={handleModalOpen}>
                <span>Let's connect</span>
              </button>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Modal */}
      <Modal show={showModal} onHide={handleModalClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Contact Me</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Feel free to reach out via email or connect on LinkedIn!</p>
          <p>
            📧 <a href="mailto:iof7@rutgers.scarletmail.com">iof7@rutgers.scarletmail.com</a>
          </p>
          <p>
            🔗{" "}
            <a
              href="https://www.linkedin.com/in/ismail-omer-farooq/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn Profile
            </a>
          </p>
          <p>
            🐈‍⬛{" "}
            <a
              href="https://www.github.com/ismail-farooq/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github Profile
            </a>
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default NavBar;
