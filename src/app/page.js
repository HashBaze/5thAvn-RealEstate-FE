"use client";
import Image from "next/image";
import "./page.module.css";
import "./globals.css";

import VideoOne from "./components/modalVideo/videoOne";
import IndexThreeSlider from "./components/indexThreeSlider";
import ScrollTop from "./components/scrollTop";
import FeaturedProperties from "./components/featuredProperties";
import UseScroll from "./hooks/UseScroll";
import Searchbar from "./components/searchbar";
import { WhoWeAre } from "./components/whoWeAre";
import { Subscribe } from "./components/subscribe";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Testimonials from "./components/testimonials";
import { useEffect, useState } from "react";
import {
  getAllSuburb,
  getPropertyByFilter,
  getPropertys,
} from "./service/propertyService";
import Spinner from "./components/spinner";

export default function Home() {
  const isScrolled = UseScroll();

  const filer = (data) => {
    setLoading(true);
    getPropertyByFilter(data)
      .then((res) => {
        setPropertyData(res.edges);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [loading, setLoading] = useState(false);
  const [propertyData, setPropertyData] = useState([]);
  const [suburb, setSuburb] = useState([]);

  const fetchData = (data) => {
    setLoading(true);
    getPropertys(data).then((data) => {
      setPropertyData(data.properties.edges);
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchData({
      first: 6,
      after: null,
    });
    getAllSuburb().then((data) => {
      setSuburb(data);
    });
  }, []);

  return (
    <div
      className="overflow-hidden"
      style={{
        width: "100vw",
      }}
    >
      {loading && <Spinner />}
      <Navbar
        navClass="defaultscroll sticky"
        menuClass="navigation-menu nav-left"
        scrolled={isScrolled}
      />
      <IndexThreeSlider />
      <section className="section w-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
              <div className="about-left">
                <div className="position-relative shadow p-2 rounded-top-pill rounded-5 bg-white img-one">
                  <Image
                    src="/images/hero.jpg"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                    className="img-fluid rounded-top-pill rounded-5"
                    alt=""
                  />

                  <VideoOne />

                  <div className="position-absolute top-0 start-0 z-n1">
                    <Image
                      src="/images/svg/dots.svg"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                      className="avatar avatar-xl-large"
                      alt=""
                    />
                  </div>
                </div>

                <div className="img-two shadow rounded-3 overflow-hidden p-2 bg-white">
                  <Image
                    src="/images/1.jpg"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                    className="img-fluid rounded-3"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
              <div className="section-title ms-lg-5">
                <h4 className="text-primary fw-medium mb-2">
                  Purpose of the company
                </h4>
                <p className="text-muted para-desc mb-0">
                  Looking to buy or sell a property? Our trusted real estate
                  agency is here to help! With years of industry experience, we
                  assist with every step—finding the right home, negotiating the
                  best price, and ensuring a smooth closing process. Whether
                  it's a house, apartment, or condo, our expert agents know the
                  local market and are ready to guide you. Visit our website to
                  explore listings or contact us today for all your real estate
                  needs!
                </p>
              </div>
            </div>
          </div>
        </div>

        <Searchbar filter={filer} suburb={suburb}/>

        <div className="container">
          <FeaturedProperties propertyData={propertyData}  />
        </div>

        <div className="mt-100">
          <WhoWeAre />
        </div>

        <div className="container mt-100 mt-60">
          <Testimonials />
        </div>

        <Subscribe />
      </section>
      <Footer />
      <ScrollTop />
    </div>
  );
}
