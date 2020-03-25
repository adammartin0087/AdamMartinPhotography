import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import "./App.css";

import Layout from "./hoc/layout/layout";
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";
import Awards from "./components/awards";
import Gallery from "./components/gallery";
import GalleryRoute from "./components/gallery-route";
import NotFound from "./components/not-found";

class App extends Component {
  state = {};
  render() {
    return (
      <Layout location={this.props.location}>
        <Switch location={this.props.location}>
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/awards" component={Awards} />
          <Route path="/gallery" component={Gallery} />

          <Route path="/underwater" component={GalleryRoute} />
          <Route path="/pumas" component={GalleryRoute} />
          <Route path="/aerial" component={GalleryRoute} />
          <Route path="/landscape" component={GalleryRoute} />
          <Route path="/astrophotography" component={GalleryRoute} />

          <Route path="/" exact component={Home} />
          <Route path="/" component={NotFound} />
        </Switch>
      </Layout>
    );
  }
}

export default withRouter(App);
