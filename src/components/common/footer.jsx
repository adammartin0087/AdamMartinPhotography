import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Container, Row, Col, Image } from "react-bootstrap";

const Footer = () => {
  return (
    <Container>
      <Row>
        <Col sm={6} lg={3}>
          <Link to="/">
            <Image
              className="img-fluid"
              src="https://res.cloudinary.com/dtgitfbtp/image/upload/q_auto,f_auto,g_custom,c_fill,dpr_2.0/AMP"
              alt="Adam Martin Photography"
              title="Adam Martin Photography"
              width="80"
            />
          </Link>
          <p>2020 © All Rights Reserved.</p>
        </Col>
        <Col sm={6} lg={3}>
          <h3 className="h6 text-uppercase mb-4">Gallery</h3>
          <ul className="list-unstyled">
            <li>
              <i className="fa fa-angle-right" />
              <NavLink to="/underwater" className="" title="Underwater Photography">
                Underwater
              </NavLink>
            </li>
            <li>
              <i className="fa fa-angle-right" />
              <NavLink to="/pumas" className="" title="Mountain Lion Photography">
                Mountain Lions
              </NavLink>
            </li>
            <li>
              <i className="fa fa-angle-right" />
              <NavLink to="/aerial" className="" title="Aerial Photography">
                Aerial
              </NavLink>
            </li>
            <li>
              <i className="fa fa-angle-right" />
              <NavLink to="/landscape" className="" title="Landscape Photography">
                Landscape
              </NavLink>
            </li>
            <li>
              <i className="fa fa-angle-right" />
              <NavLink to="/astrophotography" className="" title="Astrophotography">
                Astrophotography
              </NavLink>
            </li>
          </ul>
        </Col>
        <Col sm={6} lg={3}>
          <h3 className="h6 text-uppercase mb-4">About</h3>
          <ul className="list-unstyled">
            <li className="media mb-4">
              <i className="icon-hotel-restaurant-235 u-line-icon-pro" />
              <div className="media-body">Boulder, Colorado, USA</div>
            </li>
            <li className="media mb-4">
              <i className="icon-communication-062 u-line-icon-pro" />
              <div className="media-body">
                <NavLink to="/contact" title="Contact Adam Martin Photography" className="">
                  Contact
                </NavLink>
              </div>
            </li>
          </ul>
        </Col>
        <Col sm={6} lg={3}>
          <h3 className="h6 text-uppercase mb-4">Follow</h3>
          <ul className="list-unstyled">
            <li>
              <i className="fa fa-instagram" />
              <a
                className=""
                href="https://www.instagram.com/adammartinphotography/"
                title="Follow on Instagram!"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              <i className="fa fa-facebook" />
              <a className="" href="https://www.facebook.com/amuwp" title="Follow on Facebook!" target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
