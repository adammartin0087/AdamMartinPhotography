import React, { Component } from "react";
import Helmet from "react-helmet";
import { Badge, Row, Col, Container } from "react-bootstrap";
import galleryService from "../services/galleryService";
import ShadowImage from "./common/shadow-image";
import Icon from "./common/icon";

class GalleryDetail extends Component {
  state = {
    image: null,
  };

  componentDidMount() {
    const { match } = this.props;
    const { id } = match.params;
    const image = galleryService.getImage(id);
    this.props.setTitle(image.name);
    this.setState({ image });
  }

  render() {
    const { image } = this.state;
    return (
      image && (
        <Container>
          <Helmet>
            <title>{image.name}</title>
          </Helmet>
          <ShadowImage src={galleryService.getImageUrl(image.code, 800, 500)} alt={image.name} />
          <Row className="pb-3">
            <Col md={4}>
              <h3 className="mb-3">Location:</h3>
              <Icon icon="map-marker" className="ml-3" /> {image.location}
            </Col>

            <Col md={4}>
              <h3 className="mb-3">Camera:</h3>
              <Icon icon="camera" className="ml-3" /> {image.camera}
            </Col>

            <Col md={4}>
              <h3 className="mb-3">Tags:</h3>
              {image.tags && (
                <ul>
                  {image.tags.map((tag) => (
                    <li className="list-inline-item py-2 px-3" key={tag}>
                      <Badge variant="primary">{tag}</Badge>
                    </li>
                  ))}
                </ul>
              )}
            </Col>
          </Row>
        </Container>
      )
    );
  }
}

export default GalleryDetail;
