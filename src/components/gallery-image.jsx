import React from "react";
import { Link } from "react-router-dom";
import galleryService from "../services/galleryService";
import ShadowImage from "./common/shadow-image";

const GalleryImage = ({ image }) => {
  return (
    <div className="col-md-4 col-lg-3 text-center">
      <Link className="d-block" to={`/${image.category}/${image.code}/`}>
        <ShadowImage src={galleryService.getImageUrl(image.imageUrl, 400, 270)} alt={image.name} />
      </Link>
    </div>
  );
};

export default GalleryImage;
