import React, { useEffect } from "react";
import Helmet from "react-helmet";
import Image from "react-bootstrap/Image";
import galleryService from "../../services/galleryService";
import Icon from "../../components/common/icon";

const Contact = (props) => {
  useEffect(() => {
    props.setTitle("Contact");
  });

  return (
    <section className="container">
      <Helmet>
        <title>Contact</title>
      </Helmet>
      <div className="row">
        <div className="col-lg-6">
          <p className=" mb-0">Thank you for your interest. Please fill out the contact form below:</p>
        </div>
        <div className="col-lg-3">
          <div className="media">
            <div className="d-flex align-self-center">
              <span className="u-icon-v2 u-icon-size--sm g-color-white g-bg-primary rounded-circle mr-3">
                <Icon icon="map-marker" />
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
            <Image src={galleryService.getImageUrl("map", 120, null)} alt="Map" />
          </div>
        </div>
      </div>

      <form>
        <div className="row justify-content-center">
          <div className="col-md-5">
            <div>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" autoComplete="off" required maxLength="50" className="form-control" />
            </div>
            <div>
              <label htmlFor="company">Company</label>
              <input type="text" id="company" autoComplete="off" required maxLength="50" className="form-control" />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input type="text" id="email" autoComplete="off" required maxLength="50" className="form-control" />
            </div>
            <div>
              <label htmlFor="phone">Phone Number</label>
              <input type="text" id="phone" autoComplete="off" required maxLength="50" className="form-control" />
            </div>
          </div>
          <div className="col-md-7">
            <div>
              <label htmlFor="question">Question</label>
              <textarea
                id="question"
                autoComplete="off"
                required
                maxLength="500"
                rows="12"
                placeholder="Type your message here..."
                className="form-control"
              />
            </div>
            <div className="text-right">
              <input type="hidden" id="recaptchaResponse" />
              <button className="btn btn-sm btn-primary text-uppercase mt-2" type="submit">
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
