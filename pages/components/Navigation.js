"use client";
import React, { useState } from "react";
import Link from "next/link";

const Navigation = () => {
  const [dropDown, setDropDown] = useState(false);
  const [ButtonVisible, setButtonVisible] = useState(false);
  const handleNavbar = () => {
    setDropDown(!dropDown);
  };
  const habdleButton = () => {
    setButtonVisible(!ButtonVisible);
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand" href="/">
            <span className="logoContent">Saloon Desgin</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={habdleButton}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {ButtonVisible && (
            <div className="navbar-nav">
              <Link className="nav-link active" href="/">
                Home
              </Link>
              <Link className="nav-link" href="/components/AboutPage">
                AboutUs
              </Link>
              <Link className="nav-link" href="/components/ServicePage">
                Services
              </Link>

              <Link className="nav-link" href="/components/ContactPage">
                Contact
              </Link>

              <Link className="nav-link" href="#" onClick={handleNavbar}>
                Pages
              </Link>
              <ul
                className={`${
                  dropDown
                    ? `top-full d-block visible `
                    : "top-[110%] invisible d-none"
                } dropdownCss`}
              >
                <li>
                  <Link href="/components/ServicePageTwo" className="nav-link">
                    ServiceTwo
                  </Link>
                </li>
                <li>
                  <Link href="/components/Price" className="nav-link">
                    Price
                  </Link>
                </li>
                <li>
                  <Link href="/components/GalleryPage" className="nav-link">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link href="/components/Team" className="nav-link">
                    Team
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navigation;
