"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import Lightbox from "react-18-image-lightbox";
import "../../../node_modules/react-18-image-lightbox/style.css";

export default function PropertyDetailImg({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [open, setIsOpen] = useState(false);

  const handleMovePrev = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + images.length - 1) % images.length
    );
  };

  const handleMoveNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
    setIsOpen(true);
  };

  const currentImage = images[0]?.url;

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
            src={currentImage}
            width={0}
            height={0}
            sizes="100vh"
            className="img-fluid rounded-3 shadow single-view-mail-img"
            alt="Property"
          />
        </Link>
        {images.length > 1 && (
          <div className="position-absolute bottom-0 bg-opacity-50 rounded-1 end-0 view-more-image">
            <div
              onClick={() => handleImageClick(0)}
              className="d-flex justify-content-center align-items-center h-100 position-relative view-more"
              style={{ cursor: "pointer", zIndex: 0 }}
            >
              <div className="position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center rounded-3">
                <h3 className="text-white">
                  More
                  {images.length > 1 && (
                    <span className="text-white">+{images.length - 1}</span>
                  )}
                </h3>
              </div>
            </div>
          </div>
        )}
      </div>

      {open && (
        <Lightbox
          mainSrc={images[currentImageIndex].url}
          prevSrc={
            images[(currentImageIndex + images.length - 1) % images.length].url
          }
          nextSrc={images[(currentImageIndex + 1) % images.length].url}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={handleMovePrev}
          onMoveNextRequest={handleMoveNext}
        />
      )}
    </div>
  );
}
