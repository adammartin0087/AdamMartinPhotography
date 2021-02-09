import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Loadable from "react-loadable";
import Layout from "./hoc/layout/layout";
import galleryService from "./services/galleryService";

const Home = Loadable({ loader: () => import("./containers/home/home"), loading: () => <div /> });
const About = Loadable({ loader: () => import("./containers/about/about"), loading: () => <div /> });
const Contact = Loadable({ loader: () => import("./containers/contact/contact"), loading: () => <div /> });
const Awards = Loadable({ loader: () => import("./containers/awards/awards"), loading: () => <div /> });
const Explore = Loadable({ loader: () => import("./containers/explore/explore"), loading: () => <div /> });
const Gallery = Loadable({ loader: () => import("./containers/gallery/gallery"), loading: () => <div /> });
const NotFound = Loadable({ loader: () => import("./containers/not-found/not-found"), loading: () => <div /> });

class App extends Component {

  state = {
    images: []
  };

  async componentDidMount() {
    const images = await galleryService.getAllImages();
    this.setState({ images });
  }

  render() {
    return (
      <React.Fragment>
        <Switch location={this.props.location}>
          <Route
            path="/"
            render={(props) => (
              <Layout location={this.props.location}>
                <Switch location={this.props.location}>
                  <Route path="/about" component={About} />
                  <Route path="/contact" component={Contact} />
                  <Route path="/awards" component={Awards} />
                  <Route path="/explore" render={props => <Explore {...props} images={this.state.images} />} />              
                  <Route path="/underwater" render={props => <Gallery {...props} images={this.state.images} />} />
                  <Route path="/pumas" render={props => <Gallery {...props} images={this.state.images} />} />
                  <Route path="/aerial" render={props => <Gallery {...props} images={this.state.images} />} />
                  <Route path="/landscape" render={props => <Gallery {...props} images={this.state.images} />} />
                  <Route path="/astrophotography" render={props => <Gallery {...props} images={this.state.images} />} />
                  <Route path="/" exact component={Home} />
                  <Route path="/" component={NotFound} />
                </Switch>
              </Layout>
            )}
          />
        </Switch>
        )}
      </React.Fragment>
    );
  }
}

export default withRouter(App);
