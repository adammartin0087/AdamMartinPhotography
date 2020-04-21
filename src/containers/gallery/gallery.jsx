import React from "react";
import { Route, Switch } from "react-router-dom";
import GalleryGrid from "../../components/gallery-grid";
import GalleryDetail from "../../components/gallery-detail";

const Gallery = ({ match }) => {
  return (
    <Switch>
      <Route path={`${match.url}/`} exact component={GalleryGrid} />
      <Route path={`${match.url}/:id`} component={GalleryDetail} />
    </Switch>
  );
};

export default Gallery;
