import React from "react";
import Helmet from "react-helmet";
import Alert from "react-bootstrap/Alert";

const NotFound = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Page Not Found</title>
      </Helmet>
      <Alert variant="danger w-100">Page not found.</Alert>;
    </React.Fragment>
  );
};

export default NotFound;
