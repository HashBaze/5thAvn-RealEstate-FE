"use client";

import React, { useEffect, useState } from "react";
import UseScroll from "../hooks/UseScroll";
import Navbar from "./navbar";
import Link from "next/link";
import Image from "next/image";
import Footer from "./footer";
import ScrollTop from "./scrollTop";
import PropertyFilterModal from "./propertyFilterModal";
import Spinner from "./spinner";
import {
  getAllSuburb,
  getPropertyByFilterPagination,
  getPropertys,
} from "../service/propertyService";
import PaginationForPropertys from "./paginationForPropertys";
import { useSearchParams } from "next/navigation";

export default function PropertyListings() {
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

  const searchParams = useSearchParams();
  const type = searchParams.get("type");

  const [loading, setLoading] = useState(false);
  const isScrolled = UseScroll();
  const [isMobile, setIsMobile] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [suburb, setSuburb] = useState([]);
  const [propertyData, setPropertyData] = useState([]);
  const [pageInfo, setPageInfo] = useState({});
  const [totalCount, setTotalCount] = useState(0);
  const [isFilterOn, setIsFilterOn] = useState(false);
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
    page: 2,
    isSelected: type,
  });

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    formData.isSelected = type;
    setIsFilterOn(true);
    fetchFilter(1);
    getAllSuburb().then((data) => {
      setSuburb(data);
    });
  }, [type]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 440);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const fetchData = (data) => {
    setLoading(true);
    getPropertys(data).then((data) => {
      setPropertyData(data.properties.edges);
      setPageInfo(data.properties.pageInfo);
      setTotalCount(data.properties.totalCount);
      setLoading(false);
      window.scrollTo(0, 0);
    });
  };

  const fetchDataByFilter = () => {
    setIsFilterOn(true);
    fetchFilter(1);
  };

  const fetchFilter = (pageIndex) => {
    formData.page = pageIndex;
    setLoading(true);
    getPropertyByFilterPagination(formData).then((data) => {
      setPropertyData(data.edges);
      setPageInfo(data.pageinfo);
      setTotalCount(data.pageinfo.totalItems);
      setLoading(false);
      window.scrollTo(0, 0);
    });
  };

  return (
    <>
      {loading && <Spinner />}
      <Navbar
        navClass="defaultscroll sticky"
        menuClass="navigation-menu nav-left"
        scrolled={isScrolled}
      />
      <section
        className="bg-half-170 d-table w-100"
        style={{ backgroundImage: "url('/images/bg/03.jpg')" }}
      >
        <div className="bg-overlay bg-gradient-overlay-2"></div>
        <div className="container">
          <div className="row mt-5 justify-content-center">
            <div className="col-12">
              <div className="title-heading text-center">
                <p className="text-white-50 para-desc mx-auto mb-0">
                  Grid view Listing
                </p>
                <h5 className="heading fw-semibold mb-0 sub-heading text-white title-dark">
                  {type === "Sale"
                    ? "For Sale"
                    : type === "Rent"
                    ? "For Rent"
                    : type === "Land"
                    ? "Lands"
                    : ""}
                </h5>
              </div>
            </div>
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

      <section className="section">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-4 col-md-12 col-12">
              <div className="card bg-white p-4 rounded-3 shadow sticky-bar">
                <div>
                  <h6 className="mb-0">Search Properties</h6>
                </div>

                {isMobile && (
                  <div className="mt-4">
                    <ul className="d-flex flex-column">
                      <li className="list-inline-item mb-1">
                        {formData.bathRooms && (
                          <span className="text-dark me-2 ms-1">
                            Bathrooms:{" "}
                            <span className="text-muted">
                              {formData.bathRooms}
                            </span>
                          </span>
                        )}
                      </li>
                      <li className="list-inline-item mb-1">
                        {formData.bedRoomMin && formData.bedRoomMax && (
                          <span className="text-dark me-2">
                            Bedrooms:{" "}
                            <span className="text-muted">
                              {formData.bedRoomMin} - {formData.bedRoomMax}
                            </span>
                          </span>
                        )}
                      </li>
                      <li className="list-inline-item mb-1">
                        {formData.houseCategory &&
                          formData.houseCategory != "any" && (
                            <span className="text-dark me-2">
                              House Category:{" "}
                              <span className="text-secondary">
                                {formData.houseCategory}
                              </span>
                            </span>
                          )}
                      </li>
                      <li className="list-inline-item mb-1">
                        {formData.suburb && (
                          <span className="text-dark me-2">
                            Suburb:{" "}
                            <span className="text-muted">
                              {formData.suburb}
                            </span>
                          </span>
                        )}
                      </li>
                      <li className="list-inline-item mb-1">
                        {formData.priceFrom &&
                          formData.priceFrom != "any" &&
                          formData.priceTo &&
                          formData.priceTo != "any" && (
                            <span className="text-dark me-2">
                              Price:{" "}
                              <span className="text-muted">
                                {formData.priceFrom} - {formData.priceTo}
                              </span>
                            </span>
                          )}
                      </li>
                      <li className="list-inline-item mb-1">
                        {formData.airConditioning && (
                          <span className="text-dark me-2">
                            Air Conditioning:{" "}
                            <span className="text-muted">Yes</span>
                          </span>
                        )}
                      </li>
                      <li className="list-inline-item mb-1">
                        {formData.pool && (
                          <span className="text-dark me-2">
                            Pool: <span className="text-muted">Yes</span>
                          </span>
                        )}
                      </li>
                      <li className="list-inline-item mb-1">
                        {formData.secaurity && (
                          <span className="text-dark me-2">
                            Secaurity: <span className="text-muted">Yes</span>
                          </span>
                        )}
                      </li>
                    </ul>
                  </div>
                )}

                {!isMobile && (
                  <div className="mt-4 row">
                    {type != "Land" && (
                      <div className="col-6">
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
                            }}
                            className="form-select"
                            aria-label="Default select example"
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
                      <div className="col-6">
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
                            }}
                            className="form-select"
                            aria-label="Default select example"
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
                      <div className="col-6 mt-2">
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
                            }}
                            className="form-select"
                            aria-label="Default select example"
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

                    <div className="col-6 mt-2">
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
                          }}
                          className="form-select"
                          aria-label="Default select example"
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
                      <div className="col-6 mt-2">
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
                            }}
                            className="form-select"
                            aria-label="Default select example"
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

                    <div className="col-6 mt-2">
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
                          }}
                          className="form-select"
                          aria-label="Default select example"
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

                    <div className="col-6 mt-2">
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
                          }}
                          className="form-select"
                          aria-label="Default select example"
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
                      <div className="col-6 mt-2">
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

                    {type != "Land" && (
                      <div className="row w-75 mt-3">
                        <div className="col mt-2 form-check">
                          <input
                            onChange={(e) => {
                              const updatedAirConditioning =
                                !formData.airConditioning;
                              setFormData({
                                ...formData,
                                airConditioning: updatedAirConditioning,
                              });
                            }}
                            className="form-check-input shadow"
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

                        <div className="col form-check mt-2">
                          <input
                            onChange={(e) => {
                              const updatedPool = !formData.pool;
                              setFormData({ ...formData, pool: updatedPool });
                            }}
                            className="form-check-input shadow"
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

                        <div className="col mt-2 form-check">
                          <input
                            onChange={(e) => {
                              const updatedSecaurity = !formData.secaurity;
                              setFormData({
                                ...formData,
                                secaurity: updatedSecaurity,
                              });
                            }}
                            className="form-check-input shadow"
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
                  </div>
                )}

                <div className="mt-2 d-flex justify-content-between">
                  {!isMobile && (
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
                          page: 2,
                          isSelected: type,
                        });
                        fetchData({
                          first: 10,
                          after: null,
                        });
                      }}
                      className="btn btn-secondary btn-sm w-25"
                    >
                      Clear
                    </button>
                  )}
                  <button
                    onClick={isMobile ? setIsModalOpen : fetchDataByFilter}
                    className="btn ms-2 btn-primary w-100"
                  >
                    Apply Filter
                  </button>
                </div>
              </div>
            </div>

            <div className="col-lg-8 col-md-12 col-12">
              <div className="row g-4">
                {propertyData.length > 0 ? (
                  propertyData.map((item, index) => {
                    return (
                      <div className="col-12" key={index}>
                        <div className="card property property-list border-0 shadow position-relative overflow-hidden rounded-3">
                          <div className="d-md-flex">
                            <div className="property-image position-relative overflow-hidden shadow flex-md-shrink-0 rounded-3 m-2">
                              <Image
                                src={item.node.thumbnailSquare}
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: "100%", height: "auto" }}
                                className="img-fluid h-100 w-100"
                                alt=""
                              />
                            </div>
                            <div className="card-body content p-3">
                              <Link
                                href={`/propertyListings/${type.toLocaleLowerCase()}/viewProperty?property=${item.node.formattedAddress
                                  .toLowerCase()
                                  .replace(/\s+/g, "-")}-${item.node.id}`}
                                className="title fs-5 text-dark fw-medium"
                              >
                                {item.node.formattedAddress}
                              </Link>

                              <p className="text-muted">
                                {item.node.listingDetails.__typename}
                              </p>

                              <ul className="list-unstyled border-top border-bottom d-flex align-items-center justify-content-between">
                                {item.node.landSize && (
                                  <li className="d-flex align-items-center me-3">
                                    <i className="mdi mdi-arrow-expand-all fs-5 me-2 text-primary"></i>
                                    <span className="text-muted">
                                      {item.node.landSize}
                                    </span>
                                  </li>
                                )}

                                {item.node.listingDetails.garageSpaces && (
                                  <li className="d-flex align-items-center me-3">
                                    <i className="mdi mdi-car fs-5 me-2 text-primary"></i>
                                    <span className="text-muted">
                                      {item.node.listingDetails.garageSpaces}
                                    </span>
                                  </li>
                                )}

                                {item.node.listingDetails.bedrooms && (
                                  <li className="d-flex align-items-center me-3">
                                    <i className="mdi mdi-bed fs-5 me-2 text-primary"></i>
                                    <span className="text-muted">
                                      {item.node.listingDetails.bedrooms} Beds
                                    </span>
                                  </li>
                                )}
                                {item.node.listingDetails.bathrooms && (
                                  <li className="d-flex align-items-center">
                                    <i className="mdi mdi-shower fs-5 me-2 text-primary"></i>
                                    <span className="text-muted">
                                      {item.node.listingDetails.bathrooms} Baths
                                    </span>
                                  </li>
                                )}
                              </ul>
                              <ul className="list-unstyled d-flex justify-content-between mt-2 mb-0">
                                {item.node.price != 0 && item.node.price && (
                                  <li className="list-inline-item mb-0">
                                    <span className="text-muted">Price</span>
                                    <p className="fw-medium mb-0">
                                      {item.node.price} $
                                    </p>
                                  </li>
                                )}

                                {item.node.soldDate && (
                                  <li className="list-inline-item mb-0">
                                    <span className="text-muted">Sold On</span>
                                    <p className="fw-medium mb-0">
                                      {item.node.soldDate}
                                    </p>
                                  </li>
                                )}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div>
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
                  </div>
                )}
              </div>

              <div className="row">
                <div className="col-12 mt-4 pt-2">
                  <PaginationForPropertys
                    pageInfo={pageInfo}
                    totalCount={totalCount}
                    isFilterOn={isFilterOn}
                    fetchFilter={fetchFilter}
                    onPageChange={(data) => {
                      fetchData(data);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <ScrollTop />
      <PropertyFilterModal
        isModalOpen={isModalOpen}
        handleOpenModal={handleOpenModal}
        handleCloseModal={handleCloseModal}
        fetchDataByFilter={fetchDataByFilter}
        setFilterData={setFormData}
        type={type}
      />
    </>
  );
}
