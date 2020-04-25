import React, { Component } from "react";
import Helmet from "react-helmet";
import { Route } from "react-router-dom";
import { throttle } from "lodash";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import galleryService from "../../services/galleryService";
import ImageMap from "./../../components/image-map/image-map";
import TitleBar from "./../../components/common/title-bar";
// import styles from "./explore.module.css";
import SideBar from "./sideBar";
import SideBarList from "./sideBarList";
import SideBarDetail from "./sideBarDetail";

const defaultZoom = [0];
const defaultCenter = [-60.4915, -25.7832];

const mapStyles = {
  position: "relative",
  left: 0,
  right: 0,
  bottom: 500,
  top: 0,
  height: "90vh",
};

class Explore extends Component {
  state = {
    center: defaultCenter,
    zoom: defaultZoom,
    images: [],
    filteredImages: [],
    hoveredItem: "",
    bounds: [],
    hoveredAnchor: "top",
  };

  async componentDidMount() {
    const { location } = this.props;

    if (location.pathname.includes("detail")) {
      const code = location.pathname.replace("/explore/detail/", "");
      const image = galleryService.getImage(code);

      if (image) {
        this.setState({
          center: [image.longitude, image.latitude],
          zoom: [11],
          hoveredItem: code,
        });
      }
    }

    this.props.history.listen((ev) => {
      if (!ev.pathname.includes("detail")) {
        this.setState({
          zoom: defaultZoom,
          hoveredItem: "",
        });
      }
    });
  }

  mapInit = async (map) => {
    const bounds = map.getBounds();
    const boundsArr = [bounds.getSouth(), bounds.getWest(), bounds.getNorth(), bounds.getEast()];
    const images = galleryService.getAll();

    this.setState({ images });
    this.setImagesAndBounds(boundsArr);
  };

  setImagesAndBounds = (bounds) => {
    const { images } = this.state;
    const filteredImages = Object.keys(images).filter((k) => {
      const lat = images[k].latitude;
      const long = images[k].longitude;
      return lat > bounds[0] && long > bounds[1] && lat < bounds[2] && long < bounds[3];
    });

    const newState = { ...this.state, filteredImages, bounds };
    this.setState(newState);
  };

  BoundsChanged = throttle(
    (map) => {
      const bounds = map.getBounds();
      const limitedBounds = map.unproject([60, 60]);
      const hDiff = Math.abs(bounds.getNorth() - limitedBounds.lat);
      const vDiff = Math.abs(bounds.getWest() - limitedBounds.lng);
      const boundsArr = [bounds.getSouth() + hDiff, limitedBounds.lng, limitedBounds.lat, bounds.getEast() - vDiff];
      this.setImagesAndBounds(boundsArr);
    },
    500,
    { leading: true }
  );

  onMouseEnter = (key) => {
    this.setState({ hoveredItem: key });
  };

  onMouseLeave = () => {
    this.setState({ hoveredItem: "" });
  };

  onClick = (id) => {
    const selectedImage = this.state.images.filter((image) => image.code === id)[0];
    this.setState({
      center: [selectedImage.longitude, selectedImage.latitude],
      zoom: [11],
    });

    setTimeout(() => {
      this.props.history.replace(`/explore/detail/${selectedImage.code}`);
    }, 500);
  };

  render() {
    const { zoom, center, hoveredItem, images, filteredImages } = this.state;
    return (
      <div className="row">
        <Helmet>
          <title>Explore</title>
        </Helmet>
        <TitleBar title="Explore">
          <Breadcrumb.Item active>Explore</Breadcrumb.Item>
        </TitleBar>

        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4">
              <SideBar>
                <Route
                  exact
                  path={this.props.match.url}
                  render={(props) => (
                    <SideBarList
                      onMouseEnter={this.onMouseEnter}
                      onMouseLeave={this.onMouseLeave}
                      filteredImages={filteredImages}
                      images={images}
                      onSelectItem={this.onClick}
                    />
                  )}
                />
                <Route path={`${this.props.match.url}/detail/:id`} render={(props) => <SideBarDetail images={images} {...props} />} />
              </SideBar>
            </div>
            <div className="col-md-8">
              <ImageMap
                // eslint-disable-next-line
                style="mapbox://styles/martintech/cjnsxub0l3ce32rl8dytbhmpu"
                zoom={zoom}
                center={center}
                hoveredItem={hoveredItem}
                onMouseEnter={this.onMouseEnter}
                onMouseLeave={this.onMouseLeave}
                images={images}
                BoundsChanged={this.BoundsChanged}
                mapInit={this.mapInit}
                onClick={this.onClick}
                containerStyle={mapStyles}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Explore;
