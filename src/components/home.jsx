import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Image } from "react-bootstrap";
import ShadowImage from "./common/shadow-image";

const Home = () => {
  const prefix = "https://res.cloudinary.com/dtgitfbtp/image/upload/q_auto,f_auto,g_custom,c_fill,w_600,h_432,dpr_2.0/";

  return (
    <React.Fragment>
      <Row>
        <Image
          className="img-fluid"
          src="https://res.cloudinary.com/dtgitfbtp/image/upload/q_auto,f_auto,g_custom,c_fill,w_1920,h_700,dpr_2.0/Raggie"
        />
      </Row>
      <Row>
        <Col lg={3}>
          <Link to="/underwater" title="Underwater">
            <ShadowImage src={`${prefix}/Humpback-Portrait`} />
          </Link>
        </Col>
        <Col lg={3}>
          <Link to="/pumas" title="Pumas">
            <ShadowImage src={`${prefix}/Puma-Approaching`} />
          </Link>
        </Col>
        <Col lg={3}>
          <Link to="/aerial" title="Aerial">
            <ShadowImage src={`${prefix}/Darwins-Arch-Galapagos`} />
          </Link>
        </Col>
        <Col lg={3}>
          <Link to="/landscape" title="Landscape">
            <ShadowImage src={`${prefix}/Mirador-Las-Torres`} />
          </Link>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Home;
