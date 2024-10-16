"use client";

import React from "react";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link as Link2 } from 'react-scroll';
import { clientData } from "../data/data";
import "../../../node_modules/tiny-slider/dist/tiny-slider.css";

export const ClientFeedBacks = () => {
  return (
    <div>
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
                      <ul className="list-unstyled mb-0 mt-3 text-warning fs-6">
                        <li className="list-inline-item">
                          <i className="mdi mdi-star"></i>
                        </li>
                        <li className="list-inline-item">
                          <i className="mdi mdi-star"></i>
                        </li>
                        <li className="list-inline-item">
                          <i className="mdi mdi-star"></i>
                        </li>
                        <li className="list-inline-item">
                          <i className="mdi mdi-star"></i>
                        </li>
                        <li className="list-inline-item">
                          <i className="mdi mdi-star"></i>
                        </li>
                      </ul>
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
