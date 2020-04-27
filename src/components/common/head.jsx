import React from "react";
import Helmet from "react-helmet";
import { getImageUrl } from "../../services/galleryService";

const Head = (props) => {
  const { title, description, image, url, children } = props;
  const imageUrl = image ? getImageUrl(image, 1200, 630) : null;
  return (
    <Helmet>
      <title>{title}</title>
      {description && <meta name="Description" content={description} />}
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      {url && <meta property="og:url" content={url} />}
      {url && <meta property="og:url" content={url} />}
      {image && <meta property="og:image" content={imageUrl} />}
      {image && <meta property="og:image:width" content="1200" />}
      {image && <meta property="og:image:height" content="630" />}
      {image && <link rel="image_src" href={imageUrl} />}
      <meta property="og:type" content="website" />
      {children}
    </Helmet>
  );
};

export default Head;
