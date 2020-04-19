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
        {/* 
        <section class="g-bg-primary g-color-white g-py-20">
                <div class="container">
                    <div class="d-sm-flex text-center">
                        <div class="align-self-center">
                            <h2 class="h3 g-font-weight-300 w-100 g-mb-10 g-mb-0--md">Underwater Photography</h2>
                        </div>
                        
    <div class="align-self-center ml-auto">
        <ul class="u-list-inline">
            <li class="list-inline-item g-mr-5">
                <a class="u-link-v5 g-color-white g-color-black--hover" href="/">Home</a>
                <i class="g-color-white g-ml-5">/</i>
            </li>
            <li class="list-inline-item g-mr-5">
                <a class="u-link-v5 g-color-white g-color-black--hover" href="/">Gallery</a>
                <i class="g-color-white g-ml-5">/</i>
            </li>
            <li class="list-inline-item g-color-black">
                <span>Underwater</span>
            </li>
        </ul>
    </div>

                    </div>
                </div>
            </section> */}

        <Container fluid style={{ backgroundColor: "#0077c0", paddingTop: 20, paddingBottom: 20, fontWeight: 300, color: "white" }}>
          <div className="text-center">
            <h2>Title</h2>
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
