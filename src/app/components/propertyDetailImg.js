"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import Lightbox from "react-18-image-lightbox";
import "../../../node_modules/react-18-image-lightbox/style.css";

export default function PropertyDetailImg() {
  let [currentImageIndex, setCurrentImageIndex] = useState();
  let [open, setIsOpen] = useState(false);
  let images = [
    "/images/property/single/1.jpg",
    "/property/single/2.jpg",
    "/images/property/single/3.jpg",
    "/images/property/single/4.jpg",
    "/images/property/single/5.jpg",
  ];

  let handleMovePrev = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + images.length - 1) % images.length
    );
  };

  let handleMoveNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  let handleImageClick = (index) => {
    setCurrentImageIndex(index);
    setIsOpen(true);
  };

  let currentImage = images[currentImageIndex];
  return (
    <div className="row g-2">
      <div className="col position-relative">
        <Link
          href="#"
          onClick={() => handleImageClick(0)}
          className="lightbox"
          title=""
        >
          <Image
            src="/images/property/single/1.jpg"
            width={0}
            height={0}
            sizes="100vh"
            style={{ width: "100%", height: "auto" }}
            className="img-fluid rounded-3 shadow"
            alt=""
          />
        </Link>
        <div
          className="position-absolute bottom-0 bg-opacity-50 rounded-1 end-0"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            zIndex: 100,
            width: "300px",
            height: "200px",
            padding: "1rem",
          }}
        >
          <div
            onClick={() => handleImageClick(0)}
            className="d-flex justify-content-center align-items-center h-100 position-relative view-more"
            style={{ cursor: "pointer", zIndex: 0 }}
          >
            <div className="position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center rounded-3">
              <span className="text-dark fw-bold">See More</span>
            </div>
          </div>
        </div>
      </div>

      {open && (
        <Lightbox
          mainSrc={currentImage}
          prevSrc={
            images[(currentImageIndex + images.length - 1) % images.length]
          }
          nextSrc={images[(currentImageIndex + 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={handleMovePrev}
          onMoveNextRequest={handleMoveNext}
        />
      )}
    </div>
  );
}
