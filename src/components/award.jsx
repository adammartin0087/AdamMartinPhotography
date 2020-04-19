import React from "react";
import Parser from "html-react-parser";
// import { LazyImage } from "react-lazy-images";
import { Col, Row } from "react-bootstrap";
import ShadowImage from "./common/shadow-image";
import Icon from "./common/icon";

const Award = ({ award }) => {
  return (
    <Row>
      <Col md={8} lg={4}>
        <div className="text-center">
          <a href={`${award.url}`} target="_blank" rel="noopener noreferrer" title={`${award.position} - ${award.name}`}>
            <ShadowImage
              src={"https://res.cloudinary.com/dtgitfbtp/image/upload/q_auto,f_auto,g_custom,c_fill,w_350,dpr_2.0/" + award.imageUrl}
              alt={award.title}
              title={award.title}
            />
          </a>
        </div>
      </Col>

      <Col lg={8} className="mb-5">
        <div className="d-flex justify-content-between">
          <div>
            <h2>
              <a href={`${award.url}`} target="_blank" rel="noopener noreferrer">
                {award.name}
              </a>{" "}
              <br />
              <small className="text-uppercase">
                <Icon icon="trophy" className="mr-2" />
                {award.position}
              </small>
            </h2>

            <br />
          </div>
          <div>
            <Icon icon="map-marker" className="mr-2" /> {award.location}
          </div>
        </div>
        <p>
          <strong>The Story: </strong>
          {Parser(award.story)}
        </p>
      </Col>
    </Row>
  );
};

export default Award;

/* 
            <LazyImage
              alt={award.title}
              placeholder={({ imageProps, ref }) => (
                <img
                  ref={ref}
                  src={
                    "https://res.cloudinary.com/dtgitfbtp/image/upload/q_auto,f_auto,g_custom,c_fill,w_20,h_8,dpr_2.0/w_319,h_213/" + award.imageUrl
                  }
                  alt={award.title}
                  title={award.title}
                  className="img-fluid"
                />
              )}
              actual={() => (
                <img
                  className="img-fluid"
                  src={"https://res.cloudinary.com/dtgitfbtp/image/upload/q_auto,f_auto,g_custom,c_fill,w_350,dpr_2.0/" + award.imageUrl}
                  alt={award.title}
                  title={award.title}
                />
              )}
            /> */
