"use client";
import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { clientData } from "../data/data";
const TinySlider = dynamic(() => import("tiny-slider-react"), { ssr: false });
import "../../../node_modules/tiny-slider/dist/tiny-slider.css";

export const Testimonials = () => {
  let settings = {
    container: ".tiny-three-item",
    controls: false,
    mouseDrag: true,
    loop: true,
    rewind: true,
    autoplay: true,
    autoplayButtonOutput: false,
    autoplayTimeout: 3000,
    navPosition: "bottom",
    speed: 400,
    gutter: 12,
    responsive: {
      992: {
        items: 3,
      },

      767: {
        items: 2,
      },

      320: {
        items: 1,
      },
    },
  };

  return (
    <div>
      <div className="row justify-content-center">
        <div className="col">
          <div className="section-title text-center mb-4 pb-2">
            <h4 className="title mb-3">Testimonials</h4>
            <p className="text-muted para-desc mb-0 mx-auto">
              At 5th Avenue, we prioritize your
              property dreams, offering dedicated service for a seamless buying,
              selling, or renting experience. Here's what our clients say.
            </p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12 mt-4">
          <div className="tiny-three-item">
            <div style={{ maxWidth: "600px", margin: "0 auto" }}>
              <Carousel
                showThumbs={false}
                infiniteLoop={true}
                autoPlay={true}
                interval={3000}
                showStatus={false}
                showArrows={true}
                stopOnHover={true}
                dynamicHeight={false}
              >
                {clientData.map((item, index) => {
                  return (
                    <div key={index} className="p-5">
                      <div className="customer-testi text-center">
                        
                        <ul className="list-unstyled mb-0">
                          <li className="list-inline-item">
                            <Image
                              src={item.image}
                              width={50}
                              height={50}
                              sizes="100vw"
                              style={{ width: "100%", height: "auto" }}
                              className="img-fluid avatar avatar-small rounded-circle mx-auto shadow"
                              alt=""
                            />
                          </li>
                        </ul>
                        <small className="text-muted font-italic mt-2">
                          " {item.desc} "
                        </small>
                        <h6 className="text-primary fw-medium mt-3">
                          - {item.name}
                        </h6>
                        <p className="text-muted mb-0">{item.designation}</p>
                      </div>
                    </div>
                  );
                })}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
