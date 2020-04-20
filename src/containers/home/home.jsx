import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Image, Carousel } from "react-bootstrap";
import galleryService from "../../services/galleryService";
import ShadowImage from "../../components/common/shadow-image";

const Home = (props) => {
  const w = 600;
  const h = 432;

  useEffect(() => {
    props.setTitle("");
  });

  return (
    <React.Fragment>
      <Row>
        <Carousel>
          <Carousel.Item>
            <Image
              className="d-block w-100"
              src={galleryService.getImageUrl("American-Crocodile", 1920, 700)}
              alt="Raggedtooth Shark - Wild Coast, South Africa"
              title="Raggedtooth Shark - Wild Coast, South Africa"
            />
          </Carousel.Item>

          <Carousel.Item>
            <Image
              className="d-block w-100"
              src={galleryService.getImageUrl("Optimized/Crocodile-Sunset", 1920, 700)}
              alt="American Crocodile - Jardines de la Reina, Cuba"
              title="American Crocodile - Jardines de la Reina, Cuba"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src={galleryService.getImageUrl("Optimized/Moorea", 1920, 700)} alt="Third slide" title="Third slide" />
          </Carousel.Item>
        </Carousel>

        {/* <Image className="img-fluid" src={galleryService.getImageUrl("Raggie", 1920, 700)} /> */}
      </Row>
      <Row className="mt-4">
        <Col lg={3}>
          <Link to="/underwater" title="Underwater">
            <ShadowImage src={galleryService.getImageUrl("Humpback-Portrait", w, h)} />
          </Link>
        </Col>
        <Col lg={3}>
          <Link to="/pumas" title="Pumas">
            <ShadowImage src={galleryService.getImageUrl("Puma-Approaching", w, h)} />
          </Link>
        </Col>
        <Col lg={3}>
          <Link to="/aerial" title="Aerial">
            <ShadowImage src={galleryService.getImageUrl("Darwins-Arch-Galapagos", w, h)} />
          </Link>
        </Col>
        <Col lg={3}>
          <Link to="/landscape" title="Landscape">
            <ShadowImage src={galleryService.getImageUrl("Mirador-Las-Torres", w, h)} />
          </Link>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Home;
