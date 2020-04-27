import React, { Component } from "react";
import ExploreListItem from "./explore-list-item";

class ExploreList extends Component {
  state = {};

  render() {
    const { onSelectItem, images, onMouseEnter, onMouseLeave, loaded } = this.props;

    return (
      <div className="explore-list-wrapper">
        <div className="explore-list">
          {images.length > 0 &&
            images.map((image) => (
              <ExploreListItem
                image={image}
                key={image.code}
                onClick={() => onSelectItem(image.code)}
                onMouseEnter={() => onMouseEnter(image.code)}
                onMouseLeave={() => onMouseLeave()}
              />
            ))}

          {loaded && images.length === 0 && (
            <div className="explore-list-item">
              <h2>I haven't been here :(</h2>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default ExploreList;
