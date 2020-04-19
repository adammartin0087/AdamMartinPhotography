import React, { Component } from "react";
import galleryService from "../services/galleryService";

class GalleryDetail extends Component {
  state = {
    image: null
  };

  componentDidMount() {
    const { match } = this.props;
    const { id } = match.params;
    const image = galleryService.getImage(id);
    this.setState({ image });
  }

  render() {
    const { image } = this.state;
    return (
      image && (
        <section className="container g-py-25">
          <img
            className="img-fluid w-100 u-shadow-v1-5 g-line-height-2 g-pa-40 g-mb-30"
            src={"https://res.cloudinary.com/dtgitfbtp/image/upload/q_auto,f_auto,g_custom,c_fill,w_800,h_500,dpr_2.0/" + image.code}
            alt={image.name}
          />
          <div className="row g-mb-70">
            <div className="col-md-4 g-mb-30">
              <h3 className="h5 g-color-black mb-3">Location:</h3>
              <span className="fa fa-map-marker g-ml-10" /> {image.location}
            </div>
            <div className="col-md-4 g-mb-30">
              <h3 className="h5 g-color-black mb-3">Camera:</h3>
              <span className="fa fa-map-marker g-ml-10" /> {image.camera}
            </div>
            <div className="col-md-4 g-mb-30">
              <div className="g-mb-30">
                {/* @if (Model.Product.Tags != null &amp;&amp; Model.Product.Tags.Any())
        {'{'}
        <h3 className="h5 g-color-black mb-3">Tags:</h3>
        <ul className="u-list-inline mb-0">
          @foreach (var tag in Model.Product.Tags)
          {'{'}
          <li className="list-inline-item g-mb-10">
            <a className="u-tags-v1 g-color-main g-brd-around g-brd-gray-light-v3 g-bg-gray-dark-v2--hover g-brd-gray-dark-v2--hover g-color-white--hover g-rounded-50 g-py-4 g-px-15" href="#">@tag.Name</a>
          </li>
          {'}'}
        </ul>
        {'}'} */}
              </div>
              <div className="mb-3">
                <h3 className="h5 g-color-black mb-3">Share:</h3>
                <ul className="list-inline mb-0">
                  <li className="list-inline-item mr-1 mb-1">
                    <a className="btn u-btn-outline-facebook g-rounded-25" href="http://www.facebook.com">
                      <i className="mr-1 fa fa-facebook" />
                      Facebook
                    </a>
                  </li>
                  <li className="list-inline-item mx-1 mb-1">
                    <a className="btn u-btn-outline-twitter g-rounded-25" href="http://www.twitter.com">
                      <i className="mr-1 fa fa-twitter" />
                      Twitter
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      )
    );
  }
}

export default GalleryDetail;
