import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Artist from "../../Assets/Projects/Artist_Lucky_Haaru.png";
import chatty from "../../Assets/Projects/chatty.png";
import BusiAssist from "../../Assets/Projects/BusiAssist.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Personal Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatty}
              isBlog={false}
              title="Chatty"
              description="Chat App – A real-time chat application built using MERN stack, enabling seamless messaging with user authentication and responsive UI for web and mobile."
              ghLink="https://github.com/ALAVALALAKSHMIHARATHI/chat-app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BusiAssist}
              isBlog={false}
              title="BusiAssist"
              description="BusiAssist – A business management web application built with the HTML5, CSS and JavaScript, providing features for inventory tracking, sales management, and customer insights. Designed to streamline business operations with an intuitive UI and real-time data updates."
              ghLink="https://github.com/ALAVALALAKSHMIHARATHI/BusiAssist"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Artist}
              isBlog={false}
              title="Artist Lucky Haaru Website"
              description="Artist Lucky Haaru – A personal portfolio website showcasing artistic works, including drawings, paintings, and crafts. Built using HTML, CSS, and JavaScript, the site highlights creativity and design skills with an interactive and visually appealing interface."
              ghLink="https://github.com/ALAVALALAKSHMIHARATHI/Artist-lucky-haaru"
              demoLink="https://lakshmiharathi.netlify.app/home"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
