import React, { Component } from "react";
import Helmet from "react-helmet";
import Header from "./../../components/common/header";
import Footer from "./../../components/common/footer";

class Layout extends Component {
  render() {
    const { children } = this.props;
    return (
      <React.Fragment>
        <Helmet defaultTitle="Adam Martin Photography" titleTemplate="%s | Adam Martin Photography" />
        <Header />
        <main className="mb-5">
          <div className="container-fluid">{children}</div>
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Layout;
