import React from "react";

const Contact = () => {
  return (
    <section className="container g-py-50">
      <div className="row g-mb-20">
        <div className="col-lg-6 g-mb-50">
          <p className="g-font-size-18 mb-0">Thank you for your interest. Please fill out the contact form below:</p>
        </div>
        <div className="col-lg-3 align-self-end ml-auto g-mb-50">
          <div className="media">
            <div className="d-flex align-self-center">
              <span className="u-icon-v2 u-icon-size--sm g-color-white g-bg-primary rounded-circle mr-3">
                <i className="g-font-size-16 icon-hotel-restaurant-112 u-line-icon-pro" />
              </span>
            </div>
            <div className="media-body align-self-center">
              <h3 className="h6 g-color-black g-font-weight-700 text-uppercase mb-0">Location</h3>
              <p className="mb-0">Boulder, Colorado, USA</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 align-self-end ml-auto">
          <div className="media">
            <img
              className="js-pin-map img-fluid"
              src="https://res.cloudinary.com/dtgitfbtp/image/upload/q_auto,f_auto,g_custom,c_fill,dpr_2.0/map"
              easypin-id="map-pin"
              alt="Map"
            />
            <div style={{ display: "none" }} easypin-tpl>
              <popover>
                <div className="text-center text-uppercase u-ns-bg-v1-bottom g-absolute-centered--x g-bg-black g-width-170 g-mb-40">
                  <div className="g-pa-25">
                    <h4 className="g-color-gray-light-v1 g-font-weight-600er g-font-size-9 g-mb-10">
                      <i className="fa fa-map-marker g-valign-middle g-color-primary g-font-size-default" />
                      <span className="g-valign-middle">LOCATION</span>
                    </h4>
                  </div>
                </div>
              </popover>
              <marker>
                <div className="point" />
              </marker>
            </div>
          </div>
        </div>
      </div>

      <form>
        <div className="row justify-content-center">
          <div className="col-md-5">
            <div className="g-mb-20">
              <label className="g-color-gray-dark-v2 g-font-size-13" for="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                autocomplete="off"
                required="required"
                maxlength="50"
                className="form-control g-color-black g-bg-white g-bg-white--focus g-brd-gray-light-v4 g-brd-primary--focus rounded-3 g-py-13 g-px-15"
              />
            </div>
            <div className="g-mb-20">
              <label className="g-color-gray-dark-v2 g-font-size-13" for="company">
                Company
              </label>
              <input
                type="text"
                id="company"
                autocomplete="off"
                required="required"
                maxlength="50"
                className="form-control g-color-black g-bg-white g-bg-white--focus g-brd-gray-light-v4 g-brd-primary--focus rounded-3 g-py-13 g-px-15"
              />
            </div>
            <div className="g-mb-20">
              <label className="g-color-gray-dark-v2 g-font-size-13" for="email">
                Email
              </label>
              <input
                type="text"
                id="email"
                autocomplete="off"
                required="required"
                maxlength="50"
                className="form-control g-color-black g-bg-white g-bg-white--focus g-brd-gray-light-v4 g-brd-primary--focus rounded-3 g-py-13 g-px-15"
              />
            </div>
            <div className="g-mb-20">
              <label className="g-color-gray-dark-v2 g-font-size-13" for="phone">
                Phone Number
              </label>
              <input
                type="text"
                id="phone"
                autocomplete="off"
                required="required"
                maxlength="50"
                className="form-control g-color-black g-bg-white g-bg-white--focus g-brd-gray-light-v4 g-brd-primary--focus rounded-3 g-py-13 g-px-15"
              />
            </div>
          </div>
          <div className="col-md-7">
            <div className="g-mb-40">
              <label className="g-color-gray-dark-v2 g-font-size-13" for="question">
                Question
              </label>
              <textarea
                id="question"
                autocomplete="off"
                required="required"
                maxlength="500"
                rows="12"
                placeholder="Type your message here..."
                className="form-control g-color-black g-bg-white g-bg-white--focus g-brd-gray-light-v4 g-brd-primary--focus rounded-3 g-py-13 g-px-15"
              />
            </div>
            <div className="text-right">
              <input type="hidden" id="recaptchaResponse" />
              <button className="btn u-btn-primary g-font-weight-600 g-font-size-13 text-uppercase rounded-3 g-py-12 g-px-35" type="submit">
                Send
              </button>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Contact;
