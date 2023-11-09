"use client";
import React from "react";
import img1 from "../../public/img/team3.jpg";
import img2 from "../../public/img/team2.jpg";
import img3 from "../../public/img/team4.jpg";
import { FaFacebookF, FaTwitter, FaWhatsapp } from "react-icons/fa";
const team = [
  {
    title: "Cathy Heaven",
    paragraph: "Hair Stylish",
    Img: img1,
  },

  {
    title: "Rostey Roven",
    paragraph: "Brider Stylish",
    Img: img3,
  },
  {
    title: "Browe Heaven",
    paragraph: "Makeup Artist",
    Img: img2,
  },
];
const TeamSection = () => {
  return (
    <>
      <section className="section-padding pt-0">
        <div className="container">
          <div className="section-title">
            <h3>Our Team</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            </p>
          </div>
          <div className="row">
            {team.map((item, index) => (
              <div className="col-lg-4" key={index}>
                <div className="our-team mb-xl-30">
                  <img src={item.Img.src} className="img-fluid" />
                  <div className="our-team-content text-center">
                    <h4>{item.title}</h4>
                    <p>{item.paragraph}</p>
                    <div className="our-team-icon">
                      <span className="fs-20">
                        <FaTwitter className="text-warning" />
                      </span>
                      <span className="fs-20">
                        <FaFacebookF className="text-warning" />
                      </span>
                      <span className="fs-20">
                        <FaWhatsapp className="text-warning" />
                      </span>
                    </div>
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

export default TeamSection;
