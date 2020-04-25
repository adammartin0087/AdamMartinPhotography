import React from "react";

const ShadowImage = ({ src, alt }) => {
  return <img className="img-fluid shadow p-3 bg-white rounded" src={src} alt={alt} />;
  // return <img className="img-fluid shadow p-3 mb-3 bg-white rounded" src={src} alt={alt} />;
};

export default ShadowImage;
