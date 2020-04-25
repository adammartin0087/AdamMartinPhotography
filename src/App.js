import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Layout from "./hoc/layout/layout";
import Home from "./containers/home/home";
import About from "./containers/about/about";
import Contact from "./containers/contact/contact";
import Awards from "./containers/awards/awards";
import Explore from "./containers/explore/explore";
import Gallery from "./containers/gallery/gallery";
import NotFound from "./containers/not-found/not-found";

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
