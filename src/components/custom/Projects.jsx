import React from "react";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import "animate.css";
import TrackVisibility from "react-on-screen";
import face from "../../../public/face.jpg";
import resume from "../../../public/resume.jpg";
import mario from "../../../public/mario.jpg";
import snaplens from "../../../public/snaplens.jpg";
import stock from "../../../public/stock.jfif";


function Projects() {
  const projects = [
    {
      title: "Face Detection",
      description: "Computer Vision and Deep Learning detection model",
      img: face,
      url: "https://ismailfarooq.pythonanywhere.com/camera_feed",
    },
    {
      title: "Artificial Intelligence Resume Builder",
      description: "Neural network-powered LLM generation",
      img: resume,
      url: "https://ai-resume-builder-react.vercel.app/",
    },
    {
      title: "Mario",
      description: "2-Dimensional Game Engine",
      img: mario,
      url: "https://ismailfarooq-mario.vercel.app/",
    },
    {
      title: "Augmenred Reality",
      description: "3-Dimensional ML rendering",
      img: snaplens,
      url: "https://www.google.com/url?q=https://lens.snap.com/experience/0f7532f4-b5a6-44d5-a40a-b3f8a8e570c7&sa=D&source=docs&ust=1731528756733266&usg=AOvVaw0hI5qgARF5GInriv5y6GHH",
    },
    {
      title: "Algorithmic Trading Bot",
      description: "Real time stock transactions",
      img: stock,
      url: "https://ismailfarooq.pythonanywhere.com/login",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
            {({isVisible})=>  
              <div className={isVisible ? 'animate__animated animate__pulse' : ''}>
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
