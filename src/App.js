import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Loadable from "react-loadable";

import Layout from "./hoc/layout/layout";

const Home = Loadable({ loader: () => import("./containers/home/home"), loading: () => <div /> });
const About = Loadable({ loader: () => import("./containers/about/about"), loading: () => <div /> });
const Contact = Loadable({ loader: () => import("./containers/contact/contact"), loading: () => <div /> });
const Awards = Loadable({ loader: () => import("./containers/awards/awards"), loading: () => <div /> });
const Explore = Loadable({ loader: () => import("./containers/explore/explore"), loading: () => <div /> });
const Gallery = Loadable({ loader: () => import("./containers/gallery/gallery"), loading: () => <div /> });
const NotFound = Loadable({ loader: () => import("./containers/not-found/not-found"), loading: () => <div /> });

class App extends Component {
  state = {};
  render() {
    return (
      <Layout location={this.props.location}>
        <Switch location={this.props.location}>
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/awards" component={Awards} />
          <Route path="/explore" component={Explore} />
          <Route path="/underwater" component={Gallery} />
          <Route path="/pumas" component={Gallery} />
          <Route path="/aerial" component={Gallery} />
          <Route path="/landscape" component={Gallery} />
          <Route path="/astrophotography" component={Gallery} />
          <Route path="/" exact component={Home} />
          <Route path="/" component={NotFound} />
        </Switch>
      </Layout>
    );
  }
}

export default withRouter(App);
