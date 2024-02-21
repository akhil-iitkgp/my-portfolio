import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import auth from "../../Assets/Projects/auth.png";
import ecom from "../../Assets/Projects/e-commerce.jpg";
import wqi from "../../Assets/Projects/wqi.png";
import coursehub from "../../Assets/Projects/coursehub.png";


function Projects() {

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecom}
              isBlog={false}
              title="E-commerce Platform"
              description="Built e-commerce platform with Django Rest API, ReactJS, HTML, Tailwind. Integrated PayPal for transactions. Developed cart, admin section, and search features. Enhanced user experience with product rating system."
              ghLink="https://github.com/akhil-iitkgp/E-commerce-Website"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={auth}
              isBlog={false}
              title="Authentication & Authorization"
              description="Developed backend app for authentication & authorization in edtech startup. Unique functionalities for students, admins, & instructors. Utilized JWT tokens & cookies for secure access & user differentiation"
              ghLink="https://github.com/akhil-iitkgp/Auth-App"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wqi}
              isBlog={false}
              title="WQI Calculator"
              description="Simplify water quality assessment with our WQI calculator app. Quickly determine WQI values by streamlining complex processes and chart navigation. Easy, efficient, and essential for environmental monitoring."
              ghLink="https://github.com/akhil-iitkgp/WQI-Calculator"
              demoLink="https://akhil-iitkgp.github.io/WQI-Calculator/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={coursehub}
              isBlog={false}
              title="CourseHub"
              description="Welcome to CourseHub! Discover online courses by domain. Filter options, interactive UI, toast notifications, responsive design for seamless browsing. Utilized useState for state management & useEffect for API calls. Streamlining course selection process."
              ghLink="https://github.com/akhil-iitkgp/Course_Selection"
              demoLink="https://welcome-to-coursehub.netlify.app/"              
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={}
              isBlog={false}
              title=""
              description
              ghLink=
              demoLink=
            />
          </Col> */}

          

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
