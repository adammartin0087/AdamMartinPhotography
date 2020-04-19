import React from "react";
import { Link } from "react-router-dom";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";

const Header = () => {
  return (
    <header>
      <Container>
        <Navbar bg="white" expand="md">
          <Navbar.Brand as={Link} to="/" title="Adam Martin Photography">
            <img
              src="https://res.cloudinary.com/dtgitfbtp/image/upload/q_auto,f_auto,g_custom,c_fill,dpr_2.0/AMP"
              className="img-fluid"
              style={{ width: "100px", height: "46px" }}
              alt="Adam Martin Photography"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="flex-grow-1 text-right">
            <Nav className="ml-auto flex-nowrap">
              <Nav.Link as={Link} to="/" title="Home">
                Home
              </Nav.Link>
              <NavDropdown title="Gallery">
                <NavDropdown.Item as={Link} to="/underwater" title="Underwater">
                  Underwater
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/pumas" title="Mountain Lions">
                  Mountain Lions
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/aerial" title="Aerial">
                  Aerial
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/landscape" title="Landscape">
                  Landscape
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/astrophotography" title="Astrophotography">
                  Astrophotography
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/awards" title="Awards">
                Awards
              </Nav.Link>
              <Nav.Link as={Link} to="/about" title="About">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/contact" title="contact">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  );
};

export default Header;

// <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
//     <div class="d-flex flex-grow-1">
//         <span class="w-100 d-lg-none d-block"><!-- hidden spacer to center brand on mobile --></span>
//         <a class="navbar-brand" href="#">
//             Navbar 7
//         </a>
//         <div class="w-100 text-right">
//             <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNavbar7">
//                 <span class="navbar-toggler-icon"></span>
//             </button>
//         </div>
//     </div>
//     <div class="collapse navbar-collapse flex-grow-1 text-right" id="myNavbar7">
//         <ul class="navbar-nav ml-auto flex-nowrap">
//             <li class="nav-item">
//                 <a href="#" class="nav-link">Link</a>
//             </li>
//             <li class="nav-item">
//                 <a href="#" class="nav-link">Link</a>
//             </li>
//             <li class="nav-item">
//                 <a href="#" class="nav-link">Link</a>
//             </li>
//             <li class="nav-item">
//                 <a href="#" class="nav-link">Link</a>
//             </li>
//         </ul>
//     </div>
// </nav>
