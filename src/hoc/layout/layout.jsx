import React, { Component } from "react";
import Header from "./../../components/common/header";
import Footer from "./../../components/common/footer";
import { Container, Row } from "react-bootstrap";

class Layout extends Component {
  state = {};
  render() {
    const { children } = this.props;
    return (
      <React.Fragment>
        <Header />
        <Container>
          <div className="text-center">
            <h2>Title</h2>
            {/* @RenderSection("BreadCrumb", false) */}
          </div>
        </Container>
        <main>
          <Container>
            <Row>{children}</Row>
          </Container>
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Layout;
