import React from "react";
import Parser from "html-react-parser";
import Helmet from "react-helmet";
// import { LazyImage } from "react-lazy-images";
import { Col, Row } from "react-bootstrap";
import galleryService from "../services/galleryService";
import ShadowImage from "./common/shadow-image";
import Icon from "./common/icon";

const Award = ({ award }) => {
  return (
    <Row>
      <Helmet>
        <title>Awards</title>
      </Helmet>

      <Col sm={12} md={6} lg={4} className="mb-5">
        <div className="text-center">
          <a href={`${award.url}`} target="_blank" rel="noopener noreferrer" title={`${award.position} - ${award.name}`}>
            <ShadowImage src={galleryService.getImageUrl(award.imageUrl, 350, null)} alt={award.title} title={award.title} />
          </a>
        </div>
      </Col>

      <Col sm={12} md={6} lg={8} className="mb-5">
        <h2>
          <a href={`${award.url}`} target="_blank" rel="noopener noreferrer">
            {award.name}
          </a>
        </h2>
        <Row className="text-uppercase small">
          <Col xs={6} md={12} lg={4}>
            <Icon icon="trophy" style={{ width: 14 }} className="mr-2" />
            {award.position}
          </Col>

          <Col xs={6} md={12} lg={4}>
            <Icon icon="map-marker" style={{ width: 14 }} className="mr-2" />
            {award.location}
          </Col>
        </Row>

        <p className="mt-2">
          <strong>The Story: </strong>
          {Parser(award.story)}
        </p>
      </Col>
    </Row>
  );
};

export default Award;
