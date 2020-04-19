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
        <Container fluid style={{ backgroundColor: "#0077c0", paddingTop: 20, paddingBottom: 20, fontWeight: 300, color: "white" }} className="mb-5">
          <div className="text-center">
            <h1>Title</h1>
            {/* @RenderSection("BreadCrumb", false) */}
          </div>
        </Container>
        <main className="mb-5">
          <Container fluid>{children}</Container>
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Layout;
