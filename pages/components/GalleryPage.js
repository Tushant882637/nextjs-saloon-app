"use client";
import React from "react";
import img1 from "../../public/img/1.jpg";
import img2 from "../../public/img/2.jpg";
import img3 from "../../public/img/3.jpg";
import img4 from "../../public/img/4.jpg";
import img5 from "../../public/img/2.jpg";
import img6 from "../../public/img/3.jpg";
const imgSection = [
  {
    Img: img1,
  },
  {
    Img: img2,
  },
  {
    Img: img3,
  },
  {
    Img: img4,
  },
  {
    Img: img5,
  },
  {
    Img: img6,
  },
];
const GalleryOne = () => {
  return (
    <>
      <section className="section-padding pt-0">
        <div className="container">
          <div className="section-title">
            <h3>Our Gallery</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            </p>
          </div>
          <div className="row">
            {imgSection.map((imgs, index) => (
              <div className="col-lg-4 mb-xl-30" key={index}>
                <img src={imgs.Img.src} className="img-fluid" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default GalleryOne;
