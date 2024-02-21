import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  const[readmore,setReadmore]=useState(false);
  function readmoreHandler() {
    setReadmore(!readmore); 
  }
  const info = readmore ? props.description :`${props.description.substring(0,150)}....`;


  return (
    <Card className="project-card-view">
      <div classname="newimage">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      </div>
      <Card.Body>
        <div className="tour-name">
        <Card.Title>{props.title}</Card.Title>
        </div>
        <Card.Text style={{ textAlign: "justify" }}>
        <div className="description">{info}
                <span className="read-more"
                    onClick={readmoreHandler}>{readmore ? `Show Less` : `Show More`}</span>
                </div>
        </Card.Text>
        <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
