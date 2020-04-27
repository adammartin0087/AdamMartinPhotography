import * as React from "react";
import { Popup } from "react-mapbox-gl";
import ShadowImage from "./../common/shadow-image";

const offset = [0, -15];

const MapPopup = ({ image }) => (
  <div>
    <Popup coordinates={[image.longitude, image.latitude]} anchor="bottom" offset={offset}>
      <div className="text-center">
        <ShadowImage src={image.imageUrl} alt={image.name} width="240" />
        <div className="map-caption">
          <h2>{image.name}</h2>
          <span>{image.location}</span>
        </div>
      </div>
    </Popup>
  </div>
);

export default MapPopup;
