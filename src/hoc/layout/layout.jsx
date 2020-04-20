import React, { Component } from "react";
import Helmet from "react-helmet";
import Container from "react-bootstrap/Container";
import Header from "./../../components/common/header";
import Footer from "./../../components/common/footer";
import TitleBar from "../../components/common/title-bar";

class Layout extends Component {
  render() {
    const { children, title } = this.props;
    return (
      <React.Fragment>
        <Helmet defaultTitle="Adam Martin Photography" titleTemplate="%s | Adam Martin Photography" />
        <Header />
        <TitleBar title={title} />
        <main className="mb-5">
          <Container fluid>{children}</Container>
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Layout;
