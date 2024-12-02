"use client";

import React, { useEffect, useState } from "react";
import Navbar from "./navbar";
import PropertyDetailImg from "./propertyDetailImg";
import Link from "next/link";
import ProprtySlider from "./propertySlider";
import Footer from "./footer";
import { getProperty } from "../service/propertyService";
import Spinner from "./spinner";

export default function ViewProperty({type , id}) {
  
  const [loading, setLoading] = useState(false);
  const [images, setImages] = React.useState([]);
  const [property, setProperty] = React.useState({
    formattedAddress: "",
    landSize: "",
    garageSpaces: "",
    price: "",
    status: "",
    daysOnMarket: "",
    country: "",
    longitude: "",
    latitude: "",
    streetNo: "",
    listingDetails: {
      bedrooms: "",
      bathrooms: "",
      garageSpaces: "",
    },
  });

  useEffect(() => {
    setLoading(true);
    getProperty(id).then((response) => {
      setProperty(response.property);
      setImages(response.property.images);
      setLoading(false);
    }).catch((error) => {
      console.error(error);
      setLoading(false);
    });
  }, [id]);

  return (
    <>
      {loading && <Spinner />}
      <Navbar
        navClass="defaultscroll sticky"
        menuClass="navigation-menu nav-left"
        scrolled={true}
      />
      <section className="section mt-5 pt-4">
        <div className="container-fluid mt-2">
          {images.length && <PropertyDetailImg images={images} />}
        </div>

        <div className="container mt-100 mt-60">
          <div className="row g-4">
            <div className="col-lg-8 col-md-7 col-12">
              <div className="section-title">
                <h4 className="title mb-0">{property.formattedAddress}</h4>

                <ul className="list-unstyled mb-0 py-3">
                  {property.landSize && (
                    <li className="list-inline-item">
                      <span className="d-flex align-items-center me-4">
                        <i className="mdi mdi-arrow-expand-all fs-4 me-2 text-primary"></i>
                        <span className="text-muted fs-5">
                          {property.landSize}
                        </span>
                      </span>
                    </li>
                  )}

                  <li className="list-inline-item">
                    <span className="d-flex align-items-center me-4">
                      <i className="mdi mdi-parking fs-4 me-2 text-primary"></i>
                      <span className="text-muted fs-5">
                        {property.listingDetails.garageSpaces}
                      </span>
                    </span>
                  </li>

                  <li className="list-inline-item">
                    <span className="d-flex align-items-center me-4">
                      <i className="mdi mdi-bed fs-4 me-2 text-primary"></i>
                      <span className="text-muted fs-5">
                        {property.listingDetails.bedrooms} Beds
                      </span>
                    </span>
                  </li>

                  <li className="list-inline-item">
                    <span className="d-flex align-items-center">
                      <i className="mdi mdi-shower fs-4 me-2 text-primary"></i>
                      <span className="text-muted fs-5">
                        {property.listingDetails.bathrooms} Baths
                      </span>
                    </span>
                  </li>
                </ul>

                <p className="text-muted">{property.description}</p>

                <div className="card map border-0">
                  <div className="card-body p-0">
                    <iframe
                      src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${property.latitude},${property.longitude}`}
                      className="rounded-3"
                      style={{ border: "0" }}
                      title="5th Avenue"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-5 col-12">
              <div className="rounded-3 shadow bg-white sticky-bar p-4">
                <h5 className="mb-3">Price:</h5>

                <div className="d-flex align-items-center justify-content-between">
                  <h5 className="mb-0">$ {property.price}</h5>
                  <span className="badge bg-primary">{property.status}</span>
                </div>

                <div className="">
                  <div className="d-flex align-items-center justify-content-between mt-2">
                    <span className="small text-muted">Days</span>
                    <span className="small">{property.daysOnMarket}</span>
                  </div>

                  <div className="d-flex align-items-center justify-content-between mt-2">
                    <span className="small text-muted">Country</span>
                    <span className="small">{property.country}</span>
                  </div>

                  <div className="d-flex align-items-center justify-content-between mt-2">
                    <span className="small text-muted">Street NO</span>
                    <span className="small">{property.streetNo}</span>
                  </div>
                </div>

                {property.vendors &&
                  property.vendors[0]?.contact?.phoneNumbers?.[0]
                    ?.phoneNumber && (
                    <div className="d-flex mt-3">
                      <Link
                      className="btn btn-primary w-100 me-2"
                        href={`tel:${property.vendors[0].contact.phoneNumbers[0].phoneNumber}`}
                      >
                        Contact
                      </Link>
                    </div>
                  )}
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-100 mt-60">
          <div className="row justify-content-center">
            <div className="col">
              <div className="section-title text-center mb-4 pb-2">
                <h4 className="title mb-3">Related Properties</h4>
                <p className="text-muted para-desc mb-0 mx-auto">
                  A great plateform to buy, sell and rent your properties
                  without any agent or commisions.
                </p>
              </div>
            </div>
          </div>
          <ProprtySlider />
        </div>
      </section>
      <Footer />
    </>
  );
}
