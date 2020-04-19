import React from "react";
import { Route, Switch } from "react-router-dom";
import GalleryGrid from "./gallery-grid";
import GalleryDetail from "./gallery-detail";

const GalleryRoute = ({ match }) => {
  return (
    <Switch>
      <Route path={`${match.url}/`} exact component={GalleryGrid} />
      <Route path={`${match.url}/:id`} component={GalleryDetail} /> */}
    </Switch>
  );
};

export default GalleryRoute;
