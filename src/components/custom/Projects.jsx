import React from "react";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import "animate.css";
import TrackVisibility from "react-on-screen";

function Projects() {
  const projects = [
    {
      title: "Face Detection",
      description: "Computer Vision and Deep Learning detection model",
      img: "",
      url: "https://ismailfarooq.pythonanywhere.com/camera_feed",
    },
    {
      title: "Artificial Intelligence Resume Builder",
      description: "Neural network-powered LLM generation",
      img: "",
      url: "https://ai-resume-builder-react.vercel.app/",
    },
    {
      title: "Mario",
      description: "3-Dimensional Game Engine",
      img: "",
      url: "",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
            {({isVisible})=>  
              <div className={isVisible ? 'animate__animated animate__bounce' : ''}>
                <h2>Projects</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facere facilis eveniet consequuntur ipsam. Nobis hic, qui,
                  doloribus nulla commodi, animi obcaecati dolorum ipsam sed
                  harum maiores numquam quasi! Molestias, earum?
                </p>
              </div>}
            </TrackVisibility>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills">
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab 3</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => (
                      <ProjectCard key={index} {...project}></ProjectCard>
                    ))}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">Lorem Ipsum</Tab.Pane>
                <Tab.Pane eventKey="third">Lorem Ipsum</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img src="color-sharp2.png" className="background-image-right" />
    </section>
  );
}

export default Projects;
