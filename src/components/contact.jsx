import React from "react";

const Contact = () => {
  return (
    <section className="container">
      <div className="row">
        <div className="col-lg-6">
          <p className=" mb-0">Thank you for your interest. Please fill out the contact form below:</p>
        </div>
        <div className="col-lg-3">
          <div className="media">
            <div className="d-flex align-self-center">
              <span className="u-icon-v2 u-icon-size--sm g-color-white g-bg-primary rounded-circle mr-3">
                <i className="g-font-size-16 icon-hotel-restaurant-112 u-line-icon-pro" />
              </span>
            </div>
            <div className="media-body align-self-center">
              <h2 className="text-uppercase mb-0">Location</h2>
              <p className="mb-0">Boulder, Colorado, USA</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
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
                  <div>
                    <strong>
                      <i className="fa fa-map-marker" />
                      <span className="g-valign-middle">LOCATION</span>
                    </strong>
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
            <div>
              <label for="name">Name</label>
              <input type="text" id="name" autocomplete="off" required="required" maxlength="50" className="form-control" />
            </div>
            <div>
              <label for="company">Company</label>
              <input type="text" id="company" autocomplete="off" required="required" maxlength="50" className="form-control" />
            </div>
            <div>
              <label for="email">Email</label>
              <input type="text" id="email" autocomplete="off" required="required" maxlength="50" className="form-control" />
            </div>
            <div>
              <label for="phone">Phone Number</label>
              <input type="text" id="phone" autocomplete="off" required="required" maxlength="50" className="form-control" />
            </div>
          </div>
          <div className="col-md-7">
            <div>
              <label for="question">Question</label>
              <textarea
                id="question"
                autocomplete="off"
                required="required"
                maxlength="500"
                rows="12"
                placeholder="Type your message here..."
                className="form-control"
              />
            </div>
            <div className="text-right">
              <input type="hidden" id="recaptchaResponse" />
              <button className="btn text-uppercase" type="submit">
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
