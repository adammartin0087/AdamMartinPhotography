import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header id="js-header" className="u-header u-header--static">
      <div className="u-header__section u-header__section--light g-bg-white g-transition-0_3 g-py-10">
        <nav className="js-mega-menu navbar navbar-expand-lg hs-menu-initialized hs-menu-horizontal">
          <div className="container">
            <button
              className="navbar-toggler navbar-toggler-right btn g-line-height-1 g-brd-none g-pa-0 g-pos-abs g-top-minus-3 g-right-0"
              type="button"
              aria-label="Toggle navigation"
              aria-expanded="false"
              aria-controls="navBar"
              data-toggle="collapse"
              data-target="#navBar"
            >
              <span className="hamburger hamburger--slider">
                <span className="hamburger-box">
                  <span className="hamburger-inner" />
                </span>
              </span>
            </button>
            <Link to="/" className="navbar-brand d-flex" title="Adam Martin Photography">
              <img
                src="https://res.cloudinary.com/dtgitfbtp/image/upload/q_auto,f_auto,g_custom,c_fill,dpr_2.0/AMP"
                className="img-fluid"
                style={{ width: "100px", height: "46px" }}
                alt="Adam Martin Photography"
                title="Adam Martin Photography"
              />
            </Link>
            <div className="collapse navbar-collapse align-items-center flex-sm-row g-pt-10 g-pt-5--lg g-mr-20--lg" id="navBar">
              <ul className="navbar-nav text-uppercase g-pos-rel g-font-weight-600 ml-auto">
                <li className="nav-item  g-mx-10--lg g-mx-15--xl">
                  <NavLink to="/" exact title="Home" className="nav-link g-py-7 g-px-0">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item hs-has-sub-menu  g-mx-10--lg g-mx-15--xl" data-animation-in="fadeIn" data-animation-out="fadeOut">
                  <a
                    id="nav-link--gallery"
                    title="Gallery"
                    className="nav-link g-py-7 g-px-0"
                    href="/gallery"
                    aria-haspopup="true"
                    aria-expanded="false"
                    aria-controls="nav-submenu--workshops"
                  >
                    Gallery
                  </a>
                  <ul
                    className="hs-sub-menu list-unstyled u-shadow-v11 g-brd-top g-brd-primary g-brd-top-2 g-min-width-220 g-mt-18 g-mt-8--lg--scrolling"
                    id="nav-submenu--gallery"
                    aria-labelledby="nav-link--gallery"
                  >
                    <li>
                      <NavLink to="/underwater" className="nav-link" title="Underwater">
                        Underwater
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/pumas" className="nav-link" title="Mountain Lions">
                        Mountain Lions
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/aerial" className="nav-link" title="Aerial">
                        Aerial
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/landscape" className="nav-link" title="Landscape">
                        Landscape
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/astrophotography" className="nav-link" title="Astrophotography">
                        Astrophotography
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li className="nav-item  g-mx-10--lg g-mx-15--xl">
                  <NavLink to="Awards" title="Awards" className="nav-link g-py-7 g-px-0">
                    Awards
                  </NavLink>
                </li>
                <li className="nav-item  g-mx-10--lg g-mx-15--xl">
                  <NavLink to="/about" title="About" className="nav-link g-py-7 g-px-0">
                    About
                  </NavLink>
                </li>
                <li className="nav-item  g-mx-10--lg g-mx-15--xl">
                  <NavLink to="/contact" title="Contact" className="nav-link g-py-7 g-px-0">
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
