import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Akhil Kumar </span>
            from <span className="purple"> Uttarakhand, India. </span>
             Looking for Software Developer Opportunities
            <br />
            <br />
            I'm pursuing my Dual Degree at{" "}
            <span className="purple"> IIT Kharagpur</span>, with an expected
            graduation in May 2024, with a CGPA of 8.37/10.
            <br />
            <br />
            Versatile Interests Beyond Coding!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Experienced in team management as Contingent Captain of IIT KGP.
            </li>
            <li className="about-activity">
              <ImPointRight /> Passionate about Sports and enjoy playing regularly.
            </li>
            <li className="about-activity">
              <ImPointRight /> Enthusiastic traveler, always seeking new adventures.
            </li>
          </ul>

          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
