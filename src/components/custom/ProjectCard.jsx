import React from "react";
import { Col } from "react-bootstrap";

function ProjectCard({ title, description, img , url }) {
  return (
    <Col sm={6} md={4}>
      <a href={url} target="_blank">
      <div className="proj-imgbx" style={{height: '100%'}}>
        <img src={img}  alt='H'/>
        <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
        </div>
      </div>
      </a>
    </Col>
  );
}

export default ProjectCard;
