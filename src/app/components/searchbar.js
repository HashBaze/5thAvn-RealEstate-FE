import React, { useState } from "react";
import { FiSearch } from "../assets/icons/vander";
import TextAnimation from "./textAnimation";
import { propertyType } from "../data/data";

const Searchbar = ({ filter, suburb }) => {
  return (
    <>
      <section className="position-relative mt-5 pt-4" data-aos="fade-up">
        <div className="px-md-4 px-2 mt-2">
          <div
            className="bg-home-one container-fluid d-table shadow rounded-3 overflow-hidden"
            id="home"
          >
            <div
              className="bg-overlay image-wrap "
              id="hero-images"
              style={{
                backgroundImage: "url('/images/bg/03.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center center",
                width: "100vw",
              }}
            ></div>
            <div className="bg-overlay bg-black opacity-50"></div>

            <div className="container">
              <div className="row justify-content-center">
                <div className="col-12">
                  <div className="title-heading">
                    <TextAnimation />
                    <p
                      className="para-desc text-white title-dark mb-0"
                      data-aos="fade-right"
                    >
                      A great plateform to buy, sell and rent your properties
                      without any agent or commisions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Searchbar;
