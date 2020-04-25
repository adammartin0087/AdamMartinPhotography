import React, { Component } from "react";
import SideBarItem from "./sideBarItem";
import styles from "./sideBarList.module.css";

class SideBarList extends Component {
  state = {
    query: "",
    sort: "order",
  };

  render() {
    const { filteredImages, onSelectItem, images, onMouseEnter, onMouseLeave } = this.props;
    const { query, sort } = this.state;

    const filtered = filteredImages
      .map((k) => images[k])
      .filter((image) => image.name.toLowerCase().includes(query))
      .sort((a, b) => (a[sort] > b[sort] ? 1 : -1));

    return (
      <div className={styles.wrapper}>
        <div className={styles.list}>
          {filtered.map((image, index) => (
            <SideBarItem
              image={image}
              key={index}
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

export default SideBarList;
