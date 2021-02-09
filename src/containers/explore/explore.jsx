import React, { Component } from "react";
import { Route } from "react-router-dom";
import { throttle } from "lodash";
import Head from "../../components/common/head";
import ImageMap from "./../../components/image-map/image-map";
import ExploreList from "./explore-list";
import ExploreDetail from "./explore-detail";

const defaultZoom = [0];
const focusZoom = [12];
const defaultPitch = [0];
const defaultBearing = [0];
const defaultSpeed = [0.6];
const defaultCenter = [-90, 30];

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

  componentDidMount() {

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
    const { location, images } = this.props;
    
    this.setState({ images });

    if (location.pathname.includes("detail")) {
      const code = location.pathname.replace("/explore/detail/", "");
      const selectedImage = images.filter(img => img.Code.toLowerCase() === code.toLowerCase())[0];
      if (selectedImage) {
        this.setState({
          selectedImage
        });
      }
    }
    
    this.setImagesAndBounds(boundsArr);

    if (this.state.selectedImage)
      this.setState({
        center: [this.state.selectedImage.Longitude, this.state.selectedImage.Latitude],
        zoom: focusZoom,
        pitch: [45.0],
        bearing: [60.0],
      });
  };

  setImagesAndBounds = (bounds) => {
    const { images } = this.state;
    const filteredImages = Object.keys(images).filter((k) => {
      const lat = images[k].Latitude;
      const long = images[k].Longitude;
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
    const currentIndex = this.state.images.findIndex((x) => x.Code === image);
    const offset = currentIndex + direction;
    const len = this.state.images.length;
    const nextIndex = (offset % len + len) % len;
    const newImage = this.state.images[nextIndex];

    this.setState({
      center: [newImage.Longitude, newImage.Latitude],
      hoveredItem: "",
      selectedImage: newImage,
      zoom: [this.state.zoom[0] === focusZoom[0] ? focusZoom[0] + 0.1 : focusZoom[0]],
      pitch: [this.randomInt(20, 45)],
      bearing: [this.randomInt(-40, 40)],
    });

    setTimeout(() => {
      this.props.history.replace(`/explore/detail/${newImage.Code}`);
    }, 500);
  };

  onClick = (id) => {
    const selectedImage = this.state.images.filter((image) => image.Code === id)[0];
    this.setState({
      center: [selectedImage.Longitude, selectedImage.Latitude],
      zoom: focusZoom,
      hoveredItem: "",
      selectedImage: selectedImage,
      pitch: [this.randomInt(40, 60)],
      bearing: [this.randomInt(0, 60)],
    });

    setTimeout(() => {
      this.props.history.replace(`/explore/detail/${selectedImage.Code}`);
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
        {!selectedImage && <Head title="Explore" image="Darwins-Arch-Galapagos" location={this.props.location} />}
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6 col-md-8 p-0">
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
              />
            </div>

            <div className="col-sm-6 col-md-4 p-0 float-left detail-column">
              <Route
                exact
                path={this.props.match.url}
                render={(props) => (
                  <ExploreList
                    onMouseEnter={this.onMouseEnter}
                    onMouseLeave={this.onMouseLeave}
                    images={listImages}
                    loaded={images.length > 0}
                    onSelectItem={this.onClick}
                  />
                )}
              />
              <Route
                path={`${this.props.match.url}/detail/:id`}
                render={(props) => <ExploreDetail onCycleItem={this.onCycle} image={selectedImage} backUrl="/explore" {...props} />}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Explore;
