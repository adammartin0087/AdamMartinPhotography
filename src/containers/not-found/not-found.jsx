import React from "react";
import Helmet from "react-helmet";

const NotFound = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Page Not Found</title>
      </Helmet>
      <div className="alert alert-danger w-100">Page not found.</div>
    </React.Fragment>
  );
};

export default NotFound;
