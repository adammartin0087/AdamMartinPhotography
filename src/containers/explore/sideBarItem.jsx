import React from "react";
import { getImageUrl } from "./../../services/galleryService";
import styles from "./sideBarItem.module.css";

const SideBarItem = ({ image, onMouseEnter, onMouseLeave, onClick }) => (
  <div className={styles.container} onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
    <div className={styles.description}>
      <h1>{image.name}</h1>
      <div className={styles.second}>
        <span className={styles.state}>{image.location}</span>
      </div>
    </div>
    <div className={styles.image}>
      <img src={getImageUrl(image.imageUrl, 90, 60)} alt={image.name} />
    </div>
  </div>
);

export default SideBarItem;
