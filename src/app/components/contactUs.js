"use client";

import Navbar from "./navbar";
import { FiHexagon, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import Footer from "./footer";
import UseScroll from "../hooks/UseScroll";
import { useRef, useState } from "react";
import { sendCompanyEmail } from "../service/mailService";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import Link from "next/link";
import Spinner from "./spinner";

export default function ContactUs() {
  const form = useRef();
  const [loading , setloading] = useState(false);

  const [email, setEmail] = useState({
    email: "",
    subject: "",
    messege: "",
    name: "",
  });

  const sendEmail = (e) => {
    setloading(true);
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      emailjs
        .send(
          "service_s8n2pla",
          "template_832255o",
          {
            from_email: email.email,
            subject: email.subject,
            message: email.messege,
            name: email.name,
          },
          "De28oj9VShs97jK7c"
        )
        .then(
          (result) => {
            setloading(false);
            setEmail({
              email: "",
              subject: "",
              messege: "",
              name: "",
            });
            Swal.fire({
              icon: "success",
              title: "Email sent successfully",
              showConfirmButton: false,
              timer: 1500,
            });
            form.current.reset();
          },
          (error) => {
            alert("An error occurred, Please try again");
            console.error(error.text);
          }
        );
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

    if (!email.messege) {
      formErrors.message = "Message is required";
    }

    return formErrors;
  };

  const handleEmailSend = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      sendCompanyEmail(email.email, email.name, email.messege, email.subject)
        .then((response) => {
          alert("Email sent successfully");
          setEmail({
            email: "",
            subject: "",
            messege: "",
            name: "",
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const isScrolled = UseScroll();

  return (
    <>
    {loading && (<Spinner />)}
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
                <p className="text-white-50 para-desc mx-auto mb-0">
                  Get in touch !
                </p>
                <h5 className="heading fw-semibold mb-0 sub-heading text-white title-dark">
                  Contact us
                </h5>
              </div>
            </div>
          </div>
          <div className="position-middle-bottom">
            <nav aria-label="breadcrumb" className="d-block">
              <ul className="breadcrumb breadcrumb-muted mb-0 p-0">
                <li className="breadcrumb-item">
                  <Link href="/">5th Avenue</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Contact us
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

      <section className="section pb-0">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="p-4 rounded-3 shadow">
                <form ref={form} onSubmit={sendEmail}>
                  <div className="row">
                    <div className="col-md-6">
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

                    <div className="col-md-6">
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

                    <div className="col-12">
                      <div className="mb-3">
                        <label className="form-label">Subject</label>
                        <input
                          onChange={(e) =>
                            setEmail({ ...email, subject: e.target.value })
                          }
                          name="subject"
                          value={email.subject}
                          id="subject"
                          className="form-control"
                          placeholder="Subject :"
                        />
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="mb-3">
                        <label className="form-label">
                          Comments <span className="text-danger">*</span>
                        </label>
                        <textarea
                          onChange={(e) =>
                            setEmail({ ...email, messege: e.target.value })
                          }
                          name="comments"
                          id="comments"
                          rows="4"
                          value={email.messege}
                          className="form-control"
                          placeholder="Message :"
                        ></textarea>
                        {errors.message && (
                          <small className="text-danger">
                            {errors.message}
                          </small>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-12">
                      <div className="d-grid">
                        <button
                          // onClick={handleEmailSend}
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
        </div>

        <div className="container mt-100 mt-60">
          <div className="row g-4 justify-content-center">
            <div className="col-md-6">
              <div className="position-relative features text-center mx-lg-4 px-md-1">
                <div className="feature-icon position-relative overflow-hidden d-flex justify-content-center">
                  <FiHexagon className="hexagon" />
                  <div className="position-absolute top-50 start-50 translate-middle">
                    <FiPhone className="fea icon-m-md text-primary" />
                  </div>
                </div>

                <div className="mt-4">
                  <h5 className="mb-3">Phone</h5>
                  <p className="text-muted">
                    Start working with Towntor that can provide everything
                  </p>
                  <Link href="tel:+61 0455 474 220" className="text-primary">
                    (+61) 0455 474 220
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="position-relative features text-center mx-lg-4 px-md-1">
                <div className="feature-icon position-relative overflow-hidden d-flex justify-content-center">
                  <FiHexagon className="hexagon" />
                  <div className="position-absolute top-50 start-50 translate-middle">
                    <FiMail className="fea icon-m-md text-primary" />
                  </div>
                </div>

                <div className="mt-4">
                  <h5 className="mb-3">Email</h5>
                  <p className="text-muted">
                    Start working with Towntor that can provide everything
                  </p>
                  <Link
                    href="mailto:randy.navaratne@the5thavenue.com.au"
                    className="text-primary"
                  >
                    randy.navaratne@the5thavenue.com.au
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="position-relative features text-center mx-lg-4 px-md-1">
                <div className="feature-icon position-relative overflow-hidden d-flex justify-content-center">
                  <FiHexagon className="hexagon" />
                  <div className="position-absolute top-50 start-50 translate-middle">
                    <FiMapPin className="fea icon-m-md text-primary" />
                  </div>
                </div>

                <div className="mt-4">
                  <h5 className="mb-3">Location</h5>
                  <p className="text-muted">
                    The 5th Avenue Real Estate Waterman Business Centre,
                    Chadstone VIC 3168
                  </p>
                  <Link
                    href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin"
                    className="lightbox text-primary"
                    data-type="iframe"
                    data-group="iframe"
                    data-width="1024px"
                    data-height="576px"
                  >
                    View on Google map
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-100 mt-60">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8 p-0">
              <div className="card map border-0">
                <div className="card-body p-0">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin"
                    style={{ border: "0" }}
                    title="5th Avenue"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-100">
          <Footer />
        </div>
      </section>
    </>
  );
}
