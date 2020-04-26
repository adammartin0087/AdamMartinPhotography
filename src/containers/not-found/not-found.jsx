import React from "react";
import Head from "../../components/common/head";

const NotFound = () => {
  return (
    <React.Fragment>
      <Head title="Page Not Found" />
      <div className="alert alert-danger w-100">Page not found.</div>
    </React.Fragment>
  );
};

export default NotFound;
