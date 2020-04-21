import React from "react";
import { Container, Col, Breadcrumb } from "react-bootstrap/";

const TitleBar = ({ title, children }) => {
  return (
    title && (
      <Container fluid className="titleBar py-3 mb-4 text-light">
        <Container className="d-flex align-self-center">
          <Col>
            <h1>{title}</h1>
          </Col>
          <Col>
            <Breadcrumb>
              <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
              {children}
            </Breadcrumb>
          </Col>
        </Container>
      </Container>
    )
  );
};

export default TitleBar;
