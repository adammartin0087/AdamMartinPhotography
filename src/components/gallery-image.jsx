import React from "react";
import { Link } from "react-router-dom";

const GalleryImage = ({ image }) => {
  return (
    <div className="col-md-3">
      <div className="text-center u-block-hover u-block-hover--scale u-shadow-v1-5 g-line-height-2 g-pa-20 g-mb-30">
        <img
          className="u-block-hover__img u-block-hover__main--blur"
          src={"https://res.cloudinary.com/dtgitfbtp/image/upload/q_auto,f_auto,g_custom,c_fill,w_400,h_270,dpr_2.0/" + image.imageUrl}
          alt={image.name}
        />
        <Link className="d-block u-block-hover__additional--blur g-bg-black-opacity-0_2 g-color-white" to={`/${image.category}/${image.code}/`}>
          <strong className="h5 d-block w-100 g-absolute-centered g-font-weight-400">{image.name}</strong>
        </Link>
      </div>
    </div>
  );
};

export default GalleryImage;
