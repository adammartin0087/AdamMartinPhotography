import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Layout from "./hoc/layout/layout";
import Home from "./containers/home/home";
import About from "./containers/about/about";
import Contact from "./containers/contact/contact";
import Awards from "./containers/awards/awards";
import Gallery from "./containers/gallery/gallery";
import NotFound from "./containers/not-found/not-found";

class App extends Component {
  state = {
    title: "",
  };

  setTitle(title) {
    if (title === this.state.title) return;
    this.setState({ title });
  }

  render() {
    return (
      <Layout location={this.props.location} title={this.state.title}>
        <Switch location={this.props.location}>
          <Route path="/about" render={(props) => <About {...props} setTitle={(title) => this.setTitle(title)} />} />
          <Route path="/contact" render={(props) => <Contact {...props} setTitle={(title) => this.setTitle(title)} />} />
          <Route path="/awards" render={(props) => <Awards {...props} setTitle={(title) => this.setTitle(title)} />} />

          <Route path="/underwater" render={(props) => <Gallery {...props} setTitle={(title) => this.setTitle(title)} />} />
          <Route path="/pumas" render={(props) => <Gallery {...props} setTitle={(title) => this.setTitle(title)} />} />
          <Route path="/aerial" render={(props) => <Gallery {...props} setTitle={(title) => this.setTitle(title)} />} />
          <Route path="/landscape" render={(props) => <Gallery {...props} setTitle={(title) => this.setTitle(title)} />} />
          <Route path="/astrophotography" render={(props) => <Gallery {...props} setTitle={(title) => this.setTitle(title)} />} />

          <Route path="/" exact render={(props) => <Home {...props} setTitle={(title) => this.setTitle(title)} />} />
          <Route path="/" render={(props) => <NotFound {...props} setTitle={(title) => this.setTitle(title)} />} />
        </Switch>
      </Layout>
    );
  }
}

export default withRouter(App);
