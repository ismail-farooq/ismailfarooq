import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavBar() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

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

  return (
    <Navbar id="navbar" expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img className="logo1" src="../../../public/logo.png" alt="LOGO"></img>
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
              onClick={() => {
                onUpdateActiveLink("skills");
              }}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => {
                onUpdateActiveLink("projects");
              }}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              href="#education"
              className={
                activeLink === "education" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => {
                onUpdateActiveLink("education");
              }}
            >
              Education
            </Nav.Link>
            <Nav.Link
              href="#experience"
              className={
                activeLink === "experience" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => {
                onUpdateActiveLink("experience");
              }}
            >
              Experience
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="#">
                <img src="public\linkedin.png" alt="" />
              </a>
              <a href="#">
                <img src="public\github-mark-white.png" alt="" />
              </a>
            </div>
            <button className="vvd">
              <span>Let's connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
