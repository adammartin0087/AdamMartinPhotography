import React from "react";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";
import ShadowImage from "./common/shadow-image";
import galleryService from "../services/galleryService";

const GalleryImage = ({ image }) => {
  return (
    <Col md={3} xl={2} className="text-center">
      <Link className="d-block" to={`/${image.category}/${image.code}/`}>
        <ShadowImage src={galleryService.getImageUrl(image.imageUrl, 400, 270)} alt={image.name} />
      </Link>
    </Col>
  );
};

export default GalleryImage;
