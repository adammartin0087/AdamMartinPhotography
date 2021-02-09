import React from "react";
import { Route, Switch } from "react-router-dom";
import GalleryGrid from "../../components/gallery-grid";
import GalleryDetail from "../../components/gallery-detail";

const Gallery = ({ match, images }) => {

  return (
    <Switch>
      <Route path={`${match.url}/`} exact render={props => <GalleryGrid {...props} images={images} />} />
      <Route path={`${match.url}/:id`} render={props => <GalleryDetail {...props} images={images} />} />
    </Switch>
  );
};

export default Gallery;
