import React, { Component } from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import ShadowImage from "./common/shadow-image";
import Icon from "./common/icon";
import TitleBar from "./common/title-bar";
import Head from "./common/head";

class GalleryDetail extends Component {
  state = {
    image: null,
  };

  componentDidMount() {
    const { match, images } = this.props;
    const { id } = match.params;
    const image = images.filter(img => img.Code.toLowerCase() === id.toLowerCase())[0];
    this.setState({ image });
  }

  render() {
    const { image } = this.state;
    return (
      image && (
        <div className="row">
          <Head title={image.Name} image={image.ImageUrl} location={this.props.location} />
          <TitleBar title={image.Name}>
            <Breadcrumb.Item href={`/${image.Category.toLowerCase()}`}>{image.Category}</Breadcrumb.Item>
            <Breadcrumb.Item active>Details</Breadcrumb.Item>
          </TitleBar>
          <div className="container text-center">
            <ShadowImage src={image.ImageUrl} alt={image.Name} />
            <div className="row py-3">
              <div className="col-md-12 col-lg-4 mb-2">
                <strong>Location:</strong>
                <Icon icon="map-marker" className="ml-3" /> {image.Location}
              </div>

              <div className="col-md-12 col-lg-4 mb-2">
                <strong>Camera:</strong>
                <Icon icon="camera" className="ml-3" /> {image.Camera}
              </div>

              <div className="col-md-12 col-lg-4 mb-2">
                <strong>Tags:</strong>
                {image.Tags && (
                  <ul className="d-inline">
                    {image.Tags.map((tag) => (
                      <li className="list-inline-item" key={tag}>
                        <span className="badge">{tag}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      )
    );
  }
}

export default GalleryDetail;
