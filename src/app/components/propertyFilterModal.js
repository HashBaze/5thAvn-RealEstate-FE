import React, { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";

export default function PropertyFilterModal({ isModalOpen, handleCloseModal }) {
  const [activeTab, setActiveTab] = React.useState("BUY");
  const [showAllFeatures, setShowAllFeatures] = useState(false);
  const [showAllInDoorFeatures, setShowAllInDoorFeatures] = useState(false);
  const [showAllClimates, setShowAllClimates] = useState(false);
  const [showAllAccessibility, setShowAllAccessibility] = useState(false);

  const toggleAccessibility = () => {
    setShowAllAccessibility(!showAllAccessibility);
  };

  const toggleClimates = () => {
    setShowAllClimates(!showAllClimates);
  };

  const toggleFeatures = () => {
    setShowAllFeatures(!showAllFeatures);
  };

  const toggleInDoorFeatures = () => {
    setShowAllInDoorFeatures(!showAllInDoorFeatures);
  };

  const [formValues, setFormValues] = useState({
    propertyType: [],
    priceMin: "",
    priceMax: "",
    bedroomsMin: "",
    bedroomsMax: "",
    bathrooms: "",
    carSpaces: "",
    landSizeMin: "",
    landSizeMax: "",
    keywords: "",
    saleMethod: "",
    excludeContractOffer: false,
    outdoorFeatures: [],
    indoorFeatures: [],
    climates: [],
    accessibility: [],
  });

  const onCheckboxChange = (type) => {
    setFormValues((prevValues) => {
      const propertyType = [...prevValues.propertyType];
      if (propertyType.includes(type)) {
        return { ...prevValues, propertyType: propertyType.filter((item) => item !== type) };
      } else {
        return { ...prevValues, propertyType: [...propertyType, type] };
      }
    });
    console.log(formValues.propertyType);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

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
                height: "90vh",
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
              <div className="d-flex justify-content-center mt-4">
                <ul className="nav nav-tabs row justify-content-center">
                  <li className="col">
                    <button
                      className={`nav-link ${
                        activeTab === "BUY" ? "active" : ""
                      }`}
                      onClick={() => setActiveTab("BUY")}
                    >
                      Buy
                    </button>
                  </li>
                  <li className="col">
                    <button
                      className={`nav-link ${
                        activeTab === "RENT" ? "active" : ""
                      }`}
                      onClick={() => setActiveTab("RENT")}
                    >
                      Rent
                    </button>
                  </li>
                  <li className="col">
                    <button
                      className={`nav-link ${
                        activeTab === "SOLD" ? "active" : ""
                      }`}
                      onClick={() => setActiveTab("SOLD")}
                    >
                      Sold
                    </button>
                  </li>
                </ul>
              </div>

              <div className="modal-body p-5">
                <form>
                  <div className="mb-3">
                    <label className="form-label">Property Type</label>
                    <div className="row">
                      <div className="col-6 col-md-4">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="allTypes"
                            checked={formValues.propertyType.includes(
                              "All types"
                            )}
                            onChange={() => onCheckboxChange("All types")}
                          />
                          <label
                            className="form-check-label"
                          >
                            All types
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="house"
                            checked={formValues.propertyType.includes("House")}
                            onChange={() => onCheckboxChange("House")}
                          />
                          <label className="form-check-label">
                            House
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="townhouse"
                            checked={formValues.propertyType.includes(
                              "Townhouse"
                            )}
                            onChange={() => onCheckboxChange("Townhouse")}
                          />
                          <label
                            className="form-check-label"
                          >
                            Townhouse
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="apartment"
                            checked={formValues.propertyType.includes(
                              "Apartment & Unit"
                            )}
                            onChange={() =>
                              onCheckboxChange("Apartment & Unit")
                            }
                          />
                          <label
                            className="form-check-label"
                          >
                            Apartment & Unit
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="villa"
                            checked={formValues.propertyType.includes("Villa")}
                            onChange={() => onCheckboxChange("Villa")}
                          />
                          <label className="form-check-label">
                            Villa
                          </label>
                        </div>
                      </div>

                      {(activeTab === "BUY" || activeTab === "SOLD") && (
                        <div className="col-6 col-md-4">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="retirementLiving"
                              checked={formValues.propertyType.includes(
                                "Retirement Living"
                              )}
                              onChange={() =>
                                onCheckboxChange("Retirement Living")
                              }
                            />
                            <label
                              className="form-check-label"
                              htmlFor="retirementLiving"
                            >
                              Retirement Living
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="land"
                              checked={formValues.propertyType.includes("Land")}
                              onChange={() => onCheckboxChange("Land")}
                            />
                            <label className="form-check-label" htmlFor="land">
                              Land
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="acreage"
                              checked={formValues.propertyType.includes(
                                "Acreage"
                              )}
                              onChange={() => onCheckboxChange("Acreage")}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="acreage"
                            >
                              Acreage
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="rural"
                              checked={formValues.propertyType.includes(
                                "Rural"
                              )}
                              onChange={() => onCheckboxChange("Rural")}
                            />
                            <label className="form-check-label" htmlFor="rural">
                              Rural
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="blockOfUnits"
                              checked={formValues.propertyType.includes(
                                "Block Of Units"
                              )}
                              onChange={() =>
                                onCheckboxChange("Block Of Units")
                              }
                            />
                            <label
                              className="form-check-label"
                              htmlFor="blockOfUnits"
                            >
                              Block Of Units
                            </label>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Price</label>
                    <div className="row">
                      <div className="col">
                        <div className="">
                          <label className="form-label">Sold Date</label>
                          <select
                            className="form-select"
                            aria-label="Select number of bedrooms"
                          >
                            <option value="" disabled selected>
                              Choose...
                            </option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5+</option>
                          </select>
                        </div>
                      </div>
                      <div className="col">
                        <div className="">
                          <label className="form-label">Sold Date</label>
                          <select
                            className="form-select"
                            aria-label="Select number of bedrooms"
                          >
                            <option value="" disabled selected>
                              Choose...
                            </option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5+</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {(activeTab === "BUY" || activeTab === "SOLD") && (
                      <div className="form-check mt-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="priceCheck"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="priceCheck"
                        >
                          Only show properties with a price
                        </label>
                      </div>
                    )}

                    {activeTab === "SOLD" && (
                      <div className="row mt-3">
                        <div className="mb-3 col-6">
                          <label className="form-label">Sold Date</label>
                          <select
                            className="form-select"
                            aria-label="Select number of bedrooms"
                          >
                            <option value="" disabled selected>
                              Choose...
                            </option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5+</option>
                          </select>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="row">
                    <label className="form-label">Bedrooms</label>
                    <div className="mb-3 col">
                      <label className="form-label">Min</label>
                      <select
                        className="form-select"
                        aria-label="Select number of bedrooms"
                      >
                        <option value="" disabled selected>
                          Choose...
                        </option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5+</option>
                      </select>
                    </div>
                    <div className="mb-3 col">
                      <label className="form-label">Max</label>
                      <select
                        className="form-select"
                        aria-label="Select number of car spaces"
                      >
                        <option value="" disabled selected>
                          Choose...
                        </option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5+</option>
                      </select>
                    </div>
                  </div>

                  <div className="row">
                    <div className="mb-3 col">
                      <label className="form-label">Bath Rooms</label>
                      <select
                        className="form-select"
                        aria-label="Select number of bedrooms"
                      >
                        <option value="" disabled selected>
                          Choose...
                        </option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5+</option>
                      </select>
                    </div>
                    <div className="mb-3 col">
                      <label className="form-label">Car Spaces</label>
                      <select
                        className="form-select"
                        aria-label="Select number of car spaces"
                      >
                        <option value="" disabled selected>
                          Choose...
                        </option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5+</option>
                      </select>
                    </div>
                  </div>

                  <div className="row">
                    <label className="form-label">Land Size</label>
                    <div className="mb-3 col">
                      <label className="form-label">Min</label>
                      <select
                        className="form-select"
                        aria-label="Select number of bedrooms"
                      >
                        <option value="" disabled selected>
                          Choose...
                        </option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5+</option>
                      </select>
                    </div>
                    <div className="mb-3 col">
                      <label className="form-label">Max</label>
                      <select
                        className="form-select"
                        aria-label="Select number of car spaces"
                      >
                        <option value="" disabled selected>
                          Choose...
                        </option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5+</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-3 row w-75 mt-4">
                    <div className="form-check col">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="propertyType"
                        id="allTypes"
                        value="all"
                        defaultChecked
                      />
                      <label className="form-check-label" htmlFor="allTypes">
                        All types
                      </label>
                    </div>
                    <div className="form-check col">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="propertyType"
                        id="newProperty"
                        value="new"
                      />
                      <label className="form-check-label" htmlFor="newProperty">
                        New
                      </label>
                    </div>
                    <div className="form-check col">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="propertyType"
                        id="establishedProperty"
                        value="established"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="establishedProperty"
                      >
                        Established
                      </label>
                    </div>
                  </div>

                  <hr />

                  <div className="container mb-3">
                    <label className="form-label">Outdoor Features</label>
                    <div className="row">
                      {/* Initial 4 items */}
                      <div className="col-md-6">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="swimmingPool"
                            value="swimmingPool"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="swimmingPool"
                          >
                            Swimming Pool
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="garage"
                            value="garage"
                          />
                          <label className="form-check-label" htmlFor="garage">
                            Garage
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="balcony"
                            value="balcony"
                          />
                          <label className="form-check-label" htmlFor="balcony">
                            Balcony
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="outdoorArea"
                            value="outdoorArea"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="outdoorArea"
                          >
                            Outdoor Area
                          </label>
                        </div>
                      </div>

                      {/* Hidden items initially */}
                      {showAllFeatures && (
                        <>
                          <div className="col-md-6">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="undercoverParking"
                                value="undercoverParking"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="undercoverParking"
                              >
                                Undercover Parking
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="shed"
                                value="shed"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="shed"
                              >
                                Shed
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="fullyFenced"
                                value="fullyFenced"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="fullyFenced"
                              >
                                Fully Fenced
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="outdoorSpa"
                                value="outdoorSpa"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="outdoorSpa"
                              >
                                Outdoor Spa
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="tennisCourt"
                                value="tennisCourt"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="tennisCourt"
                              >
                                Tennis Court
                              </label>
                            </div>
                          </div>
                        </>
                      )}
                    </div>

                    {/* Toggle button */}
                    <a type="button" className="" onClick={toggleFeatures}>
                      {showAllFeatures
                        ? "Show fewer outdoor features..."
                        : "Show more outdoor features..."}
                    </a>
                  </div>

                  <hr />

                  <div className="container mb-3">
                    <label className="form-label">Indoor Features</label>
                    <div className="row">
                      {/* Initial 4 items */}
                      <div className="col-md-6">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="ensuite"
                            value="ensuite"
                          />
                          <label className="form-check-label" htmlFor="ensuite">
                            Ensuite
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="dishwasher"
                            value="dishwasher"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="dishwasher"
                          >
                            Dishwasher
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="study"
                            value="study"
                          />
                          <label className="form-check-label" htmlFor="study">
                            Study
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="builtInRobes"
                            value="builtInRobes"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="builtInRobes"
                          >
                            Built in Robes
                          </label>
                        </div>
                      </div>

                      {/* Hidden items initially */}
                      {showAllInDoorFeatures && (
                        <>
                          <div className="col-md-6">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="alarmSystem"
                                value="alarmSystem"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="alarmSystem"
                              >
                                Alarm System
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="broadband"
                                value="broadband"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="broadband"
                              >
                                Broadband
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="floorboards"
                                value="floorboards"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="floorboards"
                              >
                                Floorboards
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="gym"
                                value="gym"
                              />
                              <label className="form-check-label" htmlFor="gym">
                                Gym
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="rumpusRoom"
                                value="rumpusRoom"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="rumpusRoom"
                              >
                                Rumpus Room
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="workshop"
                                value="workshop"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="workshop"
                              >
                                Workshop
                              </label>
                            </div>
                          </div>
                        </>
                      )}
                    </div>

                    {/* Toggle button */}
                    <a
                      type="button"
                      className=""
                      onClick={toggleInDoorFeatures}
                    >
                      {showAllInDoorFeatures
                        ? "Show fewer indoor features..."
                        : "Show more indoor features..."}
                    </a>
                  </div>

                  <hr />

                  <div className="container mb-3">
                    <label className="form-label">
                      Climate Control & Energy
                    </label>
                    <div className="row">
                      {/* Initial 4 items */}
                      <div className="col-md-6">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="airConditioning"
                            value="airConditioning"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="airConditioning"
                          >
                            Air Conditioning
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="solarPanels"
                            value="solarPanels"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="solarPanels"
                          >
                            Solar Panels
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="heating"
                            value="heating"
                          />
                          <label className="form-check-label" htmlFor="heating">
                            Heating
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="fireplace"
                            value="fireplace"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="fireplace"
                          >
                            Fireplace
                          </label>
                        </div>
                      </div>

                      {/* Hidden items initially */}
                      {showAllClimates && (
                        <>
                          <div className="col-md-6">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="highEnergyEfficiency"
                                value="highEnergyEfficiency"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="highEnergyEfficiency"
                              >
                                High Energy Efficiency
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="waterTank"
                                value="waterTank"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="waterTank"
                              >
                                Water Tank
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="solarHotWater"
                                value="solarHotWater"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="solarHotWater"
                              >
                                Solar Hot Water
                              </label>
                            </div>
                          </div>
                        </>
                      )}
                    </div>

                    <a type="button" className="" onClick={toggleClimates}>
                      {showAllClimates
                        ? "Show fewer Climates features..."
                        : "Show more Climates features..."}
                    </a>
                  </div>

                  <hr />

                  <div className="container mb-3">
                    <label className="form-label">Accessibility Features</label>
                    <div className="row">
                      {/* Initial 4 items */}
                      <div className="col-md-6">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="singleStorey"
                            value="singleStorey"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="singleStorey"
                          >
                            Single Storey
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="stepFreeEntry"
                            value="stepFreeEntry"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="stepFreeEntry"
                          >
                            Step Free Entry
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="wideDoorways"
                            value="wideDoorways"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="wideDoorways"
                          >
                            Wide Doorways
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="elevator"
                            value="elevator"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="elevator"
                          >
                            Elevator
                          </label>
                        </div>
                      </div>

                      {/* Hidden items initially */}
                      {showAllAccessibility && (
                        <>
                          <div className="col-md-6">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="rollInShower"
                                value="rollInShower"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="rollInShower"
                              >
                                Roll in Shower
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="bathroomGrabRails"
                                value="bathroomGrabRails"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="bathroomGrabRails"
                              >
                                Bathroom Grab Rails
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="accessibleParking"
                                value="accessibleParking"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="accessibleParking"
                              >
                                Accessible Parking
                              </label>
                            </div>
                          </div>
                        </>
                      )}
                    </div>

                    <a type="button" className="" onClick={toggleAccessibility}>
                      {showAllAccessibility
                        ? "Show fewer Accessibility features..."
                        : "Show more Accessibility features..."}
                    </a>
                  </div>

                  <hr />

                  <div className="container mb-3">
                    <label className="form-label">Keywords</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Air con, pool, garage, solar, ensuite..."
                      aria-label="Add specific property features to your search"
                    />
                  </div>

                  <hr />

                  {activeTab === "BUY" && (
                    <div class="container mb-3">
                      <label class="form-label">Sale Method</label>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="saleMethod"
                          id="allTypesin"
                          value="allTypesin"
                        />
                        <label class="form-check-label" for="allTypesin">
                          All types
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="saleMethod"
                          id="privateTreaty"
                          value="privateTreaty"
                        />
                        <label class="form-check-label" for="privateTreaty">
                          Private treaty sale
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="saleMethod"
                          id="auction"
                          value="auction"
                        />
                        <label class="form-check-label" for="auction">
                          Auction
                        </label>
                      </div>
                    </div>
                  )}

                  {(activeTab === "BUY" || activeTab === "RENT") && (
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="excludeContractOffer"
                      />
                      <label
                        class="form-check-label"
                        for="excludeContractOffer"
                      >
                        Exclude properties under contract/offer
                      </label>
                    </div>
                  )}
                </form>
              </div>
              {/* )} */}

              <div className="modal-footer d-flex justify-content-between">
                <button
                  type="button"
                  className="btn"
                  onClick={handleCloseModal}
                >
                  Clear filters
                </button>
                <button type="button" className="btn btn-primary">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
