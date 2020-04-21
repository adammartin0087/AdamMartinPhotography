import React from "react";
import { Container, Col, Row, Breadcrumb } from "react-bootstrap/";

const TitleBar = ({ title, children }) => {
  return (
    title && (
      <div className="container-fluid titleBar py-3 mb-4 text-light">
        <div className="container">
          <div class="row">
            <Col xs={12} md={6}>
              <h1>{title}</h1>
            </Col>
            <Col xs={12} md={6}>
              <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                {children}
              </Breadcrumb>
            </Col>
          </div>
        </div>
      </div>
    )
  );
};

export default TitleBar;
