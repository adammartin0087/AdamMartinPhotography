import React from "react";
import Image from "react-bootstrap/Image";

const ShadowImage = ({ src, alt }) => {
  return <Image className="img-fluid shadow-sm p-3 mb-5 bg-white rounded" src={src} alt={alt} />;
};

export default ShadowImage;
