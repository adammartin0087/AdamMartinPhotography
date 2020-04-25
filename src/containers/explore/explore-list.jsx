import React, { Component } from "react";
import ExploreListItem from "./explore-list-item";

class ExploreList extends Component {
  state = {};

  render() {
    const { onSelectItem, images, onMouseEnter, onMouseLeave } = this.props;

    return (
      <div className="explore-list-wrapper">
        <div className="explore-list">
          {images.map((image) => (
            <ExploreListItem
              image={image}
              key={image.code}
              onClick={() => onSelectItem(image.code)}
              onMouseEnter={() => onMouseEnter(image.code)}
              onMouseLeave={() => onMouseLeave()}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default ExploreList;
