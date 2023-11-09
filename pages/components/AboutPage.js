"use client";
import React from "react";
import img from "../../public/img/about-image.jpg";
import MidSection from "./MidSection";
// import Navigation from "../Navigation/Navigation";

const AboutPage = () => {
  return (
    <>
      <div className="section-padding ">
        <div className="container">
          <div className="section-title">
            <h3>About us</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="about-us-img">
                <img src={img.src} className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-us-content mb-xl-20">
                <p className="m-t-10">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliquaLorem ipsum dolor sit amet, consectetur adipisicing
                  elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit, sed do eiusmod tempor incididunt ut labore
                  et dolore magna aliqua
                </p>
                <a href="#" className="btn btn-warning mt-10">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
