import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function FuaturedProperties({ propertyData  }) {
  return (
    <>
      <div className="row justify-content-center">
        <div className="col">
          <div className="section-title text-center mb-4 pb-2">
            <h4 className="title mb-3">Featured Properties</h4>
            <p className="text-muted para-desc mb-0 mx-auto">
              A great plateform to buy, sell and rent your properties without
              any agent or commisions.
            </p>
          </div>
        </div>
      </div>

      <div className="row g-4 mt-5">
        {propertyData.length > 0 ? (
          propertyData.slice(0, 6).map((item, index) => {
            return (
              <div className="col-lg-4 col-md-6 col-12" key={index}>
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
                      href={`/propertyListings/viewProperty?id=${item.node.id}`}
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
                        <li className="list-inline-item mb-0">
                          <small className="text-muted">Price</small>
                          <br />
                          <small className="fw-medium mb-0">
                            {item.node.price} $
                          </small>
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
            <Link href="/propertyListings" className="mt-3 fs-6 text-primary">
              View More Properties{" "}
              <i className="mdi mdi-arrow-right align-middle"></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
