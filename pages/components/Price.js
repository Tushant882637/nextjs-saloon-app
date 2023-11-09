"use client";
import React from "react";
import img1 from "../../public/img/pic-1.jpg";
import img2 from "../../public/img/pic-2.jpg";
import img3 from "../../public/img/pic-3.jpg";
import { Link } from "react-router-dom";

const priceSection = [
  {
    title: "Platinum",
    price: "30$",
    headTitle: "Lorem isperum",
    Img: img1,
  },
  {
    title: "Gold",
    price: "20$",
    headTitle: "Lorem isperum",
    Img: img2,
  },
  {
    title: "Diamond",
    price: "10$",
    headTitle: "Lorem isperum",
    Img: img3,
  },
];
const Price = () => {
  return (
    <>
      <section className="section-padding pt-0">
        <div className="container">
          <div className="section-title">
            <h3>Our Price</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,</p>
          </div>
          <div className="row">
            {priceSection.map((priceItem, index) => (
              <div className="col-lg-4 " key={index}>
                <div className="pricing mb-xl-20">
                  <div className="pricing-img">
                    <img src={priceItem.Img.src} className="img-fluid" />
                    <div className="pricing-menu">
                      <h4 className="text-dark">{priceItem.title}</h4>
                    </div>
                  </div>
                  <div className="pricing-content text-center">
                    <ul>
                      <li>Lorem isperum</li>
                      <li>Lorem isperum</li>
                      <li>Lorem isperum</li>
                      <li>Lorem isperum</li>
                      <li>Lorem isperum</li>
                    </ul>
                    <button className="btn btn-warning text-white">
                      join Now
                    </button>
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

export default Price;
