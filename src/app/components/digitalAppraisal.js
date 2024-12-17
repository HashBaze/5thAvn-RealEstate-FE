import Link from "next/link";
import React, { useRef, useState } from "react";
import Navbar from "./navbar";
import UseScroll from "../hooks/UseScroll";
import Footer from "./footer";
import Swal from "sweetalert2";
import { sendDigitalAppraisal } from "../service/mailService";
import Spinner from "./spinner";

export default function DigitalAppraisal() {
  const isScrolled = UseScroll();
  const [loadig, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    email: "",
    address: "",
    propertyType: "",
    approximate: "",
    favouriteFeatures: "",
    sellingTime: "",
    homeAge: "",
    favoriteFeatures: "",
    improvements: "",
    bedroom: "",
    bathroom: "",
    ensuite: "",
    livingareas: "",
    study: "",
    garaging: "",
    heatingCooling: [],
    funStuff: [],
    otherFeatures: [],
    referredBy: "",
    additionalComments: "",
  });

  const validate = () => {
    const validationErrors = {};
    if (!formData.firstName.trim())
      validationErrors.firstName = "First name is required.";
    if (!formData.lastName.trim())
      validationErrors.lastName = "Last name is required.";
    if (!formData.mobileNumber.trim())
      validationErrors.mobileNumber = "Mobile number is required.";
    else if (!/^\d{10}$/.test(formData.mobileNumber))
      validationErrors.mobileNumber = "Invalid mobile number.";
    if (!formData.email.trim()) validationErrors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      validationErrors.email = "Invalid email address.";
    if (!formData.address.trim())
      validationErrors.address = "Address is required.";
    if (!formData.propertyType)
      validationErrors.propertyType = "Property type is required.";
    if (!formData.sellingTime)
      validationErrors.sellingTime = "Selling time is required.";

    return validationErrors;
  };

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    if (type === "checkbox") {
      // Handle checkboxes (for arrays)
      const category = e.target
        .closest(".row")
        .querySelector("label").innerText;
      const key =
        category === "Heating & Cooling"
          ? "heatingCooling"
          : category === "The Fun Stuff"
          ? "funStuff"
          : "otherFeatures";
      setFormData((prev) => {
        const newValues = checked
          ? [...prev[key], id]
          : prev[key].filter((item) => item !== id);
        return { ...prev, [key]: newValues };
      });
    } else {
      setFormData({ ...formData, [id]: value });
    }
  };

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setLoading(false);
    } else {
      setLoading(false);
      setErrors({});
      sendDigitalAppraisal(formData)
        .then(() => {
          Swal.fire({
            title: "Success",
            text: "Your appraisal request has been submitted.",
            icon: "success",
            confirmButtonText: "Ok",
          });
          setFormData({
            firstName: "",
            lastName: "",
            mobileNumber: "",
            email: "",
            address: "",
            propertyType: "",
            approximate: "",
            favouriteFeatures: "",
            sellingTime: "",
            homeAge: "",
            homeSize: "",
            favoriteFeatures: "",
            improvements: "",
            bedrooms: "",
            bathrooms: "",
            ensuite: "",
            livingAreas: "",
            study: "",
            garaging: "",
            heatingCooling: [],
            funStuff: [],
            otherFeatures: [],
            referredBy: "",
            additionalComments: "",
          });
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
          Swal.fire({
            title: "Error",
            text: "An error occurred. Please try again later.",
            icon: "error",
            confirmButtonText: "Ok",
          });
        });
    }
  };
  return (
    <div>
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
                  Digital Appraisal
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
                  Digital Appraisal
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
        className="bg-half-100 d-table h-100 w-100 d-flex justify-content-center"
        style={{ backgroundImage: "url('/images/bg.png')" }}
      >
        <p className="text-center ms-4 fs-1 fw-bold">
          Discover the true <br /> value of your home.
        </p>
      </section>

      <section
        className="bg-half-100 row justify-content-center"
        style={{ backgroundImage: "url('/images/Web_line_p46.png')" }}
      >
        <section className="row justify-content-center align-items-center">
          <div className="col-lg-4 col-md-6 col-12">
            <div className="section-title text-center">
              <p className="text-center text-lg-end fw-bold">
                Curious about your home's estimated value?
              </p>
            </div>
          </div>

          <div className="ring"></div>

          <div className="col-lg-4 col-md-6 col-12">
            <div className="section-title text-center">
              <p className="text-center text-lg-start">
                Fill out the form below to get a free appraisal of your
                property. Our experts will prepare a comprehensive report that
                includes insights from recent sales, local market trends, and
                other key data to provide an accurate assessment of your
                property's current market value and a recommended selling
                price—all at no cost to you!
              </p>
            </div>
          </div>
        </section>
      </section>

      <div className="row justify-content-center mt-5">
        <div className="col-lg-8">
          <div className="p-4 rounded-3 shadow-lg">
            <form onSubmit={handleSubmit}>
              <div className="row">
                {/* First Name */}
                <div className="col-md-6 mb-3">
                  <label className="form-label" htmlFor="firstName">
                    First Name<span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="form-control"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                  {errors.firstName && (
                    <div className="text-danger">{errors.firstName}</div>
                  )}
                </div>
                {/* Last Name */}
                <div className="col-md-6 mb-3">
                  <label className="form-label" htmlFor="lastName">
                    Last Name<span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="form-control"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                  {errors.lastName && (
                    <div className="text-danger">{errors.lastName}</div>
                  )}
                </div>
                {/* Mobile Number */}
                <div className="col-md-6 mb-3">
                  <label className="form-label" htmlFor="mobileNumber">
                    Mobile Number<span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    id="mobileNumber"
                    className="form-control"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    required
                  />
                  {errors.mobileNumber && (
                    <div className="text-danger">{errors.mobileNumber}</div>
                  )}
                </div>
                {/* Email */}
                <div className="col-md-6 mb-3">
                  <label className="form-label" htmlFor="email">
                    Your Email<span className="text-danger">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  {errors.email && (
                    <div className="text-danger">{errors.email}</div>
                  )}
                </div>
                {/* Address */}
                <div className="col-md-6 mb-3">
                  <label className="form-label" htmlFor="address">
                    Address to Appraise?<span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    id="address"
                    className="form-control"
                    value={formData.address}
                    onChange={handleChange}
                    required
                  />
                  {errors.address && (
                    <div className="text-danger">{errors.address}</div>
                  )}
                </div>
                {/* Property Type */}
                <div className="col-md-6 mb-3">
                  <label className="form-label" htmlFor="propertyType">
                    Property Type<span className="text-danger">*</span>
                  </label>
                  <select
                    value={formData.propertyType}
                    onChange={handleChange}
                    id="propertyType"
                    className="form-select"
                    required
                  >
                    <option value=""></option>
                    <option value="house">House</option>
                    <option value="apartment">Apartment</option>
                  </select>
                  {errors.propertyType && (
                    <div className="text-danger">{errors.propertyType}</div>
                  )}
                </div>
                {/* Selling Time */}
                <div className="col-md-6 mb-3">
                  <label className="form-label" htmlFor="sellingTime">
                    When are you considering selling?<span className="text-danger">*</span>
                  </label>
                  <select
                    id="sellingTime"
                    className="form-select"
                    value={formData.sellingTime}
                    onChange={handleChange}
                    required
                  >
                    <option value=""></option>
                    <option value="immediately">Immediately</option>
                    <option value="6months">Within 6 months</option>
                  </select>
                  {errors.sellingTime && (
                    <div className="text-danger">{errors.sellingTime}</div>
                  )}
                </div>
                {/* Age of Home */}
                <div className="col-md-6 mb-3">
                  <label className="form-label" htmlFor="homeAge">
                    Age of the home?
                  </label>
                  <input
                    type="text"
                    id="homeAge"
                    value={formData.homeAge}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
                {/* Do you know an approximate size of your home in square metres?*/}
                <div className="col-12 mb-3">
                  <label className="form-label" htmlFor="approximate">
                    Do you know an approximate size of your home in square
                    metres?
                  </label>
                  <input
                    value={formData.approximate}
                    onChange={handleChange}
                    type="text"
                    id="approximate"
                    className="form-control"
                  />
                </div>
                {/* Home Size */}
                <div className="col-12 mb-3">
                  <label className="form-label" htmlFor="favoriteFeatures">
                    What are your favourite features about the home?
                  </label>
                  <textarea
                    id="favoriteFeatures"
                    className="form-control"
                    value={formData.favoriteFeatures}
                    onChange={handleChange}
                    rows="2"
                  ></textarea>
                </div>
                {/* Favorite Features */}
                <div className="col-12 mb-3">
                  <label className="form-label" htmlFor="improvements">
                    Have you made any improvements to the home?
                  </label>
                  <textarea
                    id="improvements"
                    className="form-control"
                    value={formData.improvements}
                    onChange={handleChange}
                    rows="2"
                  ></textarea>
                </div>
                {/* Dropdown Fields */}
                {[
                  "Bedroom",
                  "Bathroom",
                  "Ensuite",
                  "LivingAreas",
                  "Study",
                  "Garaging",
                ].map((field) => (
                  <div className="col-md-6 mb-3" key={field}>
                    <label className="form-label">{field}</label>
                    <select
                      value={formData[field.toLowerCase()]}
                      onChange={handleChange}
                      id={field.toLowerCase()}
                      className="form-select"
                    >
                      <option value=""></option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                  </div>
                ))}
                <div className="col-12 row mb-3">
                  <label className="mb-4">Heating & Cooling</label>
                  {[
                    "Ducted Heating",
                    "Hydronic Heating",
                    "Reverse Cycle",
                    "Fireplace",
                    "Gas Fireplace",
                    "Ducted Cooling",
                    "Evaporative Cooling",
                    "Fans",
                  ].map((option) => (
                    <div className="col-6" key={option}>
                      <input
                        value={option}
                        onChange={handleChange}
                        type="checkbox"
                        className="form-check-input border border-primary"
                        id={option.replace(/\s+/g, "")}
                      />
                      <label
                        className="form-check-label ms-2"
                        htmlFor={option.replace(/\s+/g, "")}
                      >
                        {option}
                      </label>
                    </div>
                  ))}
                </div>
                <div className="col-12 row mb-3">
                  <label className="mb-4">The Fun Stuff</label>
                  {[
                    "Gym",
                    "Inground Pool",
                    "Above ground pool",
                    "Outdoor Shower",
                    "Outdoor Spa",
                    "Outdoor Entertaining Area/Kitchen",
                    "Workshop/Shed",
                    "Third Choice",
                    "Tennis Court",
                    "Solar Panels",
                  ].map((option) => (
                    <div className="col-6" key={option}>
                      <div className="form-check">
                        <input
                          value={option}
                          onChange={handleChange}
                          type="checkbox"
                          className="form-check-input border"
                          id={option.replace(/\s+/g, "")}
                        />
                        <label
                          className="form-check-label ms-2"
                          htmlFor={option.replace(/\s+/g, "")}
                        >
                          {option}
                        </label>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="col-12 row mb-3">
                  <label className="mb-4">Other Featurs</label>
                  {[
                    "Alarm System",
                    "Dishwasher",
                    "Intercom",
                    "Ducted vac System",
                    "Music System e.g Sonos",
                    "Water Tank",
                  ].map((option) => (
                    <div className="col-6" key={option}>
                      <div className="form-check">
                        <input
                          value={option}
                          onChange={handleChange}
                          type="checkbox"
                          className="form-check-input border"
                          id={option.replace(/\s+/g, "")}
                        />
                        <label
                          className="form-check-label ms-2"
                          htmlFor={option.replace(/\s+/g, "")}
                        >
                          {option}
                        </label>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="col-12 mb-3">
                  <label className="form-label" htmlFor="referredBy">
                    Have you been referred to us, if yes by who?
                  </label>
                  <textarea
                    value={formData.referredBy}
                    onChange={handleChange}
                    id="referredBy"
                    className="form-control"
                    rows="2"
                  ></textarea>
                </div>

                <div className="col-12 mb-3">
                  <label className="form-label" htmlFor="additionalComments">
                    Additional Comments
                  </label>
                  <textarea
                    id="additionalComments"
                    value={formData.additionalComments}
                    onChange={handleChange}
                    className="form-control"
                    rows="2"
                  ></textarea>
                </div>
              </div>
              <div className="row justify-content-end">
                <button type="submit" className="btn btn-primary mt-3 w-25">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
