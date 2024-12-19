import React, { useRef, useState } from "react";
import UseScroll from "../hooks/UseScroll";
import Navbar from "./navbar";
import Link from "next/link";
import Footer from "./footer";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import Spinner from "./spinner";
import { sendRentalAppreisal } from "../service/mailService";

export default function RentalApparaisal() {
  const isScrolled = UseScroll();
  const form = useRef();
  const [loadig, setLoading] = useState(false);

  const [email, setEmail] = useState({
    email: "",
    name: "",
    phoneNumber: "",
    postCode: "",
    suburb: "",
    streetAddress: "",
    bedRooms: "",
    carSpace: "",
    bathroom: "",
    additionalDetails: "",
    additionalMessage: "",
  });

  const sendEmail = (e) => {
    setLoading(true);
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      console.log(validationErrors);
      setErrors(validationErrors);
      setLoading(false);
    } else {
      setErrors({});
      sendRentalAppreisal(email).then((res) => {
        setLoading(false);
        Swal.fire({
          icon: "success",
          title: "Email Sent",
          text: "Your email has been sent successfully",
        });
        form.current.reset();
      });
    }
  };

  const [errors, setErrors] = useState({});

  const validate = () => {
    let formErrors = {};

    if (!email.name.trim()) {
      formErrors.name = "Name is required";
    }

    if (!email.email) {
      formErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email.email)) {
      formErrors.email = "Email address is invalid";
    }

    if (!email.phoneNumber) {
      formErrors.phoneNumber = "Phone number is required";
    }

    if (!email.streetAddress) {
      formErrors.streetAddress = "Street Address is required";
    }

    if (!email.suburb) {
      formErrors.suburb = "Suburb is required";
    }

    if (!email.postCode) {
      formErrors.postCode = "Post Code is required";
    }

    if (!email.bathroom) {
      formErrors.bathroom = "Bathroom is required";
    }

    if (!email.bedRooms) {
      formErrors.bedRooms = "Bedrooms is required";
    }

    if (!email.additionalDetails) {
      formErrors.additionalDetails = "Additional Details is required";
    }

    return formErrors;
  };

  return (
    <div className="mt-100">
      {loadig && <Spinner />}
      <Navbar
        navClass="defaultscroll sticky"
        menuClass="navigation-menu nav-left"
        scrolled={isScrolled}
      />

      <section
        className="bg-half-170 d-table w-100"
        style={{ backgroundImage: "url('/images/bg/04.jpg')" }}
      >
        <div className="bg-overlay bg-gradient-overlay-2"></div>
        <div className="container">
          <div className="row mt-5 justify-content-center">
            <div className="col-12">
              <div className="title-heading text-center">
                <h5 className="heading fw-semibold mb-0 sub-heading text-white title-dark">
                  Rental Appraisal
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
                  Rental Appraisal
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

      <section
        className="bg-header-1 d-table h-100 w-100 d-flex justify-content-center"
        style={{ backgroundImage: "url('/images/bg.png')" }}
      >
        <p
          className="text-center ms-4 text-animation header-main"
          style={{
            color: "black",
            fontSize: "6rem",
            fontWeight: "bold",
          }}
        >
          <span>If your rental</span>
          <span>property is your most</span>
          <span className="rotate-text d-flex">
            <span className="text-primary">GREATEST</span>&nbsp;ASSET,
          </span>
        </p>
      </section>
      <section className="container">
        <p
          className="text-center text-rent-second"
          style={{ color: "black", textAlign: "center" }}
        >
          if you're seeking a true partner to manage your rental property, we’re{" "}
          <br />
          the agency you’ve been searching for.
        </p>
      </section>

      <section
        className="bg-half-100 d-flex justify-content-center"
        style={{ backgroundImage: "url('/images/Web_line_p46.png')" }}
      >
        <div className="ring"></div>
      </section>

      <div className="container">
        <h3 className="text-center">
          Tell us about your rental property!
        </h3>

        <p className="text-center">
          Complete the form below to request a free appraisal and receive a
          <br className="d-none d-md-block d-lg-block" />
          detailed report on your property's current market value. Our property
          <br className="d-none d-md-block d-lg-block" />
          experts will evaluate your rental using recent comparable rentals,
          local <br className="d-none d-md-block d-lg-block" />
          market trends, and relevant data to provide you with a comprehensive,
          <br className="d-none d-md-block d-lg-block" />
          free analysis of its rental value and a suggested rental price.
        </p>
      </div>

      <h3 className="text-center mt-100">RENTAL APPRAISAL REQUEST FORM</h3>

      <div className="row justify-content-center mt-5">
        <div className="col-lg-8">
          <div className="p-4 rounded-3 shadow">
            <form ref={form}>
              <div className="row">
                <div className="col-md-4">
                  <div className="mb-3">
                    <label className="form-label">
                      Your Name <span className="text-danger">*</span>
                    </label>
                    <input
                      onChange={(e) =>
                        setEmail({ ...email, name: e.target.value })
                      }
                      name="name"
                      id="name"
                      type="text"
                      value={email.name}
                      className="form-control"
                      placeholder="Name :"
                    />
                    {errors.name && (
                      <small className="text-danger">{errors.name}</small>
                    )}
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="mb-3">
                    <label className="form-label">
                      Your Email <span className="text-danger">*</span>
                    </label>
                    <input
                      onChange={(e) =>
                        setEmail({ ...email, email: e.target.value })
                      }
                      name="email"
                      id="email"
                      value={email.email}
                      type="email"
                      className="form-control"
                      placeholder="Email :"
                    />
                    {errors.email && (
                      <small className="text-danger">{errors.email}</small>
                    )}
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="mb-3">
                    <label className="form-label">
                      Your Phone Number <span className="text-danger">*</span>
                    </label>
                    <input
                      onChange={(e) =>
                        setEmail({
                          ...email,
                          phoneNumber: e.target.value,
                        })
                      }
                      name="email"
                      id="email"
                      value={email.phoneNumber}
                      type="tel"
                      className="form-control"
                      placeholder="Phone number"
                    />
                    {errors.phoneNumber && (
                      <small className="text-danger">
                        {errors.phoneNumber}
                      </small>
                    )}
                  </div>
                </div>

                <div className="col-12">
                  <div className="mb-3">
                    <label className="form-label">Additional Message</label>
                    <textarea
                      onChange={(e) =>
                        setEmail({
                          ...email,
                          additionalMessage: e.target.value,
                        })
                      }
                      name="comments"
                      id="comments"
                      rows="4"
                      value={email.additionalMessage}
                      className="form-control"
                      placeholder="Message :"
                    ></textarea>
                    {errors.additionalMessage && (
                      <small className="text-danger">
                        {errors.additionalMessage}
                      </small>
                    )}
                  </div>
                </div>

                <label className="form-label mt-5 mb-5">Property Details</label>

                <div className="col-md-4">
                  <div className="mb-3">
                    <label className="form-label">
                      Street Address <span className="text-danger">*</span>
                    </label>
                    <input
                      onChange={(e) =>
                        setEmail({
                          ...email,
                          streetAddress: e.target.value,
                        })
                      }
                      name="email"
                      id="email"
                      value={email.streetAddress}
                      type="tel"
                      className="form-control"
                      placeholder="Street Address"
                    />
                    {errors.email && (
                      <small className="text-danger">{errors.email}</small>
                    )}
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="mb-3">
                    <label className="form-label">
                      Suburb<span className="text-danger">*</span>
                    </label>
                    <input
                      onChange={(e) =>
                        setEmail({ ...email, suburb: e.target.value })
                      }
                      name="email"
                      id="email"
                      value={email.suburb}
                      type="tel"
                      className="form-control"
                      placeholder="Suburb"
                    />
                    {errors.suburb && (
                      <small className="text-danger">{errors.suburb}</small>
                    )}
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="mb-3">
                    <label className="form-label">
                      Post Code <span className="text-danger">*</span>
                    </label>
                    <input
                      onChange={(e) =>
                        setEmail({ ...email, postCode: e.target.value })
                      }
                      name="postCode"
                      id="email"
                      value={email.postCode}
                      type="tel"
                      className="form-control"
                      placeholder="Post Code"
                    />
                    {errors.postCode && (
                      <small className="text-danger">{errors.postCode}</small>
                    )}
                  </div>
                </div>

                <div className="col-md-4">
                  <label htmlFor="validationCustom01" className="form-label">
                    Bathroom/s<span className="text-danger">*</span>
                  </label>
                  <div className="mb-lg-0 mb-3 d-flex">
                    <select
                      onChange={(e) =>
                        setEmail({ ...email, bathroom: e.target.value })
                      }
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option value=""></option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5+">5+</option>
                    </select>
                  </div>
                  {errors.bathroom && (
                    <small className="text-danger">{errors.bathroom}</small>
                  )}
                </div>

                <div className="col-md-4">
                  <label htmlFor="validationCustom01" className="form-label">
                    Bedrooms/s<span className="text-danger">*</span>
                  </label>
                  <div className="mb-lg-0 mb-3 d-flex">
                    <select
                      onChange={(e) =>
                        setEmail({ ...email, bedRooms: e.target.value })
                      }
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option value=""></option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3+</option>
                    </select>
                  </div>
                  {errors.bedRooms && (
                    <small className="text-danger">{errors.bedRooms}</small>
                  )}
                </div>

                <div className="col-md-4">
                  <label htmlFor="validationCustom01" className="form-label">
                    Car Space/s
                  </label>
                  <div className="mb-lg-0 mb-3 d-flex">
                    <select
                      onChange={(e) =>
                        setEmail({ ...email, carSpace: e.target.value })
                      }
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option value=""></option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                    </select>
                  </div>
                </div>

                <div className="col-12 mt-5">
                  <div className="mb-3">
                    <label className="form-label">Additional Details</label>
                    <textarea
                      onChange={(e) =>
                        setEmail({
                          ...email,
                          additionalDetails: e.target.value,
                        })
                      }
                      name="additionalDetails"
                      id="comments"
                      rows="4"
                      value={email.additionalDetails}
                      className="form-control border shadow"
                      placeholder="Additional Details"
                    ></textarea>
                    {errors.additionalDetails && (
                      <small className="text-danger">{errors.message}</small>
                    )}
                  </div>
                </div>
              </div>

              <div className="row mt-5 justify-content-end">
                <div className="col-6">
                  <div className="d-grid">
                    <button
                      onClick={sendEmail}
                      type="submit"
                      className="btn btn-primary"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
