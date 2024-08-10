import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../../../public/logo.png";
import linkedin from "../../../public/linkedin.png";
import github from "../../../public/github-mark-white.png";

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          <Col sm={6}>
            <img src={logo} alt=""/>
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/ismail-omer-farooq/"
                target="_blank"
              >
                <img src={linkedin} alt="" />
              </a>
              <a href="https://github.com/ismail-farooq" target="_blank">
                <img src={github} alt="" />
              </a>
            </div>
            <p>Copytight 2024. All Right Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
