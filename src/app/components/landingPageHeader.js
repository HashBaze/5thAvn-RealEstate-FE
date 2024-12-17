import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";

export default function LandingPageHeader() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      AOS.init();
    }
  }, []);

  return (
    <div
      className="swiper-slider-hero container-fluid border position-relative d-block mt-100"
      id="home"
    >
      <div className="row blue-bg p-0">
        <div className="col-lg-6 d-flex col-md-12 col-sm-12 col-seperated p-lg-3 ">
          <div className="d-flex align-items-center">
            <div className="p-lg-5 p-md-5 header-content">
              <small className="text-center header-promt rounded-5 p-2">
                Discover Your Dream Home
              </small>
              <p
                data-aos="fade-up-right"
                className="header-title mt-3"
              >
                Find Your Perfect Place
                <br />
                to Live
              </p>
              <p className="text-start header-description mt-3">
                Explore our curated collection of premium properties. From{" "}
                <br />
                modern apartments to luxury villas, find your ideal home with{" "}
                <br />
                us.
              </p>
              <div className="d-flex mt-3">
                <button
                  className="btn btn-lg me-2 btn-animated"
                  onClick={() => {
                    window.location.href =
                      "/propertyListings?type=Sale&status=ACTIVE";
                  }}
                >
                  Get Started
                </button>
                <button
                  className="btn btn-outline-primary btn-lg btn-lern-more"
                  onClick={() => {
                    window.location.href = "/aboutus";
                  }}
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 col-seperated p-0 hide-col d-lg-flex d-sm-none d-md-flex">
          <div className="d-flex align-items-center w-100 hide-col">
            <div className="right-side-bg position-relative hide-col">
              <div className="bg-overlay-my-container hide-col"></div>
              <div className="w-md-100">
                <svg
                  className="svg-container"
                  viewBox="0 0 663 438"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse
                    cx="208.61"
                    cy="20.8966"
                    rx="12"
                    ry="12"
                    fill="white"
                    className="animated-ellipse"
                  />
                  <ellipse
                    cx="11.9892"
                    cy="423.104"
                    rx="12"
                    ry="12"
                    fill="white"
                    className="animated-ellipse"
                  />
                  <ellipse
                    cx="384.852"
                    cy="408.207"
                    rx="12"
                    ry="12"
                    fill="white"
                    className="animated-ellipse"
                  />
                  <ellipse
                    cx="380.124"
                    cy="116.234"
                    rx="12"
                    ry="12"
                    fill="white"
                    className="animated-ellipse"
                  />

                  <ellipse
                    cx="60.124"
                    cy="175"
                    rx="12"
                    ry="12"
                    fill="white"
                    className="animated-ellipse"
                  />
                  <g className="hover-rect-listings">
                    <rect
                      x="29.9727"
                      y="408.207"
                      width="118.693"
                      height="29.7931"
                      rx="14.8965"
                      fill="transparent"
                      stroke="white"
                      strokeWidth="2"
                      fillOpacity={1}
                      className=""
                      z={100}
                    />
                    <text
                      x="89.31935"
                      y="426.5"
                      fontSize="12"
                      textAnchor="middle"
                      fill="white"
                      fontFamily="Arial, sans-serif"
                      className="animated-text"
                    >
                      Property Listings
                    </text>
                    <text
                      x="135"
                      y="465"
                      fontSize="12"
                      textAnchor="middle"
                      fill="white"
                      fontFamily="Arial, sans-serif"
                      className="hide-text-listings"
                    >
                      <tspan x="130" dy="0">
                        Browse an extensive range
                      </tspan>
                      <tspan x="130" dy="15">
                        of real estate properties ,
                      </tspan>
                      <tspan x="130" dy="15">
                        including residential homes,
                      </tspan>
                      <tspan x="130" dy="15">
                        commercial spaces, apartments,
                      </tspan>
                      <tspan x="130" dy="15">
                        and land for sale or rent.
                      </tspan>
                    </text>
                  </g>

                  <g className="hover-rect-insights">
                    <rect
                      x="227.793"
                      y="5"
                      width="118.693"
                      height="29.7931"
                      rx="14.8966"
                      fill="transparent"
                      stroke="white"
                      strokeWidth="2"
                      fillOpacity={1}
                      className=""
                      z={100}
                    />

                    <text
                      x="287"
                      y="24"
                      fontSize="12"
                      textAnchor="middle"
                      fill="white"
                      fontFamily="Arial, sans-serif"
                      className="animated-text"
                    >
                      Market Insights
                    </text>
                    <text
                      x="350.100"
                      y="45"
                      fontSize="12"
                      textAnchor="middle"
                      fill="white"
                      fontFamily="Arial, sans-serif"
                      className="hide-text-insights"
                    >
                      <tspan x="385" dy="0">
                        Explore mortgage calculators,
                      </tspan>
                      loan options, and expert
                      <tspan x="385" dy="15">
                        advice to make informed financial
                      </tspan>
                      <tspan x="385" dy="15">
                        decisions for your real estate journey.
                      </tspan>
                    </text>
                  </g>

                  <g className="hover-rect-network">
                    <rect
                      x="406.432"
                      y="393.31"
                      width="118.693"
                      height="29.7931"
                      rx="14.8966"
                      fill="transparent"
                      stroke="white"
                      strokeWidth="2"
                      fillOpacity={1}
                      className="hover-rect-network"
                      z={100}
                    />
                    <text
                      x="465"
                      y="412"
                      fontSize="12"
                      textAnchor="middle"
                      fill="white"
                      fontFamily="Arial, sans-serif"
                      className="animated-text"
                    >
                      Agent Network
                    </text>
                    <text
                      x="520.100"
                      y="450"
                      fontSize="12"
                      textAnchor="middle"
                      fill="white"
                      fontFamily="Arial, sans-serif"
                      className="hide-text-network"
                    >
                      <tspan x="507" dy="0">
                        Connect with professional real
                      </tspan>
                      <tspan x="507" dy="15">
                        estate agents who can guide
                      </tspan>
                      <tspan x="507" dy="15">
                        you through buying, selling,
                      </tspan>
                      <tspan x="507" dy="15">
                        or renting properties
                      </tspan>
                      <tspan x="507" dy="15">
                        efficiently.
                      </tspan>
                    </text>
                  </g>

                  <g className="hover-rect-out-side">
                    <rect
                      x="400.200"
                      y="101.338"
                      width="118.693"
                      height="29.7931"
                      rx="14.8966"
                      fill="transparent"
                      stroke="white"
                      strokeWidth="2"
                      fillOpacity={1}
                      className="hover-rect-out-side"
                      z={100}
                    />
                    <text
                      x="460.100"
                      y="120"
                      fontSize="12"
                      textAnchor="middle"
                      fill="white"
                      fontFamily="Arial, sans-serif"
                      className="animated-text"
                    >
                      Finance Solutions
                    </text>
                    <text
                      x="500.100"
                      y="160"
                      fontSize="12"
                      textAnchor="middle"
                      fill="white"
                      fontFamily="Arial, sans-serif"
                      className="hide-text-out-side"
                    >
                      <tspan x="500" dy="0">
                        Explore mortgage calculators,
                      </tspan>
                      <tspan x="500" dy="15">
                        loan options, and expert advice
                      </tspan>
                      <tspan x="500" dy="15">
                        to make informed financial
                      </tspan>
                      <tspan x="500" dy="15">
                        decisions for your
                      </tspan>
                      <tspan x="500" dy="15">
                        real estate journey.
                      </tspan>
                    </text>
                  </g>

                  <g className="hover-rect-tours">
                    <rect
                      x="80.200"
                      y="160.338"
                      width="118.693"
                      height="29.7931"
                      rx="14.8966"
                      fill="transparent"
                      stroke="white"
                      strokeWidth="2"
                      fillOpacity={1}
                      className="hover-rect-tours"
                      z={100}
                    />
                    <text
                      x="140"
                      y="180.338"
                      fontSize="12"
                      textAnchor="middle"
                      fill="white"
                      fontFamily="Arial, sans-serif"
                      className="animated-text"
                    >
                      Virtual Tours
                    </text>
                    <text
                      x="150"
                      y="220"
                      fontSize="12"
                      textAnchor="middle"
                      fill="white"
                      fontFamily="Arial, sans-serif"
                      className="hide-text-tours"
                    >
                      <tspan x="180" dy="0">
                        Experience properties online
                      </tspan>
                      <tspan x="180" dy="15">
                        with immersive 360-degree
                      </tspan>
                      <tspan x="180" dy="15">
                        virtual tours, detailed imagery,
                      </tspan>
                      <tspan x="180" dy="15">
                        and live walk-throughs for
                      </tspan>
                      <tspan x="180" dy="15">
                        convenience
                      </tspan>
                    </text>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
