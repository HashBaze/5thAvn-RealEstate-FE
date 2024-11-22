import React, { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import { propertyType } from "../data/data";

export default function PropertyFilterModal({
  isModalOpen,
  handleCloseModal,
  fetchDataByFilter,
  setFilterData,
}) {

  const [isSelect, setIsSelect] = useState(propertyType.RENT);
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
    isSelected: propertyType.RENT,
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
              <form className="card-body text-start container bg-white rounded p-3">
                <div className="registration-form text-dark text-start">
                  <div className="row">
                    <div className="row g-lg-0 p-2 row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-6 mb-3">
                      <button
                        type="button"
                        onClick={() => {
                          setIsSelect(propertyType.RENT);
                          setFormData({
                            ...formData,
                            isSelected: propertyType.RENT,
                          });
                          setFilterData({
                            ...formData,
                            isSelected: propertyType.RENT,
                          });
                        }}
                        className={`btn ${
                          isSelect === "Rent" ? "btn-primary" : "bg-transparent"
                        }`}
                      >
                        Rent
                      </button>
                      <button
                        onClick={() => {
                          setIsSelect(propertyType.SALE);
                          setFormData({
                            ...formData,
                            isSelected: propertyType.SALE,
                          });
                          setFilterData({
                            ...formData,
                            isSelected: propertyType.SALE,
                          });
                        }}
                        type="button"
                        className={`btn ${
                          isSelect === propertyType.SALE ? "btn-primary" : "bg-transparent"
                        }`}
                      >
                        Sale
                      </button>
                    </div>

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
                            // setFilterData({
                            //   ...formData,
                            //   page: 2,
                            // });
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
                        >
                          <option value="any">any</option>
                          <option value="BENTLEIGH">BENTLEIGH</option>
                          <option value="BERWICK">BERWICK</option>
                          <option value="BEVERIDGE">BEVERIDGE</option>
                          <option value="CHIRNSIDE PARK">CHIRNSIDE PARK</option>
                          <option value="CLAYTON">CLAYTON</option>
                          <option value="CLYDE3">CLYDE</option>
                          <option value="CLYDE NORTH3">CLYDE NORTH</option>
                          <option value="CRAIGIEBURN">CRAIGIEBURN</option>
                          <option value="CRANBOURNE NORTH">
                            CRANBOURNE NORTH
                          </option>
                          <option value="CRANBOURNE WEST">
                            CRANBOURNE WEST
                          </option>
                          <option value="DOVETON">DOVETON</option>
                          <option value="ENDEAVOUR HILLS">
                            ENDEAVOUR HILLS
                          </option>
                          <option value="GLENROY">GLENROY</option>
                          <option value="HAMPTON PARK">HAMPTON PARK</option>
                          <option value="HAMPTON">HAMPTON</option>
                          <option value="Melbourne">Melbourne</option>
                          <option value="MICKLEHAM">MICKLEHAM</option>
                          <option value="NARRE WARREN">NARRE WARREN</option>
                          <option value="NARRE WARREN SOUTH">
                            NARRE WARREN SOUTH
                          </option>
                          <option value="OFFICER">OFFICER</option>
                          <option value="PAKENHAM">PAKENHAM</option>
                          <option value="RINGWOOD NORTH">RINGWOOD NORTH</option>
                        </select>
                      </div>
                    </div>

                    <div className="row mt-3">
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
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault"
                        >
                          Air Conditioning
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
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckChecked"
                        >
                          Pool
                        </label>
                      </div>

                      <div className="col form-check">
                        <input
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              secaurity: !formData.secaurity,
                            })
                          }
                          className="form-check-input shadow"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        ></input>
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckChecked"
                        >
                          Security
                        </label>
                      </div>
                    </div>

                    <div className="row justify-content-end p-3">
                      <button
                        onClick={() => {
                          formData.isSelected = isSelect;
                          fetchDataByFilter();
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
            </div>
          </div>
        </div>
      )}
    </>
  );
}
