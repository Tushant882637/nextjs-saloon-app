"use client";
import React from "react";
import Testimonial from "./Testimonial";

const ContactPage = () => {
  return (
    <>
      <Testimonial />
      <section className=" section-padding mt-2">
        <div className="container ">
          <div className="section-title">
            <h3>Contact US</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            </p>
          </div>
          <form>
            <div className="mb-3">
              <label className="form-label ">Name</label>
              <input type="text" className="form-control d-block " />
            </div>
            <div className="mb-3">
              <label className="form-label ">Email</label>
              <input type="text" className="form-control d-block " />
            </div>
            <div className="mb-3">
              <label className="form-label ">Contact</label>
              <input type="text" className="form-control d-block " />
            </div>
            <button
              className="btn btn-warning text-white d-block"
              type="button"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
