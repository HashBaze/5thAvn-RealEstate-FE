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
  getPropertyByFilterPagination,
  getPropertys,
} from "../service/propertyService";
import PaginationForPropertys from "./paginationForPropertys";
import { useSearchParams } from "next/navigation";

export default function PropertyListings() {
  const searchParams = useSearchParams();
  const type = searchParams.get("type");
  const [loading, setLoading] = useState(false);

  const isScrolled = UseScroll();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [propertyData, setPropertyData] = useState([]);
  const [pageInfo, setPageInfo] = useState({});
  const [totalCount, setTotalCount] = useState(0);
  const [isFilterOn, setIsFilterOn] = useState(false);
  const [filterData, setFilterData] = useState({
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
    if (type == "Sale") {
      fetchData({
        first: 10,
        after: null,
      });
    } else {
      filterData.isSelected = type;
      setIsFilterOn(true);
      fetchFilter(1);
    }
  }, [type]);

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
    filterData.page = pageIndex;
    setLoading(true);
    getPropertyByFilterPagination(filterData).then((data) => {
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

                <div className="mt-4">
                  <ul className="d-flex flex-column">
                    <li className="list-inline-item mb-1">
                      {filterData.bathRooms && (
                        <span className="text-dark me-2 ms-1">
                          Bathrooms:{" "}
                          <span className="text-muted">
                            {filterData.bathRooms}
                          </span>
                        </span>
                      )}
                    </li>
                    <li className="list-inline-item mb-1">
                      {filterData.bedRoomMin && filterData.bedRoomMax && (
                        <span className="text-dark me-2">
                          Bedrooms:{" "}
                          <span className="text-muted">
                            {filterData.bedRoomMin} - {filterData.bedRoomMax}
                          </span>
                        </span>
                      )}
                    </li>
                    <li className="list-inline-item mb-1">
                      {filterData.houseCategory &&
                        filterData.houseCategory != "any" && (
                          <span className="text-dark me-2">
                            House Category:{" "}
                            <span className="text-secondary">
                              {filterData.houseCategory}
                            </span>
                          </span>
                        )}
                    </li>
                    <li className="list-inline-item mb-1">
                      {filterData.suburb && (
                        <span className="text-dark me-2">
                          Suburb:{" "}
                          <span className="text-muted">
                            {filterData.suburb}
                          </span>
                        </span>
                      )}
                    </li>
                    <li className="list-inline-item mb-1">
                      {filterData.priceFrom &&
                        filterData.priceFrom != "any" &&
                        filterData.priceTo &&
                        filterData.priceTo != "any" && (
                          <span className="text-dark me-2">
                            Price:{" "}
                            <span className="text-muted">
                              {filterData.priceFrom} - {filterData.priceTo}
                            </span>
                          </span>
                        )}
                    </li>
                    <li className="list-inline-item mb-1">
                      {filterData.airConditioning && (
                        <span className="text-dark me-2">
                          Air Conditioning:{" "}
                          <span className="text-muted">Yes</span>
                        </span>
                      )}
                    </li>
                    <li className="list-inline-item mb-1">
                      {filterData.pool && (
                        <span className="text-dark me-2">
                          Pool: <span className="text-muted">Yes</span>
                        </span>
                      )}
                    </li>
                    <li className="list-inline-item mb-1">
                      {filterData.secaurity && (
                        <span className="text-dark me-2">
                          Secaurity: <span className="text-muted">Yes</span>
                        </span>
                      )}
                    </li>
                  </ul>
                </div>

                <div className="">
                  <button
                    onClick={handleOpenModal}
                    className="btn btn-primary w-100"
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
                                href={`/propertyListings/viewProperty?id=${item.node.id}`}
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
                                      {item.node.soldDate} ${" "}
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
        setFilterData={setFilterData}
        type={type}
      />
    </>
  );
}
