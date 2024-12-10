import Link from "next/link";
import React, { useState } from "react";
import Navbar from "./navbar";
import UseScroll from "../hooks/UseScroll";
import Footer from "./footer";
import { sendByeWithUs } from "../service/mailService";
import Swal from "sweetalert2";

export default function BuyWithUs() {
  const isScrolled = UseScroll();
  const [loading, setLoading] = useState(false);
  const [erros, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    bestTimeToReach: "",
    interestedCities: [],
    homeType: "",
    bedrooms: "",
    bathrooms: "",
    garage: "",
    floors: "",
    budget: "",
    lotSize: "",
    amenities: [],
    additionalComments: "",
  });

  const validateForm = () => {
    const errors = {};
    if (!formData.name) {
      errors.name = "Name is required";
    }
    if (!formData.phone) {
      errors.phone = "Phone is required";
    }
    if (!formData.email) {
      errors.email = "Email is required";
    }
    if (!formData.bestTimeToReach) {
      errors.bestTimeToReach = "Best time to reach is required";
    }
    if (formData.interestedCities.length === 0) {
      errors.interestedCities = "Interested cities are required";
    }
    if (!formData.lotSize) {
      errors.lotSize = "Lot size is required";
    }
    if (formData.amenities.length === 0) {
      errors.amenities = "Amenities are required";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      if (name === "amenities") {
        setFormData((prev) => ({
          ...prev,
          amenities: checked
            ? [...prev.amenities, value]
            : prev.amenities.filter((amenity) => amenity !== value),
        }));
      } else if (name === "homeType") {
        setFormData((prev) => ({
          ...prev,
          homeType: checked ? value : "",
        }));
      }
    } else if (type === "radio") {
      setFormData((prev) => ({ ...prev, [name]: value }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    if (!validateForm()) {
      setLoading(false);
      return;
    }

    sendByeWithUs(formData)
      .then((res) => {
        setLoading(false);
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Your form has been submitted successfully",
        });
        setFormData({
          name: "",
          phone: "",
          email: "",
          bestTimeToReach: "",
          interestedCities: [],
          homeType: "",
          bedrooms: "",
          bathrooms: "",
          garage: "",
          floors: "",
          budget: "",
          lotSize: "",
          amenities: [],
          additionalComments: "",
        });
      })
      .catch((error) => {
        setLoading(false);
        alert("Something went wrong. Please try again later");
      });
  };

  return (
    <div>
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
                  Buy with us
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
                  Buy with us
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
        className="bg-half-170 d-table h-100 w-100 d-flex justify-content-center"
        style={{ backgroundImage: "url('/images/bg.png')" }}
      >
        <p className="text-center ms-4 main-header">
          Light the fire of your dreams. <br /> Redefine your life.
        </p>
      </section>
      <h1 className="text-center ms-4">buy your next home with us</h1>

      <section
        className="bg-half-100 row justify-content-center"
        style={{ backgroundImage: "url('/images/Web_line_p46.png')" }}
      >
        <section className="row justify-content-center align-items-center">
          <div className="col-lg-4 col-md-6 col-12">
            <div className="section-title text-center">
              <p className="appraisal-second-headline">
                Let’s handle your needs and search for your dream home…
              </p>
            </div>
          </div>

          <div className="ring"></div>

          <div className="col-lg-4 col-md-6 col-12">
            <div className="section-title text-center">
              <p className="text-dark-desc">
                Buying a home is a significant milestone and a smart way to
                break free from rising rental costs. While envisioning your
                dream home's features can be exciting, navigating the buying
                process might feel daunting without the right guidance. That’s
                where the right agent makes all the difference. At 5th Avenue
                Real Estate Property Group, our team of experienced and
                detail-focused agents is dedicated to making your home-buying
                journey easy and stress-free. We take care of the complexities,
                allowing you to focus on what truly matters. From answering your
                questions to streamlining the entire process, we're here to
                ensure your home-buying experience is smooth and hassle-free.
              </p>
            </div>
          </div>
        </section>
      </section>
      <h1 className="text-center ms-4">buyers FORM</h1>

      <div className="row justify-content-center mt-5">
        <div className="col-lg-8">
          <div className="p-4 rounded-3 shadow-lg">
            <form onSubmit={handleSubmit} className="container">
              <div className="row">
                {/* Name */}
                <div className="col-md-6 mb-3">
                  <label htmlFor="name" className="form-label">
                    Introduce yourself*
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  {erros.name && (
                    <div className="text-danger">{erros.name}</div>
                  )}
                </div>
                {/* Phone */}
                <div className="col-md-6 mb-3">
                  <label htmlFor="phone" className="form-label">
                    Your Phone Number*
                  </label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    className="form-control"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                  {erros.phone && (
                    <div className="text-danger">{erros.phone}</div>
                  )}
                </div>
                {/* Email */}
                <div className="col-md-6 mb-3">
                  <label htmlFor="email" className="form-label">
                    Your Email*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  {erros.email && (
                    <div className="text-danger">{erros.email}</div>
                  )}
                </div>
                {/* Best Time to Reach */}
                <div className="col-md-6 mb-3">
                  <label className="form-label">Best time to reach you</label>
                  {["Morning", "Afternoon", "Evening"].map((time) => (
                    <div className="form-check" key={time}>
                      <input
                        className="form-check-input"
                        type="radio"
                        name="bestTimeToReach"
                        value={time}
                        id={time}
                        onChange={handleChange}
                      />
                      <label htmlFor={time} className="form-check-label">
                        {time}
                      </label>
                    </div>
                  ))}
                  {erros.bestTimeToReach && (
                    <div className="text-danger">{erros.bestTimeToReach}</div>
                  )}
                </div>
                {/* Interested Cities */}
                <div className="col-md-12 mb-3">
                  <label className="form-label">
                    Please indicate the cities/suburbs that interest you*
                  </label>
                  {["Melbourne", "Cranbourne", "Sydney"].map((city) => (
                    <div className="form-check" key={city}>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="interestedCities"
                        value={city}
                        id={city}
                        onChange={(e) => {
                          const { checked, value } = e.target;
                          setFormData((prev) => ({
                            ...prev,
                            interestedCities: checked
                              ? [...prev.interestedCities, value]
                              : prev.interestedCities.filter(
                                  (c) => c !== value
                                ),
                          }));
                        }}
                      />
                      <label htmlFor={city} className="form-check-label">
                        {city}
                      </label>
                    </div>
                  ))}
                  {erros.interestedCities && (
                    <div className="text-danger">{erros.interestedCities}</div>
                  )}
                </div>
                {/* Home Type */}
                <div className="col-md-6 mb-3">
                  <label htmlFor="homeType" className="form-label">
                    Type of home you are interested in
                  </label>
                  {[
                    "Single Story",
                    "Double Story",
                    "Apartment",
                    "Commercial",
                  ].map((homeType) => (
                    <div className="form-check" key={homeType}>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="homeType"
                        value={homeType}
                        id={homeType}
                        onChange={handleChange}
                      />
                      <label htmlFor={homeType} className="form-check-label">
                        {homeType}
                      </label>
                    </div>
                  ))}
                  {erros.homeType && (
                    <div className="text-danger">{erros.homeType}</div>
                  )}
                </div>
                {/* Number Inputs */}
                {["bedrooms", "bathrooms", "garage", "floors"].map((field) => (
                  <div className="col-md-6 mb-3" key={field}>
                    <label htmlFor={field} className="form-label">
                      {field.charAt(0).toUpperCase() + field.slice(1)}
                    </label>
                    <select
                      name={field}
                      id={field}
                      onChange={handleChange}
                      className="form-select"
                    >
                      {[1, 2, 3, 4, 5].map((num) => (
                        <option key={num} value={num}>
                          {num}
                        </option>
                      ))}
                    </select>
                  </div>
                ))}

                {/* Budget */}

                <div className="col-md-6 mb-3">
                  <label className="form-label">Budget</label>
                  <select
                    name="budget"
                    id="budget"
                    className="form-select"
                    value={formData.budget}
                    onChange={handleChange}
                  >
                    {[
                      "",
                      "Under $500,000",
                      "$500,000 - $1,000,000",
                      "$1,000,000 - $1,500,000",
                      "$1,500,000 - $2,000,000",
                      "Over $2,000,000",
                    ].map((budget) => (
                      <option key={budget} value={budget}>
                        {budget}
                      </option>
                    ))}
                  </select>
                  {erros.budget && (
                    <div className="text-danger">{erros.budget}</div>
                  )}
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Lot Size*</label>
                  <input
                    type="text"
                    id="lotSize"
                    name="lotSize"
                    className="form-control"
                    value={formData.lotSize}
                    onChange={handleChange}
                    required
                  />
                </div>
                {/* Amenities */}
                <div className="col-md-12 row mb-3">
                  <label className="form-label">Amenities/features</label>
                  {[
                    "Office Room",
                    "Media Room",
                    "Butler’s Pantry",
                    "Patio / Alfresco",
                    "CCTV Security System",
                    "Alarm System",
                    "2 Dishwashers",
                    "Split Systems",
                    "Ducted Heating",
                    "Wood Heater",
                    "Backyard",
                    "Swimming Pool",
                    "Large storage area",
                    "Large Shed",
                    "Other",
                  ].map((amenity) => (
                    <div className="form-check col-6" key={amenity}>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="amenities"
                        value={amenity}
                        id={amenity}
                        onChange={handleChange}
                      />
                      <label htmlFor={amenity} className="form-check-label">
                        {amenity}
                      </label>
                    </div>
                  ))}
                </div>
                {/* Additional Comments */}
                <div className="col-md-12 mb-3">
                  <label htmlFor="additionalComments" className="form-label">
                    Okay, tell us everything*
                  </label>
                  <textarea
                    id="additionalComments"
                    name="additionalComments"
                    className="form-control"
                    rows="4"
                    value={formData.additionalComments}
                    onChange={handleChange}
                  ></textarea>
                </div>
                {/* Submit Button */}
                <div className="col-md-12 text-end">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
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
