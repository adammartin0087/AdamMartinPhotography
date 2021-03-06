import React from "react";
import Parser from "html-react-parser";
import ShadowImage from "./common/shadow-image";
import Icon from "./common/icon";

const Award = ({ award }) => {
  return (
    <div className="row">
      <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
        <div className="text-center">
          <a href={`${award.Url}`} target="_blank" rel="noopener noreferrer" title={`${award.Position} - ${award.Name}`}>
            <ShadowImage src={award.ImageUrl} alt={award.Title} title={award.Title} />
          </a>
        </div>
      </div>

      <div className="col-sm-12 col-md-6 col-lg-8 mb-4">
        <h2>
          <a href={`${award.Url}`} target="_blank" rel="noopener noreferrer">
            {award.Name}
          </a>
        </h2>
        <div className="row text-uppercase small">
          <div className="col-xs-6 col-md-12 col-lg-4">
            <Icon icon="trophy" style={{ width: 14 }} className="mr-2" />
            {award.Position}
          </div>

          <div className="col-xs-6 col-md-12 col-lg-4">
            <Icon icon="map-marker" style={{ width: 14 }} className="mr-2" />
            {award.Location}
          </div>
        </div>

        <p className="mt-2">
          <strong>The Story: </strong>
          {Parser(award.Story)}
        </p>
      </div>
    </div>
  );
};

export default Award;
