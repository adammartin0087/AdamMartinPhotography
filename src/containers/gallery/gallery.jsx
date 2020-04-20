import React from "react";
import { Route, Switch } from "react-router-dom";
import GalleryGrid from "../../components/gallery-grid";
import GalleryDetail from "../../components/gallery-detail";

const Gallery = ({ setTitle, match }) => {
  return (
    <Switch>
      <Route path={`${match.url}/`} exact render={(props) => <GalleryGrid {...props} setTitle={(title) => setTitle(title)} />} />
      <Route path={`${match.url}/:id`} render={(props) => <GalleryDetail {...props} setTitle={(title) => setTitle(title)} />} />
    </Switch>
  );
};

export default Gallery;
