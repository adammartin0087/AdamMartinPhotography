import React from "react";
import Helmet from "react-helmet";

const Head = (props) => {
  const { title, description, children } = props;
  return (
    <Helmet>
      <title>{title}</title>
      {description && <meta name="Description" content={description} />}
      {children}
    </Helmet>
  );
};

export default Head;
