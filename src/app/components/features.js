"use client";

import React, { useState } from "react";
import Navbar from "./navbar";
import UseScroll from "../hooks/UseScroll";
import { Link as Link2 } from "react-scroll";

import {
  FiDollarSign,
  FiHeart,
  FiHexagon,
  FiMapPin,
  FiPieChart,
  FiShield,
  FiStar,
} from "react-icons/fi";
import Link from "next/link";
import CountUp from "react-countup";
import { ClientFeedBacks } from "./clientFeedBacks";
import Footer from "./footer";
import ScrollTop from "./scrollTop";

export default function Features() {
  const isScrolled = UseScroll();
  let [activeIndex, setActiveIndex] = useState(1);
  let [activeIndex1, setActiveIndex1] = useState(1);
  let [activeIndex2, setActiveIndex2] = useState(1);
  let [activeIndex3, setActiveIndex3] = useState(1);

  let accordianData = [
    {
      id: 1,
      title: "How does it work ?",
      desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    },
    {
      id: 2,
      title: "Do I need a designer to use Towntor ?",
      desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    },
    {
      id: 3,
      title: "What do I need to do to start selling ?",
      desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    },
    {
      id: 4,
      title: "What happens when I receive an order ?",
      desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    },
  ];

  let featureData = [
    {
      icon: FiHeart,
      title: "Comfortable",
      desc: "If the distribution of letters and 'words' is random, the reader will not be distracted from making.",
    },
    {
      icon: FiShield,
      title: "Extra Security",
      desc: "If the distribution of letters and 'words' is random, the reader will not be distracted from making.",
    },
    {
      icon: FiStar,
      title: "Luxury",
      desc: "If the distribution of letters and 'words' is random, the reader will not be distracted from making.",
    },
    {
      icon: FiDollarSign,
      title: "Best Price",
      desc: "If the distribution of letters and 'words' is random, the reader will not be distracted from making.",
    },
    {
      icon: FiMapPin,
      title: "Stratagic Location",
      desc: "If the distribution of letters and 'words' is random, the reader will not be distracted from making.",
    },
    {
      icon: FiPieChart,
      title: "Efficient",
      desc: "If the distribution of letters and 'words' is random, the reader will not be distracted from making.",
    },
  ];
  return (
    <>
      <Navbar
        navClass="defaultscroll sticky"
        menuClass="navigation-menu nav-left"
        scrolled={isScrolled}
      />
      <section
        className="bg-half-170 d-table w-100"
        style={{ backgroundImage: "url('/images/bg/03.jpg')" }}
      >
        <div className="bg-overlay bg-gradient-overlay-2"></div>
        <div className="container">
          <div className="row mt-5 justify-content-center">
            <div className="col-12">
              <div className="title-heading text-center">
                <p className="text-white-50 para-desc mx-auto mb-0">Benefits</p>
                <h5 className="heading fw-semibold mb-0 sub-heading text-white title-dark">
                  Services / Features
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="position-relative">
        <div className="shape overflow-hidden text-white">
          <svg
            viewBox="0 0 2880 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>

      <div className="container mt-100 mb-5">
        <div className="row g-4">
          {featureData.map((item, index) => {
            let Icon = item.icon;
            return (
              <div className="col-md-4" key={index}>
                <div className="position-relative features text-center mx-lg-4 px-md-1">
                  <div className="feature-icon position-relative overflow-hidden d-flex justify-content-center">
                    <FiHexagon className="hexagon" />
                    <div className="position-absolute top-50 start-50 translate-middle">
                      <Icon className="fea icon-m-md text-primary" />
                    </div>
                  </div>

                  <div className="mt-4">
                    <Link href="" className="fw-medium title text-dark fs-5">
                      {item.title}
                    </Link>
                    <p className="text-muted mt-3 mb-0">{item.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="container mt-100">
        <div className="container-fluid bg-building-pic mt-100 mt-60">
          <div
            className=" opacity-25 position-absolute w-100 h-100 top-0 start-0"
            style={{
              backgroundImage: "url('/images/map.png')",
              backgroundPosition: "center",
            }}
          ></div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col">
                <div className="section-title text-center mb-4 pb-2">
                  <h4 className="title mb-3">Trusted by more than 10K users</h4>
                  <p className="text-muted para-desc mb-0 mx-auto">
                    A great plateform to buy, sell and rent your properties
                    without any agent or commisions.
                  </p>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-4 py-3">
                <div className="counter-box text-center">
                  <h1 className="mb-0 fw-semibold">
                    <CountUp start={0} end={1548} className="counter-value" />+
                  </h1>
                  <h6 className="counter-head text-muted fw-normal">
                    Investment
                  </h6>
                </div>
              </div>

              <div className="col-4 py-3">
                <div className="counter-box text-center">
                  <h1 className="mb-0 fw-semibold">
                    <CountUp start={0} end={25} className="counter-value" />+
                  </h1>
                  <h6 className="counter-head text-muted fw-normal">Awards</h6>
                </div>
              </div>

              <div className="col-4 py-3">
                <div className="counter-box text-center">
                  <h1 className="mb-0 fw-semibold">
                    <CountUp start={0} end={9} className="counter-value" />+
                  </h1>
                  <h6 className="counter-head text-muted fw-normal">
                    Profitability
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-100">
        <div className="row justify-content-center">
          <div className="col">
            <div className="section-title text-center mb-4 pb-2">
              <h4 className="title mb-3">What Our Client Say ?</h4>
              <p className="text-muted para-desc mb-0 mx-auto">
                A great plateform to buy, sell and rent your properties without
                any agent or commisions.
              </p>
            </div>
          </div>
        </div>

        <ClientFeedBacks />
      </div>

      <div className="mt-100 container">
        <div className="row justify-content-center">
          <div className="col">
            <div className="section-title text-center mb-4 pb-2">
              <h4 className="title mb-3">Questions & Answers</h4>
              <p className="text-muted para-desc mb-0 mx-auto">
                Frequently Asked Questions
              </p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center mt-100">
          <div className="col-lg-4 col-md-5 col-12 d-none d-md-block">
            <div className="rounded-3 shadow p-4 sticky-bar">
              <ul
                className="list-unstyled sidebar-nav mb-0 py-0"
                id="navmenu-nav"
              >
                <li className="navbar-item p-0">
                  <Link2
                    to="tech"
                    spy={true}
                    activeclassname="active"
                    smooth={true}
                    duration={500}
                    className="h6 text-dark navbar-link"
                  >
                    Buying Questions
                  </Link2>
                </li>
                <li className="navbar-item mt-3 p-0">
                  <Link2
                    to="general"
                    spy={true}
                    activeclassname="active"
                    smooth={true}
                    duration={500}
                    className="h6 text-dark navbar-link"
                  >
                    General Questions
                  </Link2>
                </li>
                <li className="navbar-item mt-3 p-0">
                  <Link2
                    to="payment"
                    spy={true}
                    activeclassname="active"
                    smooth={true}
                    duration={500}
                    className="h6 text-dark navbar-link"
                  >
                    Payments Questions
                  </Link2>
                </li>
                <li className="navbar-item mt-3 p-0">
                  <Link2
                    to="support"
                    spy={true}
                    activeclassname="active"
                    smooth={true}
                    duration={500}
                    className="h6 text-dark navbar-link"
                  >
                    Support Questions
                  </Link2>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-8 col-md-7 col-12">
            <div id="tech">
              <div className="section-title">
                <h4>Buying Product</h4>
              </div>

              <div className="accordion mt-4 pt-2" id="buyingquestion">
                {accordianData.map((item, index) => {
                  return (
                    <div className="accordion-item rounded-3 mb-3" key={index}>
                      <h2 className="accordion-header" id="headingOne">
                        <button
                          className={`accordion-button border-0 bg-light ${
                            activeIndex === item.id ? "active" : ""
                          }`}
                          onClick={() => setActiveIndex(item.id)}
                        >
                          {item.title}
                        </button>
                      </h2>
                      {activeIndex === item.id && (
                        <div
                          id="collapseOne"
                          className="accordion-collapse border-0"
                        >
                          <div className="accordion-body text-muted">
                            {item.desc}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
            <div id="general">
              <div className="section-title mt-5">
                <h4>General Questions</h4>
              </div>

              <div className="accordion mt-4 pt-2" id="generalquestion">
                {accordianData.map((item, index) => {
                  return (
                    <div className="accordion-item rounded-3 mb-3" key={index}>
                      <h2 className="accordion-header" id="headingOne">
                        <button
                          className={`accordion-button border-0 bg-light ${
                            activeIndex1 === item.id ? "active" : ""
                          }`}
                          onClick={() => setActiveIndex1(item.id)}
                        >
                          {item.title}
                        </button>
                      </h2>
                      {activeIndex1 === item.id && (
                        <div
                          id="collapseOne"
                          className="accordion-collapse border-0"
                        >
                          <div className="accordion-body text-muted">
                            {item.desc}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
            <div id="payment">
              <div className="section-title mt-5">
                <h4>Payments Questions</h4>
              </div>

              <div className="accordion mt-4 pt-2" id="paymentquestion">
                {accordianData.map((item, index) => {
                  return (
                    <div className="accordion-item rounded-3 mb-3" key={index}>
                      <h2 className="accordion-header" id="headingOne">
                        <button
                          className={`accordion-button border-0 bg-light ${
                            activeIndex2 === item.id ? "active" : ""
                          }`}
                          onClick={() => setActiveIndex2(item.id)}
                        >
                          {item.title}
                        </button>
                      </h2>
                      {activeIndex2 === item.id && (
                        <div
                          id="collapseOne"
                          className="accordion-collapse border-0"
                        >
                          <div className="accordion-body text-muted">
                            {item.desc}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
            <div id="support">
              <div className="section-title mt-5">
                <h4>Support Questions</h4>
              </div>

              <div className="accordion mt-4 pt-2" id="supportquestion">
                {accordianData.map((item, index) => {
                  return (
                    <div className="accordion-item rounded-3 mb-3" key={index}>
                      <h2 className="accordion-header" id="headingOne">
                        <button
                          className={`accordion-button border-0 bg-light ${
                            activeIndex3 === item.id ? "active" : ""
                          }`}
                          onClick={() => setActiveIndex3(item.id)}
                        >
                          {item.title}
                        </button>
                      </h2>
                      {activeIndex3 === item.id && (
                        <div
                          id="collapseOne"
                          className="accordion-collapse border-0"
                        >
                          <div className="accordion-body text-muted">
                            {item.desc}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-100">
        <Footer />
        <ScrollTop />
      </div>
    </>
  );
}
