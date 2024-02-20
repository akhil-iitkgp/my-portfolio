import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import homeLogo from "../../Assets/home-main.svg";

import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            
            Enthusiastic and innovative, I'm a software developer with a robust foundation in
              <i>
                <b className="purple"> C++, Python, and Go </b>
                <b>honed at </b>
                <b className="purple">IIT Kharagpur. </b>
              </i>
              <br />
              <br />
              My technical repertoire includes developing scalable web technologies, with a special inclination towards automating and optimizing database interactions.
              <br />
              <br />
              My internships reflect a proactive approach to solving real-world problems using a stack that encompasses 
              <i>
              <b className="purple"> C++, Python, and Go </b>
              </i>
              <br/>
              <br/>
              I'm passionate about blending technical acumen with a zest for continuous learning and development in the tech sphere.
              <br/>
              <br/>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={homeLogo} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/akhil-iitkgp"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/akhil_aashiyan"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/akhiliitkgp/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/akhil_kumar2600/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
