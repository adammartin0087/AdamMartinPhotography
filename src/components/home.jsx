import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const prefix = "https://res.cloudinary.com/dtgitfbtp/image/upload/q_auto,f_auto,g_custom,c_fill,w_600,h_432,dpr_2.0/";

  return (
    <div className="row align-items-stretch mt-4">
      <div className="col-lg-3 g-mb-30">
        <article className="h-100 text-center g-overflow-hidden">
          <div
            className="h-100 u-block-hover--scale g-min-height-400 g-flex-middle g-bg-cover g-bg-size-cover g-bg-black-opacity-0_3--after g-transition-0_5 g-pa-20"
            style={{ backgroundPositionX: "center" }}
            data-bg-img-src={`${prefix}/Humpback-Portrait`}
          >
            <div className="g-flex-middle-item g-brd-y g-brd-top-5 g-brd-bottom-5 g-brd-white-opacity-0_5 g-font-size-24 g-pos-rel g-z-index-1">
              <h3 className="h1 g-color-white g-font-weight-700 text-uppercase g-letter-spacing-3 mb-0">Underwater</h3>
            </div>
            <Link className="u-link-v2" to="/underwater" title="Underwater"></Link>
          </div>
        </article>
      </div>
      <div className="col-lg-3 g-mb-30">
        <article className="h-100 text-center g-overflow-hidden">
          <div
            className="h-100 u-block-hover--scale g-min-height-400 g-flex-middle g-bg-cover g-bg-size-cover g-bg-black-opacity-0_3--after g-transition-0_5 g-pa-20"
            style={{ backgroundPositionX: "center" }}
            data-bg-img-src={`${prefix}/Puma-Approaching`}
          >
            <div className="g-flex-middle-item g-brd-y g-brd-top-5 g-brd-bottom-5 g-brd-white-opacity-0_5 g-font-size-24 g-pos-rel g-z-index-1">
              <h3 className="h1 g-color-white g-font-weight-700 text-uppercase g-letter-spacing-3 mb-0">Pumas</h3>
            </div>
            <Link className="u-link-v2" to="/pumas" title="Pumas"></Link>
          </div>
        </article>
      </div>
      <div className="col-lg-3 g-mb-30">
        <article className="h-100 text-center g-overflow-hidden">
          <div
            className="h-100 u-block-hover--scale g-min-height-400 g-flex-middle g-bg-cover g-bg-size-cover g-bg-black-opacity-0_3--after g-transition-0_5 g-pa-20"
            style={{ backgroundPositionX: "center" }}
            data-bg-img-src={`${prefix}/Darwins-Arch-Galapagos`}
          >
            <div className="g-flex-middle-item g-brd-y g-brd-top-5 g-brd-bottom-5 g-brd-white-opacity-0_5 g-font-size-24 g-pos-rel g-z-index-1">
              <h3 className="h1 g-color-white g-font-weight-700 text-uppercase g-letter-spacing-3 mb-0">Aerial</h3>
            </div>
            <Link className="u-link-v2" to="/aerial" title="Aerial"></Link>
          </div>
        </article>
      </div>
      <div className="col-lg-3 g-mb-30">
        <article className="h-100 text-center g-overflow-hidden">
          <div
            className="h-100 u-block-hover--scale g-min-height-400 g-flex-middle g-bg-cover g-bg-size-cover g-bg-black-opacity-0_3--after g-transition-0_5 g-pa-20"
            style={{ backgroundPositionX: "center" }}
            data-bg-img-src={`${prefix}/Mirador-Las-Torres`}
          >
            <div className="g-flex-middle-item g-brd-y g-brd-top-5 g-brd-bottom-5 g-brd-white-opacity-0_5 g-font-size-24 g-pos-rel g-z-index-1">
              <h3 className="h1 g-color-white g-font-weight-700 text-uppercase g-letter-spacing-3 mb-0">Landscape</h3>
            </div>
            <Link className="u-link-v2" to="/landscape" title="Landscape"></Link>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Home;
