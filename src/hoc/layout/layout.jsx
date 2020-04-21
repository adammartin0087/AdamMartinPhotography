import React, { Component } from "react";
import Helmet from "react-helmet";
import Container from "react-bootstrap/Container";
import Header from "./../../components/common/header";
import Footer from "./../../components/common/footer";
// import TitleBar from "../../components/common/title-bar";

class Layout extends Component {
  render() {
    const { children } = this.props;
    return (
      <React.Fragment>
        <Helmet defaultTitle="Adam Martin Photography" titleTemplate="%s | Adam Martin Photography" />
        <Header />
        <main className="mb-5">
          {/* <TitleBar title={title} /> */}
          <Container fluid>{children}</Container>
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Layout;
