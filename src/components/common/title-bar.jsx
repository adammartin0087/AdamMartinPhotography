import React from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
const TitleBar = ({ title, children, bottomMargin }) => {
  const margin = bottomMargin >= 0 ? bottomMargin : 4;
  return (
    title && (
      <div className={`container-fluid titleBar py-3 mb-${margin} text-light`}>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6">
              <h1>{title}</h1>
            </div>
            <div className="col-xs-12 col-md-6">
              <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                {children}
              </Breadcrumb>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default TitleBar;
