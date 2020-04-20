import React, { Component } from "react";
import Helmet from "react-helmet";
import { Row } from "react-bootstrap";
import galleryService from "../services/galleryService";
import GalleryImage from "./gallery-image";

class GalleryGrid extends Component {
  state = {
    category: "",
    images: [],
  };

  componentDidMount() {
    const { pathname: url } = this.props.location;
    const segments = url.split("/").filter((x) => x !== "");
    const category = galleryService.getCategory(segments[0]);
    this.props.setTitle(category);
    const images = galleryService.getImages(category);
    this.setState({ category, images });
  }

  async componentDidUpdate() {
    const { pathname: url } = this.props.location;
    const segments = url.split("/").filter((x) => x !== "");
    const category = galleryService.getCategory(segments[0]);
    if (this.state.category === category) return;
    this.props.setTitle(category);
    const images = galleryService.getImages(category);
    this.setState({ category, images });
  }

  render() {
    return (
      <Row>
        <Helmet>
          <title>{this.state.category}</title>
        </Helmet>

        {this.state.images && this.state.images.map((image) => <GalleryImage category={image.category} key={image.name} image={image} />)}
      </Row>
    );
  }
}

export default GalleryGrid;
