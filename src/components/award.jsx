import React from "react";
import Parser from "html-react-parser";

const Award = ({ award }) => {
  return (
    <figure className="row g-mb-30">
      <div className="col-md-8 col-lg-4 g-mb-30">
        <div className="text-center u-block-hover u-shadow-v1-5 g-line-height-2 g-pa-15">
          <a href={`${award.url}`} target="_blank" rel="noopener noreferrer" title={`${award.position} - ${award.name}`}>
            <img className="img-fluid" src={award.imageUrl} alt={`${award.position} - ${award.name}`} />
          </a>
        </div>
      </div>
      <div className="col-lg-8">
        <div className="d-flex justify-content-between">
          <div>
            <h4 className="h5 g-mb-5">
              <a href={`${award.url}`} target="_blank" rel="noopener noreferrer">
                {award.name}
              </a>
            </h4>
            <em className="d-block g-font-style-normal g-font-size-12 text-uppercase g-color-primary">
              <span className="fa fa-trophy" />
              {award.position}
            </em>
            <br />
          </div>
          <div>
            <span className="fa fa-map-marker mr-1" /> {award.location}
          </div>
        </div>
        <p>
          <b>The Story:</b>
          {Parser(award.story)}
        </p>
      </div>
    </figure>
  );
};

export default Award;
