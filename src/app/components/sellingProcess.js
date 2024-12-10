import Link from "next/link";
import React from "react";
import Navbar from "./navbar";
import UseScroll from "../hooks/UseScroll";
import Footer from "./footer";

export default function SellingProcess() {
  const isScrolled = UseScroll();
  const steps = [
    {
      title: "1. Initial Consultation:",
      description:
        "We start with a discussion to understand your goals and property details, laying the foundation for an in-depth, in-person meeting.",
    },
    {
      title: "2. Property Visit:",
      description:
        "Our agent visits your home to assess its features, discuss your objectives, and provide insights into its market appeal.",
    },
    {
      title: "3. Listing Proposal Preparation:",
      description:
        "Using a comparative market analysis, we determine an optimal listing price based on your property’s condition, recent sales, local trends, and other factors.",
    },
    {
      title: "4. Proposal Presentation:",
      description:
        "We present a detailed market analysis, your home’s estimated value, and a customized marketing plan tailored to your property.",
    },
    {
      title: "5. Signing the Agreement:",
      description:
        "Partner with us by signing an exclusive sales or auction authority agreement, officially starting your selling journey.",
    },
    {
      title: "6. Property Preparation:",
      description:
        "Receive expert advice on repairs, improvements, and staging to maximize your home’s appeal to potential buyers.",
    },
    {
      title: "7. Professional Photography & Videography:",
      description:
        "High-quality images and videos highlight your property’s best features, enhancing its visibility across marketing platforms.",
    },
    {
      title: "8. Marketing Campaign Launch:",
      description:
        "We deploy a strategic marketing plan, leveraging online platforms, social media, print media, and more to attract a wide audience.",
    },
    {
      title: "9. Open Houses & Inspections:",
      description:
        "Host open houses and private viewings, showcasing your property’s unique qualities to prospective buyers.",
    },
    {
      title: "10. Buyer Feedback & Updates:",
      description:
        "Stay informed with regular updates on buyer interest and feedback throughout the selling process.",
    },
    {
      title: "11. Negotiation Expertise:",
      description:
        "Our skilled agents handle offers on your behalf, ensuring you achieve the best price and terms.",
    },
    {
      title: "12. Contract Assistance:",
      description:
        "We assist with preparing and reviewing all necessary documents for a seamless transaction.",
    },
    {
      title: "13. Settlement Coordination:",
      description:
        "Our team works with all involved parties to ensure a smooth settlement process.",
    },
    {
      title: "14. Post-Sale Support:",
      description:
        "Even after the sale, we’re here to assist with any questions or additional needs.",
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
        style={{ backgroundImage: "url('/images/bg/01.jpg')" }}
      >
        <div className="bg-overlay bg-gradient-overlay-2"></div>
        <div className="container">
          <div className="row mt-5 justify-content-center">
            <div className="col-12">
              <div className="title-heading text-center">
                <h5 className="heading fw-semibold mb-0 sub-heading text-white title-dark">
                  our property selling <br />
                  PROCESS
                </h5>
              </div>
            </div>
          </div>
          <div className="position-middle-bottom">
            <nav aria-label="breadcrumb" className="d-block">
              <ul className="breadcrumb breadcrumb-muted mb-0 p-0">
                <li className="breadcrumb-item">
                  <Link href="/">5th avenue</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Selling Process
                </li>
              </ul>
            </nav>
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

      <section className="d-flex justify-content-center position-relative">
        <section className="background-container mt-5 row justify-content-center bg-desktop">
          <div className="col-12 col-lg-6 text-center content-left">
            <div className="title-heading">
              <p className="title-dark mt-5">
                Your Home Sale, Simplified with <br />
                5th Avenue Real Estate
              </p>
            </div>
          </div>

          <div className="ring-animation mt-5"></div>

          <div className="col-12 col-lg-6 text-center content-right border-col">
            <div className="title-heading">
              <p id="description">
                Selling your home is a significant milestone, and at 5th Avenue{" "}
                <br />
                Real Estate Property Group, we aim to make the journey smooth,{" "}
                <br />
                stress-free, and rewarding. Our expertly crafted 14-step process{" "}
                <br />
                ensures transparency, professionalism, and exceptional results{" "}
                <br />
                every step of the way.
              </p>
            </div>
          </div>
        </section>
      </section>

      <section className="container mt-100">
      <h1 className="text-center">Our 14-Step Selling Process</h1>
      </section>

      <section className="container">
        <section className="row m-5">
          {steps.map((step, index) => (
            <div key={index} className="col-12 col-lg-6 p-3">
              <div className="title-heading">
                <h5 className="heading fw-semibold mb-0 sub-heading title-dark">
                  {step.title}
                </h5>
                <p className="text-muted mt-3">{step.description}</p>
              </div>
            </div>
          ))}
        </section>
      </section>

      <section className="container ">
        <p>
          At 5th Avenue Real Estate Property Group, we are dedicated to <br />
          delivering exceptional service, outstanding results, and a<br />
          home-selling experience that exceeds your expectations. Let’s make
          <br />
          your next move your best move!
        </p>
      </section>
      <Footer />
    </>
  );
}
