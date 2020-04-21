import React, { Component } from "react";
import Helmet from "react-helmet";
import Container from "react-bootstrap/Container";
import Header from "./../../components/common/header";
import Footer from "./../../components/common/footer";

class Layout extends Component {
  render() {
    const { children } = this.props;
    return (
      <React.Fragment>
        <Helmet defaultTitle="Adam Martin Photography" titleTemplate="%s | Adam Martin Photography">
          <meta name="Description" content="Underwater and aerial imagery from around the world." />
        </Helmet>
        <Header />
        <main className="mb-5">
          <Container fluid>{children}</Container>
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Layout;
