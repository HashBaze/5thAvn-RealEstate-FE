import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { propertyType } from "../data/data";
import { FiSearch } from "react-icons/fi";

export default function FuaturedProperties({ propertyData, filter, suburb }) {
  const [isSelect, setIsSelect] = useState("Rent");
  const [formData, setFormData] = useState({
    bedRoomMin: "",
    bedRoomMax: "",
    bathRooms: "",
    houseCategory: "any",
    suburb: "",
    priceFrom: "",
    priceTo: "",
    airConditioning: false,
    pool: false,
    secaurity: false,
  });

  const options = [];

  for (let value = 50000; value <= 10000000; value += 50000) {
    if (value > 1000000) {
      value += 200000;
    }

    if (value > 3000000) {
      continue;
    }

    options.push(value);
  }
  options.push(4000000);
  options.push(5000000);
  options.push(10000000);
  return (
    <>
      <div className="row justify-content-center mt-100">
        <div className="col">
          <div className="section-title text-center mb-4 pb-2">
            <h4 className="title mb-3">Listed Properties</h4>
            <p className="text-muted para-desc mb-0 mx-auto">
              A great plateform to buy, sell and rent your properties without
              any agent or commisions.
            </p>
          </div>
        </div>
      </div>

      <form className="card-body text-start container bg-white rounded p-3">
        <div className="registration-form text-dark text-start">
          <div className="row g-lg-0 p-2 shadow-lg border rounded p-3">
            <div className="d-flex g-lg-0 p-2 mb-3">
              <button
                type="button"
                onClick={() => setIsSelect(propertyType.RENT)}
                className={`btn ${
                  isSelect === propertyType.RENT
                    ? "btn-primary"
                    : "bg-transparent"
                }`}
              >
                Rent
              </button>
              <button
                onClick={() => setIsSelect(propertyType.SALE)}
                type="button"
                className={`btn ${
                  isSelect === propertyType.SALE
                    ? "btn-primary"
                    : "bg-transparent"
                }`}
              >
                Sale
              </button>
            </div>

            <div className="col-6 col-md-3">
              <label htmlFor="validationCustom01" className="form-label">
                Bed Rooms Min
              </label>
              <div className="mb-lg-0 mb-3 d-flex">
                <select
                  onChange={(e) =>
                    setFormData({ ...formData, bedRoomMin: e.target.value })
                  }
                  className="form-select"
                  aria-label="Default select example"
                  style={{ width: "150px" }}
                >
                  <option>any</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
            </div>

            <div className="col-6 col-md-3">
              <label htmlFor="validationCustom01" className="form-label">
                Bed Rooms Max
              </label>
              <div className="mb-lg-0 mb-3 d-flex">
                <select
                  onChange={(e) =>
                    setFormData({ ...formData, bedRoomMax: e.target.value })
                  }
                  className="form-select"
                  aria-label="Default select example"
                  style={{ width: "150px" }}
                >
                  <option>any</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
            </div>

            <div className="col-6 col-md-3">
              <label htmlFor="validationCustom01" className="form-label">
                House Category
              </label>
              <div className="mb-lg-0 mb-3 d-flex">
                <select
                  onChange={(e) =>
                    setFormData({ ...formData, houseCategory: e.target.value })
                  }
                  className="form-select"
                  aria-label="Default select example"
                  style={{ width: "150px" }}
                  value={formData.houseCategory}
                >
                  <option value="any">any</option>
                  <option value="HOUSE">HOUSE</option>
                  <option value="APARTMENT">APARTMENT</option>
                  <option value="TOWNHOUSE">TOWNHOUSE</option>
                </select>
              </div>
            </div>

            <div className="col-6 col-md-3">
              <label htmlFor="validationCustom01" className="form-label">
                Suburb
              </label>
              <div className="mb-lg-0 mb-3 d-flex">
                <select
                  onChange={(e) =>
                    setFormData({ ...formData, suburb: e.target.value })
                  }
                  className="form-select"
                  aria-label="Default select example"
                  style={{ width: "150px" }}
                >
                  <option value="any">any</option>
                  {suburb.map((value) => (
                    <option key={value} value={value}>
                      {value}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="col-6 col-md-3 mt-2">
              <label htmlFor="validationCustom01" className="form-label">
                Bath Rooms
              </label>
              <div className="mb-lg-0 mb-3 d-flex">
                <select
                  onChange={(e) =>
                    setFormData({ ...formData, bathRooms: e.target.value })
                  }
                  className="form-select"
                  aria-label="Default select example"
                  style={{ width: "150px" }}
                >
                  <option value="any">any</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
            </div>

            <div className="col-6 col-md-3 mt-2">
              <label htmlFor="validationCustom01" className="form-label">
                Price From
              </label>
              <div className="mb-lg-0 mb-3 d-flex">
                <select
                  onChange={(e) =>
                    setFormData({ ...formData, priceFrom: e.target.value })
                  }
                  className="form-select"
                  aria-label="Default select example"
                  style={{ width: "150px" }}
                >
                  <option value="any"></option>

                  {options.map((value) => (
                    <option key={value} value={value}>
                      {value.toLocaleString()} {"$"}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="col-6 col-md-3 mt-2">
              <label htmlFor="validationCustom01" className="form-label">
                Price To
              </label>
              <div className="mb-lg-0 mb-3 d-flex">
                <select
                  onChange={(e) =>
                    setFormData({ ...formData, priceTo: e.target.value })
                  }
                  className="form-select"
                  aria-label="Default select example"
                  style={{ width: "150px" }}
                >
                  <option value="any"></option>
                  {options.map((value) => (
                    <option key={value} value={value}>
                      {value.toLocaleString()} {"$"}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="row w-75 mt-3">
              <div className="col form-check">
                <input
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      airConditioning: !formData.airConditioning,
                    })
                  }
                  className="form-check-input shadow"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                ></input>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Air&nbsp;Conditioning
                </label>
              </div>

              <div className="col form-check">
                <input
                  onChange={(e) =>
                    setFormData({ ...formData, pool: !formData.pool })
                  }
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
                  onChange={(e) =>
                    setFormData({ ...formData, secaurity: !formData.secaurity })
                  }
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
              <button
                onClick={() => {
                  formData.isSelected = isSelect;
                  filter(formData);
                }}
                type="button"
                className="btn btn-primary col-4"
              >
                <FiSearch className="icons" />
                <span className="ms-2 btn-serch">Search</span>
              </button>
            </div>
          </div>
        </div>
      </form>

      <div className="row g-4 mt-5">
        {propertyData.length > 0 ? (
          propertyData.slice(0, 6).map((item, index) => {
            return (
              <div className="col-lg-4 col-md-6 col-12" key={index} data-aos={`${index % 2 == 0 ? "flip-left" : "flip-right"}`}>
                <div className="card property border-0 shadow position-relative overflow-hidden rounded-3">
                  <div className="property-image position-relative overflow-hidden shadow">
                    <Image
                      src={item.node.thumbnailSquare}
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{
                        width: "100%",
                        height: "200px",
                        objectFit: "cover",
                      }}
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="card-body content p-4">
                    <Link
                      href={`/propertyListings/sale/viewProperty?property=${item.node.formattedAddress
                        .toLowerCase()
                        .replace(/\s+/g, "-")}-${item.node.id}`}
                      className="title fs-5 text-dark fw-medium"
                    >
                      {item.node.headline}
                    </Link>

                    <ul className="list-unstyled border-top border-bottom d-flex align-items-center justify-content-between">
                      {item.node.landSize && (
                        <li className="d-flex align-items-center">
                          <i className="mdi mdi-arrow-expand-all fs-6 me-2 text-primary"></i>
                          <small className="text-muted">
                            {item.node.landSize}
                          </small>
                        </li>
                      )}

                      {item.node.listingDetails.garageSpaces > 0 && (
                        <li className="d-flex align-items-center">
                          <i className="mdi mdi-car fs-5 me-2 text-primary"></i>
                          <span className="text-muted">
                            {item.node.listingDetails.garageSpaces}
                          </span>
                        </li>
                      )}

                      {item.node.listingDetails.bedrooms && (
                        <li className="d-flex align-items-center">
                          <i className="mdi mdi-bed fs-6 me-2 text-primary"></i>
                          <small className="text-muted">
                            {item.node.listingDetails.bedrooms}&nbsp;Beds
                          </small>
                        </li>
                      )}
                      {item.node.listingDetails.bathrooms && (
                        <li className="d-flex align-items-center">
                          <i className="mdi mdi-shower fs-6 me-2 text-primary"></i>
                          <small className="text-muted">
                            {item.node.listingDetails.bathrooms}&nbsp;Baths
                          </small>
                        </li>
                      )}
                    </ul>

                    <ul className="list-unstyled d-flex justify-content-between mt-2 mb-0">
                      {item.node.price != 0 && item.node.price && (
                        <li className="list-inline-item mb-0 d-flex gap-2">
                          <span
                            className="bg-success p-2 text-white rounded txt-home-open"
                            style={{
                              fontSize: "0.8rem",
                            }}
                          >
                            {item.node.status == "ACTIVE"
                              ? "Home Open"
                              : item.node.status}
                          </span>
                          <p className="fw-medium mb-0 mt-2">
                            {item.node.altToPrice}
                          </p>
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="d-flex flex-column justify-content-center">
            <Image
              className="img-fluid m-auto"
              src="/images/no-data.png"
              width={200}
              height={200}
              sizes="100vw"
              alt="no data"
            />
            <p className="text-center">No Data Found</p>
          </div>
        )}

        <div className="col-12 mt-4 pt-2">
          <div className="text-center">
            <Link
              href="/propertyListings?type=Sale"
              className="mt-3 fs-6 text-primary"
            >
              View More Properties{" "}
              <i className="mdi mdi-arrow-right align-middle"></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
