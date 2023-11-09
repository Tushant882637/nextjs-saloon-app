"use client";
import React from "react";
import img1 from "../../public/img/client3.jpg";
import img2 from "../../public/img/team2.jpg";
import img3 from "../../public/img/team4.jpg";
import Slider from "react-slick";

const Testimonial = () => {
  var settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };
  return (
    <>
      <section className="contactPage section-padding">
        <div className="section-title">
          <h3 className="text-white">Testimonial</h3>
          <p className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="testimonial-container">
            <Slider {...settings}>
              <div className="">
                <img src={img1.src} className="img-fluid  testimonial-img" />
                <p className="mt-10">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quidem, veritatis nulla eum laudantium totam tempore optio
                  doloremque laboriosam quas, quos eaque molestias
                </p>
              </div>
              <div className="">
                <img src={img2.src} className="img-fluid testimonial-img" />
                <p className="mt-10">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quidem, veritatis nulla eum laudantium totam tempore optio
                  doloremque laboriosam quas, quos eaque molestias
                </p>
              </div>
              <div className="">
                <img src={img3.src} className="img-fluid testimonial-img" />
                <p className="mt-10">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quidem, veritatis nulla eum laudantium totam tempore optio
                  doloremque laboriosam quas, quos eaque molestias
                </p>
              </div>
              <div className="">
                <img src={img1.src} className="img-fluid  testimonial-img" />
                <p className="mt-10">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quidem, veritatis nulla eum laudantium totam tempore optio
                  doloremque laboriosam quas, quos eaque molestias
                </p>
              </div>
              <div className="">
                <img src={img2.src} className="img-fluid testimonial-img" />
                <p className="mt-10">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quidem, veritatis nulla eum laudantium totam tempore optio
                  doloremque laboriosam quas, quos eaque molestias
                </p>
              </div>
              <div className="">
                <img src={img3.src} className="img-fluid testimonial-img" />
                <p className="mt-10">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quidem, veritatis nulla eum laudantium totam tempore optio
                  doloremque laboriosam quas, quos eaque molestias
                </p>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
