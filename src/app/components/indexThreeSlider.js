"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { getPropertys } from "../service/propertyService";

export default function IndexThreeSlider() {
  const [propertyData, setPropertyData] = useState([]);

  const fetchData = (data) => {
    getPropertys(data).then((data) => {
      setPropertyData(data.properties.edges);
    });
  };

  useEffect(() => {
    fetchData({
      first: 5,
      after: null,
    });
  }, []);

  return (
    <section
      className="swiper-slider-hero position-relative d-block"
      id="home"
      style={{
        minHeight: "100vh",
        overflowY: "auto",
      }}
    >
      <Carousel
        key={propertyData.length}
        infiniteLoop={true}
        className="vh-100"
        autoPlay={true}
        showThumbs={false}
        showStatus={false}
        swipeable={false}
        showArrows={false}
      >
        {propertyData.map((item, index) => {
          return (
            <div
              key={index}
              className="slide-inner slide-bg-image d-flex align-items-center vh-100"
              style={{
                zIndex: 10000,
                backgroundImage: `url('${item.node.images[0].url}')`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="bg-overlay"></div>
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="title-heading text-start">
                      <h1 className="heading fw-bold text-white title-dark mb-3">
                        {item.node.formattedAddress || "Property Title"}
                      </h1>
                      <p className="para-desc text-white-50 title-dark mb-0">
                        {item.node.headline ||
                          "A great platform to buy, sell, and rent properties without any agent or commissions."}
                      </p>

                      <div className="mt-4 pt-2 position-relative">
                        <Link
                          style={{ zIndex: 9999, position: "absolute" }}
                          href={`/propertyListings/sale/viewProperty?property=${item.node.formattedAddress
                            .toLowerCase()
                            .replace(/\s+/g, "-")}-${item.node.id}`}
                          className="btn btn-pills btn-primary"
                        >
                          View Details <i className="mdi mdi-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </section>
  );
}
