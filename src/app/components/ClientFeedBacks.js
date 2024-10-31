"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../../../node_modules/tiny-slider/dist/tiny-slider.css";
import { getReviewsByStatus } from "../service/testimonialsService";

export const ClientFeedBacks = () => {
  const [clientData, setClientData] = useState([]);

  useEffect(() => {
    getReviewsByStatus().then((res) => {
      setClientData(res.reviews);
    });
  }, []);

  return (
    <div>
      <div className="row">
        <div className="col-12 mt-4">
          <div className="tiny-three-item">
            <div style={{ maxWidth: "600px", margin: "0 auto" }}>
              <Carousel
                key={clientData.length}
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
                              src={item.picture}
                              width={0}
                              height={0}
                              sizes="100vw"
                              style={{
                                objectFit: "cover",
                                width: "100px",
                                height: "100px",
                              }}
                              className="img-fluid avatar avatar-small rounded-circle mx-auto shadow"
                              alt=""
                            />
                          </li>
                        </ul>
                        <small className="text-muted font-italic mt-2">
                          " {item.review} "
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
