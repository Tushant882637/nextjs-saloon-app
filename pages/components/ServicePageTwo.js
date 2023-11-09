"use client";
import React from "react";
import img1 from "../../public/img/service1.jpg";
import img2 from "../../public/img/service2.jpg";
import img3 from "../../public/img/service3.jpg";
import img4 from "../../public/img/service4.jpg";
import AboutPage from "./AboutPage";
const serviceTwo = [
  {
    title: "Comfertable Set up",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, seddoeiusmod",
    Img: img1,
  },
  {
    title: "Best Makeup",
    buttonTitle: "Book-Appointment",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, seddoeiusmod",
    Img: img2,
  },
  {
    title: "Amusing Message",
    buttonTitle: "Book-Appointment",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, seddoeiusmod",
    Img: img3,
  },
  {
    title: "Home Services",
    buttonTitle: "Book-Appointment",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, seddoeiusmod",
    Img: img4,
  },
];
const GalleryPage = () => {
  return (
    <>
      <AboutPage />
      <section className="section-padding ">
        <div className="section-title">
          <h3>Our Services</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          </p>
        </div>

        <div className="container">
          <div className="row">
            {serviceTwo.map((item, index) => (
              <div className="col-lg-6" key={index}>
                <div className="service-section mb-xl-20">
                  <img src={item.Img.src} className="img-fluid" />
                  <div className="service-content">
                    <h4>{item.title}</h4>
                    <p>{item.paragraph}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default GalleryPage;
