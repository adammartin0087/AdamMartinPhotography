import React, { Component } from "react";

import Breadcrumb from "react-bootstrap/Breadcrumb";
import galleryService from "../services/galleryService";
import ShadowImage from "./common/shadow-image";
import Icon from "./common/icon";
import TitleBar from "./common/title-bar";
import Head from "./common/head";

class GalleryDetail extends Component {
  state = {
    image: null,
  };

  componentDidMount() {
    const { match } = this.props;
    const { id } = match.params;
    const image = galleryService.getImage(id);
    this.setState({ image });
  }

  render() {
    const { image } = this.state;
    return (
      image && (
        <div className="row">
          <Head title={image.name} />
          <TitleBar title={image.name}>
            <Breadcrumb.Item href={`/${image.category.toLowerCase()}`}>{image.category}</Breadcrumb.Item>
            <Breadcrumb.Item active>Details</Breadcrumb.Item>
          </TitleBar>
          <div className="container text-center">
            <ShadowImage src={image.imageUrl} alt={image.name} />
            <div className="row py-3">
              <div className="col-md-12 col-lg-4 mb-2">
                <strong>Location:</strong>
                <Icon icon="map-marker" className="ml-3" /> {image.location}
              </div>

              <div className="col-md-12 col-lg-4 mb-2">
                <strong>Camera:</strong>
                <Icon icon="camera" className="ml-3" /> {image.camera}
              </div>

              <div className="col-md-12 col-lg-4 mb-2">
                <strong>Tags:</strong>
                {image.tags && (
                  <ul className="d-inline">
                    {image.tags.map((tag) => (
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
