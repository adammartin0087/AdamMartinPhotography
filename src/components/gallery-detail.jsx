import React, { Component } from "react";
import Helmet from "react-helmet";
import { Badge, Row, Col, Container, Breadcrumb } from "react-bootstrap";
import galleryService from "../services/galleryService";
import ShadowImage from "./common/shadow-image";
import Icon from "./common/icon";
import TitleBar from "./common/title-bar";

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
        <Row>
          <Helmet>
            <title>{image.name}</title>
          </Helmet>
          <TitleBar title={image.name}>
            <Breadcrumb.Item href={`/${image.category.toLowerCase()}`}>{image.category}</Breadcrumb.Item>
            <Breadcrumb.Item active>Details</Breadcrumb.Item>
          </TitleBar>
          <Container className="text-center">
            <ShadowImage src={galleryService.getImageUrl(image.code, 800, null)} alt={image.name} />
            <Row className="pb-3">
              <Col md={12} lg={4} className="mb-2">
                <strong>Location:</strong>
                <Icon icon="map-marker" className="ml-3" /> {image.location}
              </Col>

              <Col md={12} lg={4} className="mb-2">
                <strong>Camera:</strong>
                <Icon icon="camera" className="ml-3" /> {image.camera}
              </Col>

              <Col md={12} lg={4} className="mb-2">
                <strong>Tags:</strong>
                {image.tags && (
                  <ul className="d-inline">
                    {image.tags.map((tag) => (
                      <li className="list-inline-item" key={tag}>
                        <Badge>{tag}</Badge>
                      </li>
                    ))}
                  </ul>
                )}
              </Col>
            </Row>
          </Container>
        </Row>
      )
    );
  }
}

export default GalleryDetail;
