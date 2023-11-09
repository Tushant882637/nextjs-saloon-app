"use client";
import React from "react";

import img1 from "../../public/img/pic-1.jpg";
import img2 from "../../public/img/pic-2.jpg";
import img3 from "../../public/img/pic-3.jpg";
import img4 from "../../public/img/pic-4.jpg";
const service = [
  {
    title: "Pedicure",
    buttonTitle: "Book-Appointment",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, seddoeiusmod",
    Img: img1,
  },
  {
    title: "Facial",
    buttonTitle: "Book-Appointment",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, seddoeiusmod",
    Img: img2,
  },
  {
    title: "Herbal MakeUp",
    buttonTitle: "Book-Appointment",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, seddoeiusmod",
    Img: img3,
  },
  {
    title: "Manicure",
    buttonTitle: "Book-Appointment",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, seddoeiusmod",
    Img: img4,
  },
];
const ServicePage = () => {
  return (
    <>
      <div className="section-padding best-services">
        <div className="section-title">
          <h3>We are best in the town</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          </p>
        </div>
        <div className="container">
          <div className="row">
            {service.map((item, index) => (
              <div className="col-lg-3" key={index}>
                <div className="beauty mb-xl-20">
                  <img src={item.Img.src} className="img-fluid" />
                  <div className="beauty-content">
                    <h5>{item.title}</h5>
                    <p>{item.paragraph}</p>
                    <button className="btn btn-warning">
                      {item.buttonTitle}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicePage;
