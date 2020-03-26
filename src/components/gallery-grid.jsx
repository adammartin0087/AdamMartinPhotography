import React, { Component } from "react";
import GalleryImage from "./gallery-image";
import galleryService from "../services/galleryService";

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
    console.log(this.state.images);

    return (
      <div className="container g-py-50">
        {this.state.images && this.state.images.map(image => <GalleryImage category={image.category} key={image.name} image={image} />)}
      </div>
    );
  }
}

export default GalleryGrid;