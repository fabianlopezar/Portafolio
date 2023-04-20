import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../img/header-img.svg";
import personaje from "../img/personaje.png";

import "../Estilos/Banner.css";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Web Developer", "Game Developer"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="home">
  
      <Container>
     
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">¡Bienvenido a mi Portfolio!</span>
            <h1>
              {`Hola soy Fabian López `}
            </h1>
            <h2 className="wrap">{text}</h2>
            <p>
              Me apasiona el desarrollo de software y me esfuerzo por estar
              siempre actualizado con las últimas tendencias y tecnologías en el
              campo. Me gusta trabajar en equipo y colaborar con otros
              desarrolladores para lograr un producto final sólido y funcional.
            </p>

            <a
              href="https://www.linkedin.com/in/fabian-lopez-b4933a216/"
              target="_blank"
            >
              <h2 className="borde-banner">

                Linkedin <ArrowRightCircle size={25} />
              </h2>
            </a>
            <a href="https://github.com/fabianlopezar" target="_blank">
              <h2 className="borde-banner">
                GitHub <ArrowRightCircle size={25} />
              </h2>
            </a>
            <a 
              href="https://www.youtube.com/channel/UCH9-MdRsuL16VmachYoS4og"
              target="_blank"
            >
              <h2 className="borde-banner">
                Youtube <ArrowRightCircle size={25} />{" "}
              </h2>
            </a>
            <h4 className="borde-banner">fabianlopez928@gmail.com</h4>
           
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={personaje} alt="Header Img" className="imagen-banner" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
