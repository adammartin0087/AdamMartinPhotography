import React, { Component } from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import galleryService from "../services/galleryService";
import GalleryImage from "./gallery-image";
import TitleBar from "./common/title-bar";
import Head from "./common/head";

class GalleryGrid extends Component {
  state = {
    category: "",
    images: [],
  };

  componentDidMount() {
    const { pathname: url } = this.props.location;
    const segments = url.split("/").filter((x) => x !== "");
    const category = galleryService.getCategory(segments[0]);
    const images = galleryService.getImages(category);
    this.setState({ category, images });
  }

  async componentDidUpdate() {
    const { pathname: url } = this.props.location;
    const segments = url.split("/").filter((x) => x !== "");
    const category = galleryService.getCategory(segments[0]);
    if (this.state.category === category) return;
    const images = galleryService.getImages(category);
    this.setState({ category, images });
  }

  render() {
    return (
      <div className="row">
        <Head title={this.state.category} image={this.state.images.length > 0 ? this.state.images[0].code : null} />
        <TitleBar title={this.state.category}>
          <Breadcrumb.Item active>{this.state.category}</Breadcrumb.Item>
        </TitleBar>

        {this.state.images && this.state.images.map((image) => <GalleryImage category={image.category} key={image.code} image={image} />)}
      </div>
    );
  }
}

export default GalleryGrid;
