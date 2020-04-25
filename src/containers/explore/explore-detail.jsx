import React, { Component } from "react";
import { getImageUrl } from "../../services/galleryService";
import ShadowImage from "../../components/common/shadow-image";
import Icon from "../../components/common/icon";

class ExploreDetail extends Component {
  state = {
    isFullscreen: false,
  };

  onGoBack = () => {
    this.props.history.push("/explore");
  };

  onCycleImage = (code, dir) => {
    this.props.onCycleItem(code, dir);
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
    const { image } = this.props;

    return (
      image && (
        <div className="explore-detail">
          <div className="col-9 col-md-12 text-center">
            {image.imageUrl && <ShadowImage src={getImageUrl(image.imageUrl, 520, 300)} alt={image.name} />}
          </div>

          <div className="monumentDetails">
            <h1 className="title">{image.name}</h1>
            <div className="leading">{image.category}</div>
            <div className="description">
              <Icon icon="map-marker" style={{ width: 14 }} className="mr-2" /> {image.location}
            </div>
          </div>

          <div className="buttons">
            <div className="navbutton" onClick={() => this.onCycleImage(image.code, -1)}>
              <Icon icon="arrow-left" className="mr-2" />
              Previous
            </div>
            <div className="navbutton" onClick={() => this.onCycleImage(image.code, 1)}>
              Next
              <Icon icon="arrow-right" className="ml-2" />
            </div>
            <div className="navbutton" style={{ flexGrow: 1 }} onClick={this.onGoBack}>
              <Icon icon="window-close" />
            </div>
          </div>
        </div>
      )
    );
  }
}

export default ExploreDetail;
