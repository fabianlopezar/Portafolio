import { Col } from "react-bootstrap";
import "../Estilos/Projects.css"
export const ProjectCard = ({ title, description, imgUrl, url }) => {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} className="imagen" />
        <div className="proj-txtx">
          <a href={url?url:null} target="_blank">
            <h4>{title}</h4>
          </a>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};
