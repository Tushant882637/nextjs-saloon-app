"use client";
import React from "react";
import ServicePage from "./ServicePage";
import AboutPage from "./AboutPage";
import MidSection from "./MidSection";
import ServicePageTwo from "./ServicePageTwo";
import TeamSection from "./Team";
import GalleryPage from "./GalleryPage";
import Price from "./Price";
import ContactPage from "./ContactPage";
import Testimonail from "./Testimonial";

const HomePage = () => {
  return (
    <>
      {/*---------- Banner Section start-----------  */}
      <div className="banner-wrapper">
        <div className="overlay">
          <div className="banner">
            <h1 className="text-warning ">Welcome To Saloon</h1>
            <p className="fs-20 text-white">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. .
            </p>
            <a href="#" className="btn btn-outline-warning">
              Book Appoinement
            </a>
          </div>
        </div>
      </div>
      {/* Banner section End */}
      {/* service Section start*/}
      <ServicePage />
      {/* service section end */}
      {/* About section */}
      {/* <AboutPage /> */}
      {/* About section send */}
      {/* Mid Section start*/}
      <MidSection />
      {/* Mid section end */}
      {/* servicePage2 start*/}
      <ServicePageTwo />
      {/* servicePage2 end*/}
      {/* Team Section start */}
      <TeamSection />
      {/* Team Section end */}
      {/* GallerySection  start*/}
      <GalleryPage />
      {/* Gallery End */}
      {/* Price Section start */}
      <Price />
      {/* Price Section end */}
      {/* Testimonial start */}
      {/* <Testimonail /> */}
      {/* Testimonail End */}
      {/* Contact Page Start */}
      <ContactPage />
      {/* Contact Page end */}
    </>
  );
};

export default HomePage;
