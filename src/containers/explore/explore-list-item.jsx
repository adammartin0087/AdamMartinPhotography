import React from "react";
import { getImageUrl } from "../../services/galleryService";

const ExploreListItem = ({ image, onMouseEnter, onMouseLeave, onClick }) => (
  <div className="explore-list-item" onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
    <div className="description">
      <h2>{image.name}</h2>
      <div className="second">
        <span className="state">{image.location}</span>
      </div>
    </div>
    <div className="image">
      <img src={getImageUrl(image.imageUrl, 100, 67)} alt={image.name} className="rounded" />
    </div>
  </div>
);

export default ExploreListItem;