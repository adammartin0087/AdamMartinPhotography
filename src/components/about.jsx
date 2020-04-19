import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import ShadowImage from "./common/shadow-image";

const About = () => {
  return (
    <Row>
      <Container>
        <Row>
          <Col md={4}>
            <ShadowImage
              src="https://res.cloudinary.com/dtgitfbtp/image/upload/q_auto,f_auto,g_custom,c_fill,w_400,h_400,dpr_2.0/adam"
              alt="Adam Martin"
            />
          </Col>
          <Col md={8}>
            <h4 className="h5">Adam T. Martin</h4>
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
