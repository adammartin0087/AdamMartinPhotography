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

  async componentDidMount() {
    const { pathname: url } = this.props.location;
    const segments = url.split("/").filter((x) => x !== "");
    const category = galleryService.getCategory(segments[0]);
    const images = this.props.images.filter(img => img.Category.toLowerCase() === category.toLowerCase());
    this.setState({ category, images });
  }

  async componentDidUpdate() {
    const { pathname: url } = this.props.location;
    const segments = url.split("/").filter((x) => x !== "");
    const category = galleryService.getCategory(segments[0]);
    if (this.state.category === category) return;
    const images = this.props.images.filter(img => img.Category.toLowerCase() === category.toLowerCase());
    this.setState({ category, images });
  }

  render() {
    return (
      <div className="row">
        <Head title={this.state.category} image={this.state.images.length > 0 ? this.state.images[0].Code : null} location={this.props.location} />
        <TitleBar title={this.state.category}>
          <Breadcrumb.Item active>{this.state.category}</Breadcrumb.Item>
        </TitleBar>

        {this.state.images && this.state.images.map((image) => <GalleryImage category={image.Category} key={image.Code} image={image} />)}
      </div>
    );
  }
}

export default GalleryGrid;
