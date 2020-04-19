import React from "react";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";
import ShadowImage from "./common/shadow-image";

const GalleryImage = ({ image }) => {
  return (
    <Col md={3} className="text-center">
      <Link className="d-block" to={`/${image.category}/${image.code}/`}>
        <ShadowImage
          src={"https://res.cloudinary.com/dtgitfbtp/image/upload/q_auto,f_auto,g_custom,c_fill,w_400,h_270,dpr_2.0/" + image.imageUrl}
          alt={image.name}
        />
      </Link>
    </Col>
  );
};

export default GalleryImage;
