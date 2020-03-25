import React, { Component } from "react";
import Header from "./../../components/common/header";
import Footer from "./../../components/common/footer";

class Layout extends Component {
  state = {};
  render() {
    const { children } = this.props;
    return (
      <React.Fragment>
        <Header />
        <section className="g-bg-primary g-color-white g-py-20">
          <div className="container">
            <div className="d-sm-flex text-center">
              <div className="align-self-center">
                <h2 className="h3 g-font-weight-300 w-100 g-mb-10 g-mb-0--md">Title</h2>
              </div>
              {/* @RenderSection("BreadCrumb", false) */}
            </div>
          </div>
        </section>

        <main>
          {children}
          <Footer />
        </main>
        <div className="u-outer-spaces-helper"></div>
      </React.Fragment>
    );
  }
}

export default Layout;
