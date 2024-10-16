import React, { useState } from "react";
import { FiSearch } from "../assets/icons/vander";
import TextAnimation from "./TextAnimation";

const Searchbar = () => {
  const [isSelect, setIsSelect] = useState("Rent");

  return (
    <>
      <section className="position-relative mt-5 pt-4">
        <div className="px-md-4 px-2 mt-2">
          <div
            className="bg-home-one container-fluid d-table shadow rounded-3 overflow-hidden"
            id="home"
          >
            <div
              className="bg-overlay image-wrap "
              id="hero-images"
              style={{ backgroundImage: "url('/images/bg/03.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center center",
              width: "100vw",
               }}
            ></div>
            <div className="bg-overlay bg-black opacity-50"></div>

            <div className="container">
              <div className="row justify-content-center">
                <div className="col-12">
                  <div className="title-heading">
                    <TextAnimation />
                    <p className="para-desc text-white title-dark mb-0">
                      A great plateform to buy, sell and rent your properties
                      without any agent or commisions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <form className="card-body text-start container bg-white rounded p-3" style={{
        position:'relative',
        top:'-150px',
        zIndex: 1,
      }}>
        <div className="registration-form text-dark text-start">
          <div className="row g-lg-0 p-2 shadow-lg border rounded">
            <div className="row g-lg-0 p-2 row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-6 mb-3">
              <button
                type="button"
                onClick={() => setIsSelect("Rent")}
                className={`btn ${
                  isSelect === "Rent" ? "btn-primary" : "bg-transparent"
                }`}
              >
                Rent
              </button>
              <button
                onClick={() => setIsSelect("Sell")}
                type="button"
                className={`btn ${
                  isSelect === "Sell" ? "btn-primary" : "bg-transparent"
                }`}
              >
                Sell
              </button>
            </div>

            <div className="col-6 col-md-3">
              <label htmlFor="validationCustom01" className="form-label">
                Bed Rooms
              </label>
              <div className="mb-lg-0 mb-3 d-flex">
                <select
                  className="form-select"
                  aria-label="Default select example"
                  style={{ width: "150px" }}
                >
                  <option>dsd</option>
                  <option value="1">any</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>

            <div className="col-6 col-md-3">
              <label htmlFor="validationCustom01" className="form-label">
                House Category
              </label>
              <div className="mb-lg-0 mb-3 d-flex">
                <select
                  className="form-select"
                  aria-label="Default select example"
                  style={{ width: "150px" }}
                >
                  <option value="1">any</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>

            <div className="col-6 col-md-3">
              <label htmlFor="validationCustom01" className="form-label">
                Suburb
              </label>
              <div className="mb-lg-0 mb-3 d-flex">
                <select
                  className="form-select"
                  aria-label="Default select example"
                  style={{ width: "150px" }}
                >
                  <option value="1">any</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>

            <div className="col-6 col-md-3">
            <label htmlFor="validationCustom01" className="form-label">
                Price
              </label>
              <div className="mb-lg-0 mb-3 d-flex">
                <select
                  className="form-select"
                  aria-label="Default select example"
                  style={{ width: "150px" }}
                >
                  <option value="1">any</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>

            <div className="row w-75 mt-3">
              <div className="col form-check">
                <input
                  className="form-check-input shadow"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                ></input>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Air Conditioning
                </label>
              </div>

              <div className="col form-check">
                <input
                  className="form-check-input shadow"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                ></input>
                <label className="form-check-label" htmlFor="flexCheckChecked">
                  Pool
                </label>
              </div>

              <div className="col form-check">
                <input
                  className="form-check-input shadow"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                ></input>
                <label className="form-check-label" htmlFor="flexCheckChecked">
                  Security
                </label>
              </div>
            </div>

            <div className="row justify-content-end p-3">
              <button type="submit" className="btn btn-primary col-4">
                <FiSearch className="icons" />
                <span className="ms-2 btn-serch">Search</span>
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Searchbar;
