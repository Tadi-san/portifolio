/* eslint-disable jsx-a11y/alt-text */
import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Monty",
      description:
        "Monty is a language that aims to close the gap between scripting and programming languages.",
      imgUrl: projImg1,
      link:""
    },
    {
      title: "Yelp Camp",
      description: "A project to post and review Campgrounds.",
      imgUrl: projImg2,
      link:""
    },
    {
      title: "Farm-Hub",
      description:
        "A website to buy and sell fresh agricultural products, which has a Generative AI tool to enhance user experience.",
      imgUrl: projImg3,
      link:""
    },
    {
      title: "AirBnB Clone",
      description: "I have cloned AirBnB for ALX project.",
      imgUrl: projImg4,
      link:""
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <br></br>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <div className=" flex flex-col md:flex-row justify-center items-center w-full">
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
