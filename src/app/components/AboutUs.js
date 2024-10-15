"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "./Navbar";
import Image from "next/image";
import { FiHexagon, FiHome, FiBriefcase, FiKey } from "../assets/icons/vander";
import { FiFacebook, FiInstagram, FiTwitter } from "../assets/icons/vander";
import Link from "next/link";
import { teamData, blogData } from "../data/data";
import Footer from "./Footer";
import Searchbar from "./Searchbar";
import TextAnimation from "./TextAnimation";
import { TypeAnimation } from "react-type-animation";
import UseScroll from "../hooks/UseScroll";

export const AboutUs = () => {
  const router = useRouter();

  let aboutData = [
    {
      icon: FiHome,
      title: "Company Background",
      desc: "If the distribution of letters and words  is random, the reader will not be distracted from making.",
    },
    {
      icon: FiBriefcase,
      title: "Experiences in the field",
      desc: "If the distribution of letters and words  is random, the reader will not be distracted from making.",
    },
    {
      icon: FiKey,
      title: "Expertise",
      desc: "If the distribution of letters and words  is random, the reader will not be distracted from making.",
    },
  ];
  const isScrolled = UseScroll();
  const navigateViewPage = (id) => {
    router.push(`/aboutus/viewmember?id=${id}`);
  };

  const navigateContact = ()=>{
    router.push(`/contactus`);
  }

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
                <p className="text-white-50 para-desc mx-auto mb-0">
                  Our story: 5th Avenue
                </p>
                <h5 className="heading fw-semibold mb-0 sub-heading text-white title-dark">
                  About Us
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
      <section className="">
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
                <h6 className="text-primary fw-medium mb-2">
                  Our story: 5th Avenue
                </h6>
                <p className="text-muted para-desc mb-0">
                  Para: Looking for a real estate agency in your area? Look no
                  further than the trusted experts at our agency! With years of
                  experience in the real estate industry, our agents are
                  equipped to help you buy or sell your home. We‘ll work with
                  you to find the perfect property, negotiate the best price,
                  and help you through the closing process. Contact us today to
                  get started!
                </p>

                <p className="text-muted para-desc mb-0 mt-5">
                  We are a full–service real estate agency, meaning we can help
                  you with every step of buying or selling a home. We have a
                  wide range of properties listed on our website, from houses to
                  apartments to condos. And, our agents are knowledgeable about
                  the local market, so they can help you find the perfect home
                  for your needs. Give us a call today and let us help you with
                  all your real estate needs!
                </p>
              </div>
            </div>
          </div>
        </div>

        <section className="container">
          <div className="row justify-content-center mt-100">
            <div className="col">
              <div className="section-title text-center mb-4 pb-2">
                <h4 className="title mb-3">How It Works</h4>
                <p className="text-muted para-desc mb-0 mx-auto">
                  A great plateform to buy, sell and rent your properties
                  without any agent or commisions.
                </p>
              </div>
            </div>
          </div>

          <div className="row g-4 mt-0">
            {aboutData.map((item, index) => {
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
                      <Link href="#" className="fw-medium title text-dark fs-5">
                        {item.title}
                      </Link>
                      <p className="text-muted mt-3 mb-0">{item.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="container mt-100">
          <div className="row justify-content-center">
            <div className="col-12 col-md-6 col-lg-6">
              <div className="section-title text-center mb-4 pb-2">
                <h4 className="title text-primary mb-3">Vision</h4>
                <p className="text-dark para-desc mb-0 mx-auto border p-3 rounded">
                  Para: Looking for a real estate agency in your area? Look no
                  further than the trusted experts at our agency! With years of
                  experience in the real estate industry, our agents are
                  equipped to help you buy or sell your home. We‘ll work with
                  you to find the perfect property, negotiate the best price,
                  and help you through the closing process. Contact us today to
                  get started!
                </p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-6">
              <div className="section-title text-center mb-4 pb-2">
                <h4 className="title text-primary mb-3">Mission</h4>
                <p className="text-dark para-desc mb-0 mx-auto border p-3 rounded">
                  Para: Looking for a real estate agency in your area? Look no
                  further than the trusted experts at our agency! With years of
                  experience in the real estate industry, our agents are
                  equipped to help you buy or sell your home. We‘ll work with
                  you to find the perfect property, negotiate the best price,
                  and help you through the closing process. Contact us today to
                  get started!
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="container mt-100 mt-60">
          <div className="row justify-content-center">
            <div className="col">
              <div className="section-title text-center mb-4 pb-2">
                <h4 className="title mb-3">About Team Members</h4>
                <p className="text-muted para-desc mb-0 mx-auto">
                  A great plateform to buy, sell and rent your properties
                  without any agent or commisions.
                </p>
              </div>
            </div>
          </div>

          <div className="row g-4 mt-0">
            {teamData.map((item, index) => {
              return (
                <div
                  onClick={() => {
                    navigateViewPage(item.id);
                  }}
                  className="col-lg-4 col-md-4 col-12"
                  style={{
                    cursor: "pointer",
                  }}
                  key={index}
                >
                  <div className="card team team-primary text-center">
                    <div className="card-img team-image d-inline-block mx-auto rounded-pill avatar avatar-ex-large overflow-hidden">
                      <Image
                        src={item.image}
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "auto" }}
                        className="img-fluid"
                        alt=""
                      />
                      <div className="card-overlay avatar avatar-ex-large rounded-pill"></div>

                      <ul className="list-unstyled team-social mb-0">
                        <li className="list-inline-item">
                          <Link
                            href="#"
                            className="btn btn-sm btn-pills btn-icon"
                          >
                            <FiFacebook className="icons fea-social" />
                          </Link>
                        </li>
                        <li className="list-inline-item">
                          <Link
                            href="#"
                            className="btn btn-sm btn-pills btn-icon"
                          >
                            <FiInstagram className="icons fea-social" />
                          </Link>
                        </li>
                        <li className="list-inline-item">
                          <Link
                            href="#"
                            className="btn btn-sm btn-pills btn-icon"
                          >
                            <FiTwitter className="icons fea-social" />
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div className="content mt-3">
                      <Link
                        href="/page-team-detail"
                        className="text-dark h5 mb-0 title"
                      >
                        {item.name}
                      </Link>
                      <h6 className="text-muted mb-0 fw-normal">
                        {item.title}
                      </h6>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="container mt-100">
          <div className="row justify-content-center">
            <div className="col">
              <div className="section-title text-center mb-4 pb-2">
                <h4 className="title mb-3">Blogs and News</h4>
                <p className="text-muted para-desc mb-0 mx-auto">
                  A great plateform to buy, sell and rent your properties
                  without any agent or commisions.
                </p>
              </div>
            </div>
          </div>

          <div className="row g-4 mt-0">
            {blogData.slice(0, 3).map((item, index) => {
              return (
                <div className="col-lg-4 col-md-6" key={index}>
                  <div className="card blog blog-primary shadow rounded-3 overflow-hidden border-0">
                    <div className="card-img blog-image position-relative overflow-hidden rounded-0">
                      <div className="position-relative overflow-hidden">
                        <Image
                          src={item.image}
                          width={0}
                          height={0}
                          sizes="100vw"
                          style={{ width: "100%", height: "auto" }}
                          className="img-fluid"
                          alt="Townter"
                        />
                        <div className="card-overlay"></div>
                      </div>

                      <div className="blog-tag p-3">
                        <Link href="" className="badge bg-primary">
                          {item.tag}
                        </Link>
                      </div>
                    </div>

                    <div className="card-body content p-0">
                      <div className="p-4">
                        <Link
                          href={`/blog-detail/${item.id}`}
                          className="title fw-medium fs-5 text-dark"
                        >
                          {item.title}
                        </Link>
                        <p className="text-muted mt-2">{item.desc}</p>

                        <Link href="" className="text-dark read-more">
                          Read More{" "}
                          <i className="mdi mdi-chevron-right align-middle"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="mt-100">
          <section className="position-relative mt-5 pt-4">
            <div className="px-md-4 px-2 mt-2">
              <div
                className="bg-home-one container-fluid d-table shadow rounded-3 overflow-hidden"
                id="home"
              >
                <div
                  className="bg-overlay image-wrap "
                  id="hero-images"
                  style={{
                    backgroundImage: "url('/images/bg/02.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                    width: "100vw",
                  }}
                ></div>
                <div className="bg-overlay bg-black opacity-50"></div>

                <div className="container">
                  <div className="row justify-content-center align-items-center">
                    <div className="col-12">
                      <div className="title-heading">
                        <h4 className="heading fw-bold text-white title-dark mb-3">
                          We will help you find <br /> your
                          <TypeAnimation
                            sequence={["Wonderful", 1000, "Dream", 1000]}
                            wrapper="span"
                            speed={5}
                            repeat={Infinity}
                            className="typewrite text-primary ms-2"
                            cursor={false}
                          />{" "}
                          home
                        </h4>
                        <p className="para-desc text-white title-dark mb-0">
                          A great plateform to buy, sell and rent your
                          properties without any agent or commisions.
                        </p>
                      </div>
                      <button
                      onClick={navigateContact}
                      className="btn btn-primary mt-4 sm-w-50 lg-w-25">
                        Contact Us
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>

        <div className="mt-100">
          <Footer />
        </div>
      </section>
    </>
  );
};
