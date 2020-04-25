import * as React from "react";
import { Popup } from "react-mapbox-gl";
import ShadowImage from "./../common/shadow-image";
import { getImageUrl } from "./../../services/galleryService";
import styles from "./popup.module.css";

const offset = [0, -15];

const MapPopup = ({ image }) => (
  <div>
    <Popup coordinates={[image.longitude, image.latitude]} anchor="bottom" offset={offset}>
      <div className={styles.container}>
        <ShadowImage className={styles.image} src={getImageUrl(image.imageUrl, 240, 160)} alt={image.name} />
        <div className={styles.footer}>
          <h2 style={{ fontSize: 15 }}>{image.name}</h2>
          <span className={styles.sub}>{image.location}</span>
        </div>
      </div>
    </Popup>
  </div>
);

export default MapPopup;
