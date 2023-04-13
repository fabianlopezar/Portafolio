import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "react-bootstrap";
import cs from "../images/images-skills/cs.png";
import html from "../images/images-skills/html.png";
import js from "../images/images-skills/js.png";
import nodejs from "../images/images-skills/nodejs.png";
import post from "../images/images-skills/postgres.png";
import react from "../images/images-skills/react.png";
import unity from "../images/images-skills/unity.png";

import colorSharp from "../img/color-sharp.png";

import "../Estilos/Skills.css";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx wow zoomIn">
              <h2>Habilidades</h2>

              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={cs} alt="Image" />
                  <h5>C#</h5>
                </div>
                <div className="item">
                  <img src={html} alt="Image" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={js} alt="Image" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={nodejs} alt="Image" />
                  <h5>NodeJs</h5>
                </div>
                <div className="item">
                  <img src={post} alt="Image" />
                  <h5>Postgress</h5>
                </div>
                <div className="item">
                  <img src={react} alt="Image" />
                  <h5>React | ReactNative</h5>
                </div>
                
                <div className="item">
                  <img src={unity} alt="Image" />
                  <h5>Unity3D</h5>
                 
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      {/*<img className="background-image-left" src={colorSharp} />*/}
    </section>
  );
};
