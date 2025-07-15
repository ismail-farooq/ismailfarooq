import React, { useEffect, useState } from "react";
import { Col, Container, Row, Modal, Button } from "react-bootstrap"; 
import { ArrowRightCircle } from "react-bootstrap-icons";
import 'animate.css'
import TrackVisibility from "react-on-screen";




function Banner() {
  const [loopNum, setLoopNum] = useState(0);
  const toRotate = ["Frontend", "Backend", "AR/VR", "Unreal Engine", "DevOps"];
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(200 - Math.random() * 100);
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text, isDeleting, delta, loopNum]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(100);
    }
  };
  const [showModal, setShowModal] = useState(false);
  const handleModalOpen = () => setShowModal(true);
  const handleModalClose = () => setShowModal(false);

  return (<>
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    {`Hi I'm Ismail - `}
                    <br />
                    <span className="typer">{text}</span>
                  </h1>
                  <p>
                    Hey! I'm Ismail — a computer science student at Rutgers, The State University of New Jersey who loves coding, solving problems, and learning cool new things in tech.
                    I spend a lot of time on LeetCode, building random projects, and diving into AI whenever I get the chance.
                    Always down to learn, build, and improve.
                  </p>
                  <br></br>
                  <p>Completed externships at Snap Inc. and Epic Games, creating AR experiences with Lens Studio and developing 3D projects using Unreal Engine</p>
                </div>
              )}
            </TrackVisibility>


            <button onClick={handleModalOpen}>
              Let's connect <ArrowRightCircle size={25}></ArrowRightCircle>
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src="deer2.png" alt="header img" />
          </Col>
        </Row>
      </Container>
    </section>
    <Modal show={showModal} onHide={handleModalClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Contact Me</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Feel free to reach out via email or connect on LinkedIn!</p>
          <p>
            📧 <a href="mailto:iof7@rutgers.scarletmail.edu">iof7@rutgers.scarletmail.edu</a>
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

export default Banner;
