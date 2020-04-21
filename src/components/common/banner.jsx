import React from "react";
import { getImageUrl } from "./../../services/galleryService";

const Banner = ({ title, src }) => {
  return (
    <picture>
      <source srcSet={getImageUrl(src, 300, 500)} media="(max-width: 299px)" />
      <source srcSet={getImageUrl(src, 500, 500)} media="(max-width: 499px)" />
      <source srcSet={getImageUrl(src, 700, 500)} media="(max-width: 699px)" />
      <source srcSet={getImageUrl(src, 900, 500)} media="(max-width: 899px)" />
      <source srcSet={getImageUrl(src, 1100, 500)} media="(max-width: 1099px)" />
      <source srcSet={getImageUrl(src, 1300, 600)} media="(max-width: 1299px)" />
      <source srcSet={getImageUrl(src, 1500, 600)} media="(max-width: 1499px)" />
      <source srcSet={getImageUrl(src, 1700, 800)} media="(max-width: 1699px)" />
      <source srcSet={getImageUrl(src, 1900, 800)} media="(max-width: 1899px)" />
      <source srcSet={getImageUrl(src, 2100, 800)} media="(max-width: 2099px)" />
      <source srcSet={getImageUrl(src, 2300, 800)} media="(max-width: 2299px)" />
      <source srcSet={getImageUrl(src, 2560, 800, "crop", src)} media="(min-width: 2499px)" />
      <img className="img-fluid" src={getImageUrl(src, 30, 50)} alt={title} title={title} />
    </picture>
  );
};

export default Banner;
