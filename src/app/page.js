"use client";
import "./page.module.css";
import "./globals.css";
import "aos/dist/aos.css";

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
import { getAllSuburb, getPropertyByFilter } from "./service/propertyService";
import Spinner from "./components/spinner";
import LandingPageHeader from "./components/landingPageHeader";
import AOS from "aos";

export default function Home() {
  const isScrolled = UseScroll();

  useEffect(() => {
    if (typeof window !== "undefined") {
      AOS.init({
        duration: 1000,
        offset: 100,
        delay: 60,
        easing: "ease-in-out",
      });
    }
  }, []);

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
    getPropertyByFilter(data).then((data) => {
      setPropertyData(data.edges);
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchData({
      isSelected: "Sale",
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
      <LandingPageHeader />
      <section className="section w-100">
        <div className="container-fluid p-5">
          <div className="row justify-content-between">
            <div className="col-lg-6 col-md-6 col-12">
              <h1 className="display-5">Our Purpose</h1>
            </div>
          </div>
          <div className="row g-2 mt-5">
            <div className="col-lg-3 col-md-6 col-12" data-aos="fade-right">
              <div className="border rounded-4 shadow-lg card1 p-5">
                <a className="" href="#">
                  <h3 className="cardH3">1. Property Listings</h3>
                  <p className="small small-p mt-3">
                    Browse a wide selection of residential and commercial
                    properties to find your dream home or ideal investment.
                  </p>
                  <div className="go-corner" href="#">
                    <div className="go-arrow">→</div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12" data-aos="fade-up">
              <div className="border rounded-4 shadow-lg card1 p-5">
                <a className="" href="#">
                  <h3 className="cardH3">2. Mortgage Services</h3>
                  <p className="small small-p mt-3">
                    Access mortgage calculators, loan options, and expert advice
                    to make informed decisions for your property purchase.
                  </p>
                  <div className="go-corner" href="#">
                    <div className="go-arrow">→</div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12" data-aos="fade-down">
              <div className="border rounded-4 shadow-lg card1 p-5">
                <a className="" href="#">
                  <h3 className="cardH3">3. Market Trends</h3>
                  <p className="small small-p mt-3">
                    Stay updated with the latest market trends, property values,
                    and neighborhood insights to make smarter real estate
                    investments.
                  </p>
                  <div className="go-corner" href="#">
                    <div className="go-arrow">→</div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12" data-aos="fade-left">
              <div className="border rounded-4 shadow-lg card1 p-5">
                <a className="" href="#">
                  <h3 className="cardH3">4. Real Estate Agents</h3>
                  <p className="small small-p mt-3">
                    Connect with experienced real estate agents who can guide
                    you through buying, selling, or renting properties.
                  </p>
                  <div className="go-corner" href="#">
                    <div className="go-arrow">→</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <Searchbar filter={filer} suburb={suburb} />

        <div className="container">
          <FeaturedProperties
            propertyData={propertyData}
            filter={filer}
            suburb={suburb}
          />
        </div>

        <div className="mt-100" data-aos="fade-right">
          <WhoWeAre />
        </div>

        <div className="container mt-100 mt-60" data-aos="fade-up">
          <Testimonials />
        </div>

        <Subscribe />
      </section>
      <Footer />
      <ScrollTop />
    </div>
  );
}
