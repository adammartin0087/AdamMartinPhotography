import React, { useEffect } from "react";
import Helmet from "react-helmet";
import { Row, Container, Col } from "react-bootstrap";
import galleryService from "../../services/galleryService";
import ShadowImage from "../../components/common/shadow-image";

const About = (props) => {
  useEffect(() => {
    props.setTitle("About");
  });

  return (
    <Row>
      <Helmet>
        <title>About</title>
      </Helmet>
      <Container>
        <Row>
          <Col md={4}>
            <ShadowImage className="mb-5" src={galleryService.getImageUrl("Adam", 400, 400)} alt="Adam Martin" />
          </Col>
          <Col md={8}>
            <h2>Adam T. Martin</h2>
            <p>
              Adam is a freelance software developer and underwater photographer born in Los Angeles, California. He grew up in the waves, and in his
              late 20s, after going to school for a Masters Degree in Computer Science, that love for the ocean developed into a love for diving and
              underwater photography. His favorite subjects are wildlife and wild places, trying to capture inspiring images, often in challenging
              conditions. Using ultra wide-angle photography, Adam captures dramatic scenes to try and convey the story and sense of adventure behind
              each image.
            </p>
          </Col>
        </Row>
      </Container>
    </Row>
  );
};

export default About;
