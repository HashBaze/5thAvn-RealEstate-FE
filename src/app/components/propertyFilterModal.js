import React, { useEffect, useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import { getAllSuburb } from "../service/propertyService";

export default function PropertyFilterModal({
  isModalOpen,
  handleCloseModal,
  fetchDataByFilter,
  setFilterData,
  type,
  status,
}) {
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
    page: 1,
    isSelected: type,
    status: status,
  });
  const [suburb, setSuburb] = useState([]);

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

  useEffect(() => {
    getAllSuburb().then((data) => {
      setSuburb(data);
    });
  }, []);

  return (
    <>
      {isModalOpen && (
        <div
          className="modal show d-block"
          tabIndex="-1"
          role="dialog"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <div className="modal-dialog modal-lg" role="document">
            <div
              className="modal-content custom-modal"
              style={{
                backgroundColor: "white",
                borderRadius: "10px",
                padding: "0px",
                boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.1)",
                overflowY: "auto",
              }}
            >
              <div className="modal-header">
                <h5 className="modal-title">Filters</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleCloseModal}
                >
                  <IoIosCloseCircle size={20} />
                </button>
              </div>
              <form className="card-body text-start container bg-white rounded p-3 w-100">
                <div className="registration-form text-dark text-start">
                  <div className="row">
                    {type != "Land" && (
                      <div className="col-6 col-md-3">
                        <label
                          htmlFor="validationCustom01"
                          className="form-label"
                        >
                          Bed Rooms Min
                        </label>
                        <div className="mb-lg-0 mb-3 d-flex">
                          <select
                            onChange={(e) => {
                              setFormData({
                                ...formData,
                                bedRoomMin: e.target.value,
                              });
                              setFilterData({
                                ...formData,
                                bedRoomMin: e.target.value,
                              });
                            }}
                            className="form-select"
                            aria-label="Default select example"
                            style={{ width: "150px" }}
                            value={formData.bedRoomMin}
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
                    )}

                    {type != "Land" && (
                      <div className="col-6 col-md-3">
                        <label
                          htmlFor="validationCustom01"
                          className="form-label"
                        >
                          Bed Rooms Max
                        </label>
                        <div className="mb-lg-0 mb-3 d-flex">
                          <select
                            onChange={(e) => {
                              setFormData({
                                ...formData,
                                bedRoomMax: e.target.value,
                              });
                              setFilterData({
                                ...formData,
                                bedRoomMax: e.target.value,
                              });
                            }}
                            className="form-select"
                            aria-label="Default select example"
                            style={{ width: "150px" }}
                            value={formData.bedRoomMax}
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
                    )}

                    {type != "Land" && (
                      <div className="col-6 col-md-3">
                        <label
                          htmlFor="validationCustom01"
                          className="form-label"
                        >
                          House Category
                        </label>
                        <div className="mb-lg-0 mb-3 d-flex">
                          <select
                            onChange={(e) => {
                              setFormData({
                                ...formData,
                                houseCategory: e.target.value,
                              });
                              setFilterData({
                                ...formData,
                                houseCategory: e.target.value,
                              });
                            }}
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
                    )}

                    <div className="col-6 col-md-3">
                      <label
                        htmlFor="validationCustom01"
                        className="form-label"
                      >
                        Suburb
                      </label>
                      <div className="mb-lg-0 mb-3 d-flex">
                        <select
                          onChange={(e) => {
                            setFormData({
                              ...formData,
                              suburb: e.target.value,
                            });
                            setFilterData({
                              ...formData,
                              suburb: e.target.value,
                            });
                          }}
                          className="form-select"
                          aria-label="Default select example"
                          style={{ width: "150px" }}
                          value={formData.suburb}
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

                    {type != "Land" && (
                      <div className="col-6 col-md-3">
                        <label
                          htmlFor="validationCustom01"
                          className="form-label"
                        >
                          Bath Rooms
                        </label>
                        <div className="mb-lg-0 mb-3 d-flex">
                          <select
                            onChange={(e) => {
                              setFormData({
                                ...formData,
                                bathRooms: e.target.value,
                              });
                              setFilterData({
                                ...formData,
                                bathRooms: e.target.value,
                              });
                            }}
                            className="form-select"
                            aria-label="Default select example"
                            style={{ width: "150px" }}
                            value={formData.bathRooms}
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
                    )}

                    <div className="col-6 col-md-3">
                      <label
                        htmlFor="validationCustom01"
                        className="form-label"
                      >
                        Price From
                      </label>
                      <div className="mb-lg-0 mb-3 d-flex">
                        <select
                          onChange={(e) => {
                            setFormData({
                              ...formData,
                              priceFrom: e.target.value,
                            });
                            setFilterData({
                              ...formData,
                              priceFrom: e.target.value,
                            });
                          }}
                          className="form-select"
                          aria-label="Default select example"
                          style={{ width: "150px" }}
                          value={formData.priceFrom}
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

                    <div className="col-6 col-md-3">
                      <label
                        htmlFor="validationCustom01"
                        className="form-label"
                      >
                        Price To
                      </label>
                      <div className="mb-lg-0 mb-3 d-flex">
                        <select
                          onChange={(e) => {
                            setFormData({
                              ...formData,
                              priceTo: e.target.value,
                            });
                            setFilterData({
                              ...formData,
                              priceTo: e.target.value,
                            });
                          }}
                          className="form-select"
                          aria-label="Default select example"
                          style={{ width: "150px" }}
                          value={formData.priceTo}
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
                    {type == "Land" && (
                      <div className="col-6 col-md-3">
                        <label
                          htmlFor="validationCustom01"
                          className="form-label"
                        >
                          Land Category
                        </label>
                        <div className="mb-lg-0 mb-3 d-flex">
                          <select
                            onChange={(e) => {
                              setFormData({
                                ...formData,
                                LandCategory: e.target.value,
                              });
                              setFilterData({
                                ...formData,
                                LandCategory: e.target.value,
                              });
                            }}
                            className="form-select"
                            aria-label="Default select example"
                            style={{ width: "150px" }}
                          >
                            <option selected={true} value="any">
                              any
                            </option>
                          </select>
                        </div>
                      </div>
                    )}
                  </div>

                  {type != "Land" && (
                    <div className="row mt-3">
                      <div className="col-6 col-lg-4 form-check">
                        <input
                          onChange={(e) => {
                            const updatedAirConditioning =
                              !formData.airConditioning;
                            setFormData({
                              ...formData,
                              airConditioning: updatedAirConditioning,
                            });

                            setFilterData({
                              ...formData,
                              airConditioning: updatedAirConditioning,
                            });
                          }}
                          className="form-check-input shadow border"
                          type="checkbox"
                          checked={formData.airConditioning}
                          id="flexCheckDefault"
                        />

                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault"
                        >
                          Air&nbsp;Conditioning
                        </label>
                      </div>

                      <div className="col-6 col-lg-4 form-check">
                        <input
                          onChange={(e) => {
                            const updatedPool = !formData.pool;
                            setFormData({ ...formData, pool: updatedPool });
                            setFilterData({ ...formData, pool: updatedPool });
                          }}
                          className="form-check-input shadow border"
                          type="checkbox"
                          checked={formData.pool}
                          id="flexCheckDefault"
                        />

                        <label
                          className="form-check-label"
                          htmlFor="flexCheckChecked"
                        >
                          Pool
                        </label>
                      </div>

                      <div className="col-6 col-lg-4 form-check">
                        <input
                          onChange={(e) => {
                            const updatedSecaurity = !formData.secaurity;
                            setFormData({
                              ...formData,
                              secaurity: updatedSecaurity,
                            });

                            setFilterData({
                              ...formData,
                              secaurity: updatedSecaurity,
                            });
                          }}
                          className="form-check-input shadow border"
                          type="checkbox"
                          checked={formData.secaurity}
                          id="flexCheckDefault"
                        />

                        <label
                          className="form-check-label"
                          htmlFor="flexCheckChecked"
                        >
                          Security
                        </label>
                      </div>
                    </div>
                  )}

                  <div className="container">
                    <div className="row justify-content-between align-items-center">
                      <div className="col d-flex justify-content-center">
                        <button
                          onClick={() => {
                            setFormData({
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
                              page: 1,
                              isSelected: type,
                            });
                            setFilterData({
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
                              page: 1,
                              isSelected: type,
                            });
                            fetchDataByFilter();
                          }}
                          type="button"
                          className="btn btn-secondary"
                        >
                          <span className="ms-2 btn-serch">Clear</span>
                        </button>
                      </div>
                      <div className="col d-flex justify-content-center">
                        <button
                          onClick={() => {
                            formData.isSelected = type;
                            fetchDataByFilter();
                          }}
                          type="button"
                          className="btn btn-primary"
                        >
                          <FiSearch className="icons" />
                          <span className="ms-2 btn-serch">Search</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
