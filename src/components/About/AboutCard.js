import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Lakshmi Harathi Alavala </span>
            from <span className="purple"> Jaladanki, India.</span>
            <br />
            I am a MERN Stack Developer with a strong passion for building dynamic and responsive web applications.
            <br />
            I hold a Bachelor’s degree in Electronics and Communication Engineering from Jawaharlal Nehru Technological University, Anantapur, with an SGPA of 8.0.
            <br />
            During my frontend internship at DevSkillHub, I gained hands-on experience in React.js, JavaScript, HTML, and CSS, developing responsive web applications and optimizing website performance. I also worked on an e-commerce project that included features like product listing, search, and cart management.
            <br />
            Apart from web development, I have also worked on an IoT-based project, Smart Gloves for Deaf and Dumb People, which helps bridge communication gaps using embedded sensors and a connected application.
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Drawing
            </li>
            <li className="about-activity">
              <ImPointRight /> Painting
            </li>
            <li className="about-activity">
              <ImPointRight /> Crafting
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Lakshmi Harathi Alavala</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
