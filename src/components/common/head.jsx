import React from "react";
import Helmet from "react-helmet";
import { getImageUrl } from "../../services/galleryService";

const Head = (props) => {
  const { title, description, image, children, location } = props;
  const imageUrl = image ? getImageUrl(image, 1200, 630) : null;
  const twitterImage = image ? getImageUrl(image, 600, 600) : null;
  const url = location && `https://www.adammartinphotography.com${location.pathname}`;

  return (
    <Helmet>
      <title>{title}</title>
      {description && <meta name="Description" content={description} />}

      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      {url && <meta property="og:url" content={url} />}
      {url && <link rel="canonical" href={url} />}
      {image && <meta property="og:image" content={imageUrl} />}
      {image && <meta property="og:image:width" content="1200" />}
      {image && <meta property="og:image:height" content="630" />}
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary" />
      {title && <meta name="twitter:title" content={title} />}
      {description && <meta name="twitter:description" content={description} />}
      {twitterImage && <meta name="twitter:image" content={twitterImage} />}

      {image && <link rel="image_src" href={imageUrl} />}
      {children}
    </Helmet>
  );
};

export default Head;
