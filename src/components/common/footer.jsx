import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Container, Row, Col, Image } from "react-bootstrap";
import galleryService from "../../services/galleryService";
import Icon from "./icon";

const Footer = () => {
  return (
    <Container className="footer">
      <Row>
        <Col sm={6} lg={3}>
          <Link to="/">
            <Image className="img-fluid" src={galleryService.getImageUrl("AMP", null, null)} alt="Adam Martin Photography" width="80" />
          </Link>
          <p className="mt-4">2020 © All Rights Reserved.</p>
        </Col>
        <Col sm={6} lg={3}>
          <span className="text-uppercase mb-4 head">Gallery</span>
          <ul className="list-unstyled">
            <li>
              <Icon icon="angle-right" className="mr-2" />
              <NavLink to="/underwater" className="" title="Underwater Photography">
                Underwater
              </NavLink>
            </li>
            <li>
              <Icon icon="angle-right" className="mr-2" />
              <NavLink to="/pumas" className="" title="Mountain Lion Photography">
                Mountain Lions
              </NavLink>
            </li>
            <li>
              <Icon icon="angle-right" className="mr-2" />
              <NavLink to="/aerial" className="" title="Aerial Photography">
                Aerial
              </NavLink>
            </li>
            <li>
              <Icon icon="angle-right" className="mr-2" />
              <NavLink to="/landscape" className="" title="Landscape Photography">
                Landscape
              </NavLink>
            </li>
            <li>
              <Icon icon="angle-right" className="mr-2" />
              <NavLink to="/astrophotography" className="" title="Astrophotography">
                Astrophotography
              </NavLink>
            </li>
          </ul>
        </Col>
        <Col sm={6} lg={3}>
          <span className="text-uppercase mb-4 head">About</span>
          <ul className="list-unstyled">
            <li>
              <Icon icon="map-marker" style={{ width: 14 }} className="mr-2" />
              Boulder, Colorado, USA
            </li>
            <li>
              <Icon icon="envelope" style={{ width: 14 }} className="mr-2" />
              <NavLink to="/contact" title="Contact Adam Martin Photography">
                Contact
              </NavLink>
            </li>
          </ul>
        </Col>
        <Col sm={6} lg={3}>
          <span className=" text-uppercase mb-4 head">Follow</span>
          <ul className="list-unstyled">
            <li>
              <Icon icon={["fab", "instagram"]} style={{ width: 14 }} className="mr-2" />
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
              <Icon icon={["fab", "facebook"]} style={{ width: 14 }} className="mr-2" />
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
