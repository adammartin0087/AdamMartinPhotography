import React, { Component } from "react";
import GalleryImage from "./gallery-image";
import galleryService from "../services/galleryService";
import { Row, Container } from "react-bootstrap";

class GalleryGrid extends Component {
  state = {
    category: "",
    images: []
  };

  componentDidMount() {
    const { pathname: url } = this.props.location;
    const segments = url.split("/").filter(x => x !== "");
    const category = segments[0];
    const images = galleryService.getImages(category);
    this.setState({ category, images });
  }

  async componentDidUpdate() {
    const { pathname: url } = this.props.location;
    const segments = url.split("/").filter(x => x !== "");
    const category = segments[0];
    if (this.state.category === category) return;
    const images = galleryService.getImages(category);
    this.setState({ category, images });
  }

  render() {
    return (
      <Row>{this.state.images && this.state.images.map(image => <GalleryImage category={image.category} key={image.name} image={image} />)}</Row>
    );
  }
}

export default GalleryGrid;
