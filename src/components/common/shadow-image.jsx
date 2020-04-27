import React from "react";
import { Image, Transformation } from "cloudinary-react";

const ShadowImage = ({ src, alt, width, aspectRatio, innerWidth }) => {
  return (
    <Image
      cloudName="dtgitfbtp"
      responsive
      responsiveUseBreakpoints="true"
      className="img-fluid shadow p-3 bg-white rounded"
      publicId={src}
      alt={alt}
      width={width}
    >
      <Transformation aspectRatio={aspectRatio || "3:2"} crop="fill" />
      <Transformation width={innerWidth || "auto"} dpr="auto" crop="scale" />
      <Transformation quality="auto" fetchFormat="auto" gravity="custom" />
    </Image>
  );
};

export default ShadowImage;
