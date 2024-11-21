"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import Lightbox from "react-18-image-lightbox";
import "../../../node_modules/react-18-image-lightbox/style.css";

export default function PropertyDetailImg({ images }) {
  let [currentImageIndex, setCurrentImageIndex] = useState();
  let [open, setIsOpen] = useState(false);

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

  let currentImage = images[0].url;
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
            style={{ width: "100%", height: "70vh", objectFit: "cover" }}
            className="img-fluid rounded-3 shadow"
            alt=""
          />
        </Link>
        {images.length !== 1 && (
          <div
            className="position-absolute bottom-0 bg-opacity-50 rounded-1 end-0"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              zIndex: 100,
              width: "250px",
              height: "150px",
              padding: "1rem",
            }}
          >
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
          onImageLoad={() => {
            images[currentImageIndex].url;
          }}
          mainSrc={images[currentImageIndex].url}
          prevSrc={
            images[(currentImageIndex + images.length - 1) % images.length]
          }
          nextSrc={images[currentImageIndex + 1]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={handleMovePrev}
          onMoveNextRequest={handleMoveNext}
        />
      )}
    </div>
  );
}
