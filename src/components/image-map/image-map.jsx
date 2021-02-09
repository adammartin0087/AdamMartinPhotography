import React, { Component } from "react";
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import MapPopup from "./map-popup";

const Map = ReactMapboxGl({
  accessToken: "pk.eyJ1IjoibWFydGludGVjaCIsImEiOiJjam5xOTY5b20wM25lM3ZvNzNsNzNiZXl0In0.2CO_zA-lFxiFtH9cNPp3Uw",
  minZoom: 2,
});

class ImageMap extends Component {
  markerHover = (key, { map }) => {
    map.getCanvas().style.cursor = "pointer";
    this.props.onMouseEnter(key);
  };

  markerEndHover = (key, { map }) => {
    map.getCanvas().style.cursor = "";
    this.props.onMouseLeave();
  };

  markerClick = (key) => {
    this.props.onClick(key);
  };

  render() {
    const { images, maxBounds, BoundsChanged, mapInit, center, zoom, pitch, speed, bearing, hoveredItem, style, containerStyle } = this.props;
    const hoveredImage = images.filter((image) => image.code === hoveredItem);

    return (
      <Map
        // eslint-disable-next-line
        style={style}
        center={center}
        zoom={zoom}
        speed={speed}
        bearing={bearing}
        pitch={pitch}
        movingMethod="flyTo"
        onStyleLoad={mapInit}
        containerStyle={containerStyle}
        onZoom={BoundsChanged}
        onMove={BoundsChanged}
        maxBounds={maxBounds}
      >
        {hoveredImage.length && <MapPopup image={hoveredImage[0]} />}

        {images.length && (
          <Layer type="symbol" id="pumas" layout={{ "icon-image": "experience" }}>
            {images.map((image) => (
              <Feature
                onMouseEnter={this.markerHover.bind(null, image.Code)}
                onMouseLeave={this.markerEndHover.bind(null, image.Code)}
                onClick={this.markerClick.bind(null, image.Code)}
                coordinates={[image.Longitude, image.Latitude]}
                key={image.Code}
              />
            ))}
          </Layer>
        )}
      </Map>
    );
  }
}

export default ImageMap;
