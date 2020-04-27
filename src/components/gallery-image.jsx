import React from "react";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazyload";
import ShadowImage from "./common/shadow-image";

const GalleryImage = ({ image }) => {
  return (
    <div className="col-sm-6 col-md-4 col-lg-3 mb-3 text-center">
      <Link className="d-block" to={`/${image.category}/${image.code}/`}>
        <LazyLoad height="400" placeholder={<ShadowImage src={image.imageUrl} alt={image.name} width={600} innerWidth={30} />}>
          <ShadowImage src={image.imageUrl} alt={image.name} width={600} />
        </LazyLoad>
      </Link>
    </div>
  );
};

export default GalleryImage;
