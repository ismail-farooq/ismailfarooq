import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Skills() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }; 

  return (
    <section>
      <Container className="skill" id="skills">
        <Row>
          <Col>
            <div className="skill-box">
              <h2>Skills</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos
                quis et odit! Laboriosam pariatur repudiandae labore, hic, illum
                distinctio, cum voluptatum culpa at totam commodi amet! Rem
                quasi ex vitae?
              </p>
              <Carousel responsive={responsive} infinite={true} autoPlay={true} 
                autoPlaySpeed={3000} className="skills-slider">
                <div className="skill-item">
                    <img src="" alt="" />
                    <h5>1</h5>
                </div>
                <div className="skill-item">
                    <img src="" alt="" />
                    <h5>2</h5>
                </div>
                <div className="skill-item">
                    <img src="" alt="" />
                    <h5>3</h5>
                </div>
                <div className="skill-item">
                    <img src="" alt="" />
                    <h5>4</h5>
                </div>
                <div className="skill-item">
                    <img src="" alt="" />
                    <h5>5</h5>
                </div>
                <div className="skill-item">
                    <img src="" alt="" />
                    <h5>6</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img src="color-sharp.png" className="background-image-left "/>
    </section>
  );
}

export default Skills;
