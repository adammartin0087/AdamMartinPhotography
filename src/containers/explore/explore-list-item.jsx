import React from "react";
import { Image, Transformation } from "cloudinary-react";

const ExploreListItem = ({ image, onMouseEnter, onMouseLeave, onClick }) => (
  <div className="explore-list-item" onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
    <div className="description">
      <h2>{image.Name}</h2>
      <div className="second">
        <span className="state">{image.Location}</span>
      </div>
    </div>
    <div className="image">
      <Image cloudName="dtgitfbtp" className="rounded" publicId={image.ImageUrl} alt={image.Name}>
        <Transformation aspectRatio="3:2" crop="fill" />
        <Transformation width="100" dpr="auto" crop="scale" />
        <Transformation quality="auto" fetchFormat="auto" gravity="custom" />
      </Image>
    </div>
  </div>
);

export default ExploreListItem;
