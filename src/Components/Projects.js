import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import "animate.css";
import TrackVisibility from "react-on-screen";

import colorSharp2 from "../img/color-sharp2.png";
import fyt from "../img/findYourTeacher.jpg";
import piFood from "../img/PI-Food.png";
import furros from "../img/Furros.JPG"
import festival from "../img/FestivalVerde.JPG"

export const Projects = () => {
  const projects = [
    {
      title: "Find Your Teacher",
      description:
        "Aplicacion creada para que estudiantes de colegio puedan encontrar un profesor adecuado a sus necesidades.",
      imgUrl: fyt,
      url: "https://find-your-teacher-pf.vercel.app",
    },
    {
      title: "Proyecto Individual Food",
      description: "Proyecto estudiantil para el bootcamp SoyHenry.",
      imgUrl: piFood,
      url: "https://www.youtube.com/watch?v=c3-A21JSVmQ&t=4s",
    },
  ];
  const gameProjects=[{
    title: "Furros al ataque",
    description:
      "Iniciativa desarrollada por compañeros de la universidad, para aprender nuevas habilidades y trabajar en equipo",
    imgUrl:furros,
    url: "https://fabilopez.itch.io/sup",
    
  },
  {
    title: "Festival Verde",
    description:
      "Aplicacion en donde se logra tener una experiencia inmersiva, dando a conocer emprendimientos colombianos",
    imgUrl:festival,
    url: "https://fabilopez.itch.io/sup",
    
  },]

  return (
    <section className="project" id="project">
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
                  <p>
                    En esta seccion encontraras los mejores proyectos que he
                    realizado ya sean individual o grupales.
                  </p>

                  <p>
                    Haciendo Click en el nombre del proyecto te dirigira a su
                    información.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Web Develop</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Game Develop</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <p>Tecnologias: ReactJS, Css, HTML, JavaScript, PostgresSql, Sequelize, Redux, git.</p>
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>
                         Tecnologias: Unity3D, C#, Photoshop, git.
                        </p>
                        <Row>
                          {gameProjects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          Proximamente...
                        </p>
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
