import * as React from "react";
import { Popup } from "react-mapbox-gl";
import ShadowImage from "./../common/shadow-image";

const offset = [0, -15];

const MapPopup = ({ image }) => (
  <div>
    <Popup coordinates={[image.Longitude, image.Latitude]} anchor="bottom" offset={offset}>
      <div className="text-center">
        <ShadowImage src={image.ImageUrl} alt={image.Name} width="240" />
        <div className="map-caption">
          <h2>{image.Name}</h2>
          <span>{image.Location}</span>
        </div>
      </div>
    </Popup>
  </div>
);

export default MapPopup;
