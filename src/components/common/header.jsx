import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import galleryService from "../../services/galleryService";

class Header extends Component {
  state = {
    expanded: false,
  };

  expand = () => {
    this.setState({ expanded: true });
  };

  collapse = () => {
    this.setState({ expanded: false });
  };

  render() {
    return (
      <header>
        <div className="container">
          <Navbar expanded={this.state.expanded} bg="white" expand="md">
            <Navbar.Brand as={NavLink} to="/" title="Adam Martin Photography">
              <img
                src={galleryService.getImageUrl("AMP", null, null)}
                style={{ width: "100px", height: "46px" }}
                alt="Adam Martin Photography"
                title="Adam Martin Photography"
              />
            </Navbar.Brand>
            <Navbar.Toggle onClick={this.state.expanded ? this.collapse : this.expand} aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="flex-grow-1">
              <Nav className="ml-auto flex-nowrap">
                <Nav.Link as={NavLink} to="/" title="Home" onClick={this.collapse}>
                  Home
                </Nav.Link>
                <NavDropdown title="Gallery">
                  <NavDropdown.Item as={Link} to="/underwater" title="Underwater" onClick={this.collapse}>
                    Underwater
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/pumas" title="Mountain Lions" onClick={this.collapse}>
                    Mountain Lions
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/aerial" title="Aerial" onClick={this.collapse}>
                    Aerial
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/landscape" title="Landscape" onClick={this.collapse}>
                    Landscape
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/astrophotography" title="Astrophotography" onClick={this.collapse}>
                    Astrophotography
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link as={NavLink} to="/explore" title="Explore" onClick={this.collapse}>
                  Explore
                </Nav.Link>
                <Nav.Link as={NavLink} to="/awards" title="Awards" onClick={this.collapse}>
                  Awards
                </Nav.Link>
                <Nav.Link as={NavLink} to="/about" title="About" onClick={this.collapse}>
                  About
                </Nav.Link>
                <Nav.Link as={NavLink} to="/contact" title="contact" onClick={this.collapse}>
                  Contact
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </header>
    );
  }
}

export default Header;
