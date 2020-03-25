import React from "react";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="container g-pt-100 g-pb-20">
      <div className="row">
        <div className="col-sm-6 col-lg-3 g-mb-30">
          <Link to="/" className="d-inline-block mb-4">
            <img
              className="g-width-80 g-height-auto img-fluid"
              src="https://res.cloudinary.com/dtgitfbtp/image/upload/q_auto,f_auto,g_custom,c_fill,dpr_2.0/AMP"
              alt="Adam Martin Photography"
              title="Adam Martin Photography"
            />
          </Link>
          <p className="g-color-gray-dark-v4 g-font-size-13">2020 © All Rights Reserved.</p>
        </div>
        <div className="col-sm-6 col-lg-3 g-mb-30">
          <h3 className="h6 g-color-black g-font-weight-600 text-uppercase mb-4">Gallery</h3>
          <ul className="list-unstyled g-color-gray-dark-v4 g-font-size-13">
            <li className="my-3">
              <i className="mr-2 fa fa-angle-right" />
              <NavLink to="/underwater" className="u-link-v5 g-color-gray-dark-v4 g-color-primary--hover" title="Underwater Photography">
                Underwater
              </NavLink>
            </li>
            <li className="my-3">
              <i className="mr-2 fa fa-angle-right" />
              <NavLink to="/pumas" className="u-link-v5 g-color-gray-dark-v4 g-color-primary--hover" title="Mountain Lion Photography">
                Mountain Lions
              </NavLink>
            </li>
            <li className="my-3">
              <i className="mr-2 fa fa-angle-right" />
              <NavLink to="/aerial" className="u-link-v5 g-color-gray-dark-v4 g-color-primary--hover" title="Aerial Photography">
                Aerial
              </NavLink>
            </li>
            <li className="my-3">
              <i className="mr-2 fa fa-angle-right" />
              <NavLink to="/landscape" className="u-link-v5 g-color-gray-dark-v4 g-color-primary--hover" title="Landscape Photography">
                Landscape
              </NavLink>
            </li>
            <li className="my-3">
              <i className="mr-2 fa fa-angle-right" />
              <NavLink to="/astrophotography" className="u-link-v5 g-color-gray-dark-v4 g-color-primary--hover" title="Astrophotography">
                Astrophotography
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="col-sm-6 col-lg-3 g-mb-30">
          <h3 className="h6 g-color-black g-font-weight-600 text-uppercase mb-4">About</h3>
          <ul className="list-unstyled g-color-gray-dark-v4 g-font-size-13">
            <li className="media mb-4">
              <i className="d-flex mt-1 mr-3 icon-hotel-restaurant-235 u-line-icon-pro" />
              <div className="media-body">Boulder, Colorado, USA</div>
            </li>
            <li className="media mb-4">
              <i className="d-flex mt-1 mr-3 icon-communication-062 u-line-icon-pro" />
              <div className="media-body">
                <NavLink to="/contact" title="Contact Adam Martin Photography" className="u-link-v5 g-color-gray-dark-v4 g-color-primary--hover">
                  Contact
                </NavLink>
              </div>
            </li>
          </ul>
        </div>
        <div className="col-sm-6 col-lg-3 g-mb-30">
          <h3 className="h6 g-color-black g-font-weight-600 text-uppercase mb-4">Follow</h3>
          <ul className="list-unstyled g-color-gray-dark-v4 g-font-size-13">
            <li className="my-3">
              <i className="mr-2 fa fa-instagram" />
              <a
                className="u-link-v5 g-color-gray-dark-v4 g-color-primary--hover"
                href="https://www.instagram.com/adammartinphotography/"
                title="Follow on Instagram!"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
            <li className="my-3">
              <i className="mr-2 fa fa-facebook" />
              <a
                className="u-link-v5 g-color-gray-dark-v4 g-color-primary--hover"
                href="https://www.facebook.com/amuwp"
                title="Follow on Facebook!"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
