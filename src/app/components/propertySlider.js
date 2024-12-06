"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";

const TinySlider = dynamic(() => import("tiny-slider-react"), { ssr: false });
import "tiny-slider/dist/tiny-slider.css";
import { getPropertyByFilter } from "../service/propertyService";

export default function PropertySlider() {
  const [propertyData, setPropertyData] = useState([]);

  const fetchData = (data) => {
    getPropertyByFilter(data).then((data) => {
      setPropertyData(data.edges);
    });
  };

  useEffect(() => {
    fetchData({
      isSelected: "Sale",
    });
  }, []);

  const settings = {
    container: ".tiny-slide-three",
    controls: true,
    mouseDrag: true,
    loop: true,
    rewind: true,
    autoplay: true,
    autoplayButtonOutput: false,
    autoplayTimeout: 3000,
    navPosition: "bottom",
    controlsText: [
      '<i class="mdi mdi-chevron-left"></i>',
      '<i class="mdi mdi-chevron-right"></i>',
    ],
    nav: false,
    speed: 400,
    gutter: 0,
    responsive: {
      1025: { items: 3 },
      992: { items: 2 },
      767: { items: 2 },
      320: { items: 1 },
    },
  };

  return (
    <div className="row">
      <div className="col-12">
        <div className="tiny-slide-three">
          <TinySlider settings={settings}>
            {propertyData.slice(0, 6).map((item, index) => (
              <div className="tiny-slide" key={index}>
                <div className="card property border-0 shadow position-relative overflow-hidden rounded-3 m-3">
                  <div className="property-image position-relative overflow-hidden shadow">
                    <Image
                      src={item.node.thumbnailSquare}
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{
                        width: "100%",
                        height: "200px",
                        objectFit: "cover",
                      }}
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="card-body content p-4">
                    <Link
                      href={`/propertyListings/sale/viewProperty?property=${item.node.formattedAddress
                        .toLowerCase()
                        .replace(/\s+/g, "-")}-${item.node.id}`}
                      className="title fs-5 text-dark fw-medium"
                    >
                      {item.node.headline}
                    </Link>

                    <ul className="list-unstyled border-top border-bottom d-flex align-items-center justify-content-between">
                      {item.node.landSize && (
                        <li className="d-flex align-items-center">
                          <i className="mdi mdi-arrow-expand-all fs-6 me-2 text-primary"></i>
                          <small className="text-muted">
                            {item.node.landSize}
                          </small>
                        </li>
                      )}

                      {item.node.listingDetails.garageSpaces > 0 && (
                        <li className="d-flex align-items-center">
                          <i className="mdi mdi-car fs-5 me-2 text-primary"></i>
                          <span className="text-muted">
                            {item.node.listingDetails.garageSpaces}
                          </span>
                        </li>
                      )}

                      {item.node.listingDetails.bedrooms && (
                        <li className="d-flex align-items-center">
                          <i className="mdi mdi-bed fs-6 me-2 text-primary"></i>
                          <small className="text-muted">
                            {item.node.listingDetails.bedrooms}&nbsp;Beds
                          </small>
                        </li>
                      )}
                      {item.node.listingDetails.bathrooms && (
                        <li className="d-flex align-items-center">
                          <i className="mdi mdi-shower fs-6 me-2 text-primary"></i>
                          <small className="text-muted">
                            {item.node.listingDetails.bathrooms}&nbsp;Baths
                          </small>
                        </li>
                      )}
                    </ul>

                    <ul className="list-unstyled d-flex justify-content-between mt-2 mb-0">
                      {item.node.price != 0 && item.node.price && (
                        <li className="list-inline-item mb-0">
                          <small className="text-muted">Price</small>
                          <br />
                          <small className="fw-medium mb-0">
                            {item.node.price} $
                          </small>
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </TinySlider>
        </div>
      </div>
    </div>
  );
}
