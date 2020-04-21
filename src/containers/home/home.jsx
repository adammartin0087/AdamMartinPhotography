import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Carousel } from "react-bootstrap";
import { getImageUrl } from "../../services/galleryService";
import ShadowImage from "../../components/common/shadow-image";
import Banner from "./../../components/common/banner";

const Home = () => {
  const w = 600;
  const h = 432;

  return (
    <React.Fragment>
      <Row>
        <h1 className="d-none">Adam Martin Photography</h1>
        <Carousel>
          <Carousel.Item>
            <Banner src="Optimized/Crocodile-Sunset" title="American Crocodile - Jardines de la Reina, Cuba" />
          </Carousel.Item>
          <Carousel.Item>
            <Banner src="Optimized/Moorea" title="Moorea, French Polynesia" />
          </Carousel.Item>
          <Carousel.Item>
            <Banner src="Optimized/Fakarava-Reef" title="Fakarava, French Polynesia" />
          </Carousel.Item>
        </Carousel>
      </Row>
      <Row className="mt-4">
        <Col lg={3} sm={6}>
          <Link to="/underwater" title="Underwater">
            <ShadowImage alt="Underwater" src={getImageUrl("Optimized/Humpbacks-Surfacing", w, h)} />
            <h2 className="tile">Underwater</h2>
          </Link>
        </Col>
        <Col lg={3} sm={6}>
          <Link to="/pumas" title="Pumas">
            <ShadowImage alt="Pumas" src={getImageUrl("Optimized/Puma-Approaching", w, h)} />
            <h2 className="tile">Pumas</h2>
          </Link>
        </Col>
        <Col lg={3} sm={6}>
          <Link to="/aerial" title="Aerial">
            <ShadowImage alt="Aerial" src={getImageUrl("Darwins_Arch_Aerial", w, h)} />
            <h2 className="tile">Aerial</h2>
          </Link>
        </Col>
        <Col lg={3} sm={6}>
          <Link to="/landscape" title="Landscape">
            <ShadowImage alt="Landscape" src={getImageUrl("Optimized/Kirkjufell-Iceland", w, h)} />
            <h2 className="tile">Landscape</h2>
          </Link>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Home;
