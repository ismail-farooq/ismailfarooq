import React, { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import color from "../../../public/color-sharp.png";
import occ from "../../../public/occ.png";
import ru from "../../../public/ru.png";
import dAI from "../../../public/displayai.png";


function Qualification() {
  const [toggle, setToggle] = useState(1);

  const toggleTab = (index) => {
    setToggle(index);
  };

  return (
    <section className="qualification" id="qualification">
      <Container>
        <Row>
          <Col>
            <div className="qualification-box">
              <h2>Qualification</h2>
              <p>My personal journey</p>
              <div className="qualification_container container">
                <div className="qualification_tabs">
                  <div
                    onClick={() => toggleTab(1)}
                    className={
                      toggle === 1
                        ? "qualification_button button--flex qualification_active"
                        : "qualification_button button--flex"
                    }
                  >
                    <i className="uil--graduation-cap qualification_icon"></i>{" "}
                    Education
                  </div>
                  <div
                    onClick={() => toggleTab(2)}
                    className={
                      toggle === 2
                        ? "qualification_button button--flex qualification_active"
                        : "qualification_button button--flex"
                    }
                  >
                    <i className="ph--briefcase qualification_icon"></i>{" "}
                    Experience
                  </div>
                </div>

                <div className="qualification_sections">
                  {/* Education Section */}
                  <div
                    className={
                      toggle === 1
                        ? "qualification_content qualification_content_active"
                        : "qualification_content"
                    }
                  >
                    <div className="qualification_data">
                      <div>
                        <img src={occ} alt="" />
                        <h3 className="qualification_title">
                          Ocean County College
                        </h3>
                        <span className="qualification_subtitle">
                          Toms River, NJ{" "}
                        </span>
                        <div className="qualification_calender">
                          <i className="uit--calender"></i> 2024 - Present
                        </div>
                      </div>

                      <div>
                        <span className="qualification_rounder"></span>
                        <span className="qualification_line"></span>
                      </div>
                    </div>

                    <div className="qualification_data">
                      <div></div>
                      <div>
                        <span className="qualification_rounder"></span>
                        <span className="qualification_line"></span>
                      </div>
                      <div>
                        <img src={ru} alt="" style={{width:'100px'}} />
                        <h3 className="qualification_title">
                          Rutgers University
                        </h3>
                        <span className="qualification_subtitle">
                          New Brunswick, NJ{" "}
                        </span>
                        <div className="qualification_calender">
                          <i className="uit--calender"></i> 2024 - Present
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Experience Section */}
                  <div
                    className={
                      toggle === 2
                        ? "qualification_content qualification_content_active"
                        : "qualification_content"
                    }
                  >
                    <div className="qualification_data">
                      <div>
                        <img src={dAI} alt="" />
                        <h3 className="qualification_title">Display AI</h3>
                        <span className="qualification_subtitle">
                          Edison, NJ{" "}
                        </span>
                        <div className="qualification_calender">
                          <i className="uit--calender"></i> 2024 - Present
                        </div>
                      </div>

                      <div>
                        <span className="qualification_rounder"></span>
                        <span className="qualification_line"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <img src={color} className="background-image-right2" />
    </section>
  );
}

export default Qualification;
