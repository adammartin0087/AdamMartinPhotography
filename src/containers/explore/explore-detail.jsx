import React, { Component } from "react";
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
        <React.Fragment>
          <div className="explore-detail">
            <div>
              <div className="explore-image">
                <div className="col-10 col-md-12">{image.imageUrl && <ShadowImage src={image.imageUrl} width="520" alt={image.name} />}</div>
              </div>
              <div className="monumentDetails">
                <h1 className="title">{image.name}</h1>
                <div className="description">
                  <Icon icon="map-marker" style={{ width: 14 }} className="mr-2" /> {image.location}
                </div>
              </div>
            </div>
          </div>
          <div className="explore-buttons">
            <div className="navbutton" onClick={() => this.onCycleImage(image.code, -1)}>
              <Icon icon="arrow-left" className="mr-2" />
              Previous
            </div>
            <div className="navbutton" onClick={() => this.onCycleImage(image.code, 1)}>
              Next
              <Icon icon="arrow-right" className="ml-2" />
            </div>
            <div className="navbutton" style={{ flexGrow: 1 }} onClick={this.onGoBack}>
              <small>EXIT</small>
            </div>
          </div>
        </React.Fragment>
      )
    );
  }
}

export default ExploreDetail;
