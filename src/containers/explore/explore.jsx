import React, { Component } from "react";
import Helmet from "react-helmet";
import { Route } from "react-router-dom";
import { throttle } from "lodash";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import galleryService from "../../services/galleryService";
import ImageMap from "./../../components/image-map/image-map";
import TitleBar from "./../../components/common/title-bar";
import ExploreList from "./explore-list";
import ExploreDetail from "./explore-detail";

const defaultZoom = [0];
const defaultPitch = [0];
const defaultBearing = [0];
const defaultSpeed = [0.6];
const defaultCenter = [-60.4915, -25.7832];

const mapStyles = {
  position: "relative",
  left: 0,
  right: 0,
  bottom: 500,
  top: 0,
  height: "30vh",
};

class Explore extends Component {
  state = {
    center: defaultCenter,
    zoom: defaultZoom,
    pitch: defaultPitch,
    speed: defaultSpeed,
    bearing: defaultBearing,
    images: [],
    filteredImages: [],
    selectedImage: null,
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
          selectedImage: image,
          pitch: [45.0],
          bearing: [60.0],
        });
      }
    }

    this.props.history.listen((ev) => {
      if (!ev.pathname.includes("detail")) {
        this.setState({
          zoom: defaultZoom,
          hoveredItem: "",
          selectedImage: null,
          pitch: defaultPitch,
          bearing: defaultBearing,
          speed: defaultSpeed,
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

    this.setState({ ...this.state, filteredImages, bounds });
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

  onCycle = (image, direction) => {
    const currentIndex = this.state.images.findIndex((x) => x.code === image);
    const nextIndex = (currentIndex + direction) % this.state.images.length;
    const newImage = this.state.images[nextIndex];

    this.setState({
      center: [newImage.longitude, newImage.latitude],
      zoom: [11],
      hoveredItem: "",
      selectedImage: newImage,
      pitch: [this.randomInt(20, 45)],
      bearing: [this.randomInt(-40, 40)],
    });

    setTimeout(() => {
      this.props.history.replace(`/explore/detail/${newImage.code}`);
    }, 500);
  };

  onClick = (id) => {
    const selectedImage = this.state.images.filter((image) => image.code === id)[0];
    this.setState({
      center: [selectedImage.longitude, selectedImage.latitude],
      zoom: [11],
      selectedImage: selectedImage,
      pitch: [this.randomInt(40, 60)],
      bearing: [this.randomInt(0, 60)],
    });

    setTimeout(() => {
      this.props.history.replace(`/explore/detail/${selectedImage.code}`);
    }, 500);
  };

  randomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  render() {
    const { zoom, center, pitch, speed, bearing, hoveredItem, selectedImage, images, filteredImages } = this.state;
    const listImages = filteredImages.map((k) => images[k]);
    return (
      <div className="row">
        <Helmet>
          <title>Explore</title>
        </Helmet>
        {/* <TitleBar title="Explore" bottomMargin={0}>
          <Breadcrumb.Item active>Explore</Breadcrumb.Item>
        </TitleBar> */}

        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8 p-0">
              <ImageMap
                // eslint-disable-next-line
                style="mapbox://styles/martintech/cjnsxub0l3ce32rl8dytbhmpu"
                zoom={zoom}
                center={center}
                pitch={pitch}
                speed={speed}
                bearing={bearing}
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

            <div className="col-md-4 p-0 float-left">
              <Route
                exact
                path={this.props.match.url}
                render={(props) => (
                  <ExploreList onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} images={listImages} onSelectItem={this.onClick} />
                )}
              />
              <Route
                path={`${this.props.match.url}/detail/:id`}
                render={(props) => <ExploreDetail onCycleItem={this.onCycle} image={selectedImage} {...props} />}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Explore;
