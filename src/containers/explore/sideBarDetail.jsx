import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getImageUrl } from "./../../services/galleryService";
import ShadowImage from "./../../components/common/shadow-image";
import Icon from "./../../components/common/icon";
import styles from "./sideBarDetail.module.css";
// const imageholder = require("./imageholder.png"); // tslint:disable-line

class SideBarDetail extends Component {
  state = {
    isFullscreen: false,
  };

  onGoBack = () => {
    this.props.history.push("/explore");
  };

  onFullScreen = () => {
    this.setState({
      isFullscreen: true,
    });
  };

  onDismissFullscreen = () => {
    this.setState({
      isFullscreen: false,
    });
  };

  render() {
    const { images } = this.props;
    const image = images.filter((x) => x.code === this.props.match.params.id)[0];

    if (!image) {
      return null;
    }

    return (
      <div className={styles.container}>
        <div className={styles.footer}>
          <div className={styles.allSites} onClick={this.onGoBack}>
            <div className={styles.back}>
              <svg width="12" height="17" viewBox="0 0 12 17" className={styles.back}>
                <path d="M10.071 1L3 8.071l7.071 7.071" strokeWidth="3" stroke="#394C5B" fill="none" fillRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
        <div>{image.imageUrl && <ShadowImage src={getImageUrl(image.imageUrl, 520, 300)} alt={image.name} />}</div>
        <div className={styles.monumentDetails}>
          <h1 className={styles.title}>{image.name}</h1>
          <div className={styles.leading}>{image.category}</div>
          <div className={styles.description}>
            <Icon icon="map-marker" style={{ width: 14 }} className="mr-2" /> {image.location} <br />
            <Icon icon="camera" style={{ width: 14 }} className="mr-2" /> {image.camera} <br />
            <Icon icon="calendar" style={{ width: 14 }} className="mr-2" /> {image.date} <br />
          </div>
          <br />
          <Link to={`/${image.category.toLowerCase()}/${image.code.toLowerCase()}`} className="btn btn-block btn-info">
            Read More
          </Link>
        </div>
      </div>
    );
  }
}

export default SideBarDetail;
