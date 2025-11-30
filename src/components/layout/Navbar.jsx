import React from "react";

const Navbar = () => {
  return (
    <header id="header" className="site-header">
      <nav className="navbar navbar-expand-lg navbar-light py-3">
        <div className="container">

          {/* Logo */}
          <a className="navbar-brand" href="#home">
            <img src="/images/main-logo.png" alt="logo" className="img-fluid" />
          </a>

          {/* Mobile Toggle */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
            aria-controls="mainNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar Items */}
          <div className="collapse navbar-collapse" id="mainNavbar">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">

              <li className="nav-item">
                <a className="nav-link text-uppercase" href="#home">Home</a>
              </li>

              <li className="nav-item">
                <a className="nav-link text-uppercase" href="#categories">Categories</a>
              </li>

              <li className="nav-item">
                <a className="nav-link text-uppercase" href="#new-arrivals">New Arrivals</a>
              </li>

              <li className="nav-item">
                <a className="nav-link text-uppercase" href="#collection">Collection</a>
              </li>

              <li className="nav-item">
                <a className="nav-link text-uppercase" href="#blog">Blog</a>
              </li>

              <li className="nav-item">
                <a className="nav-link text-uppercase" href="#contact">Contact</a>
              </li>
            </ul>

            {/* Right Icons */}
            <ul className="navbar-nav ms-auto d-flex align-items-center">

              <li className="mx-2">
                <a href="#search" className="search-button">
                  <svg width="24" height="24" viewBox="0 0 24 24">
                    <use xlinkHref="#search" />
                  </svg>
                </a>
              </li>

              <li className="mx-2">
                <a href="#wishlist" className="btn-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24">
                    <use xlinkHref="#heart" />
                  </svg>
                </a>
              </li>

              <li className="mx-2">
                <a href="#cart" className="btn-icon position-relative">
                  <svg width="24" height="24" viewBox="0 0 24 24">
                    <use xlinkHref="#cart" />
                  </svg>
                </a>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
