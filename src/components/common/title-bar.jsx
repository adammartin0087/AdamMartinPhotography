import React from "react";
import { Row, Container, Col } from "react-bootstrap/";

const TitleBar = ({ title }) => {
  return (
    title && (
      <Container fluid className="titleBar py-3 mb-4 text-light">
        <Container>
          <Col>
            <h1>{title}</h1>
          </Col>
        </Container>

        {/* @RenderSection("BreadCrumb", false) */}
      </Container>
    )
  );
};

export default TitleBar;
