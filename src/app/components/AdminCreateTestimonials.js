"use client";

import React, { useEffect, useRef, useState } from "react";
import WithAuth from "../hoc/WithAuth";
import { useAuth } from "../context/AuthContext";
import NavBar from "../admin/common/NavBar";
import SlideBar from "../admin/common/SlideBar";
import Image from "next/image";
import { storage } from "../firebase/config";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { MdDelete } from "react-icons/md";
import Spinner from "./Spinner";
import {
  createReview,
  getOneReview,
  updateReview,
} from "../service/testimonialsService";
import Swal from "sweetalert2";
import { useRouter, useSearchParams } from "next/navigation";

function AdminCreateTestimonials() {
  const searchParams = useSearchParams();
  const reviewId = searchParams.get("reviewid");

  const router = useRouter();
  const { toggleSidebar, isSidebarVisible, showLoading, loading } = useAuth();
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [review, setTestimonials] = useState("");
  const [picture, setPicture] = useState(null);
  const [picturePreview, setPicturePreview] = useState("");
  const [url, setUrl] = useState("");
  const profileref = useRef(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedToken = localStorage.getItem("token");
      setToken(storedToken);
    }
  }, []);

  useEffect(() => {
    if (token && reviewId) {
      fetchReview();
    }
  }, [token]);

  const fetchReview = () => {
    getOneReview(reviewId, token).then((res) => {
      setName(res.name);
      setDesignation(res.designation);
      setTestimonials(res.review);
      setUrl(res.picture);
      setPicturePreview(res.picture);
    });
  };

  const handlePictureChange = async (e) => {
    const file = e.target.files[0];
    const path = "client-reviews/";
    const imageUrl = await uploadImageToFireBase(file, path);
    setUrl(imageUrl);
    if (file) {
      setPicture(file);
      picture && URL.revokeObjectURL(picture);
      const fileReader = new FileReader();
      fileReader.onloadend = () => {
        setPicturePreview(fileReader.result);
      };
      fileReader.readAsDataURL(file);
    }
  };

  const clearForm = () => {
    setName("");
    setDesignation("");
    setTestimonials("");
    setPicture(null);
    setPicturePreview("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (reviewId) {
      const data = { name, designation, review, picture: url };
      updateReview(reviewId, data, token).then((res) => {
        clearForm();
        Swal.fire({
          title: "Success",
          text: "Review Updated successfully",
          icon: "success",
        }).then((result) => {
          if (result.isConfirmed) {
            router.push("/admin/testimonials");
          }
        });
      });
    } else {
      const data = { name, designation, review, picture: url };
      createReview(data, token).then((res) => {
        clearForm();
        Swal.fire({
          title: "Success",
          text: "Review Create successfully",
          icon: "success",
        }).then((result) => {
          if (result.isConfirmed) {
            router.push("/admin/testimonials");
          }
        });
      });
    }
  };

  const uploadImageToFireBase = async (file, path) => {
    showLoading(true);
    const uniqueName = file.name;
    const storageRef = ref(storage, `${path}${uniqueName}`);
    try {
      await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(storageRef);
      console.log("File uploaded successfully:", downloadURL);
      showLoading(false);
      return downloadURL;
    } catch (error) {
      console.error("Error uploading cover image:", error);
      throw error;
    }
  };

  return (
    <>
      {loading && <Spinner />}
      <NavBar
        toggleSidebar={toggleSidebar}
        isSidebarVisible={isSidebarVisible}
      />
      <SlideBar isVisible={isSidebarVisible} />

      <div
        className="content"
        style={{
          marginLeft: isSidebarVisible ? "250px" : "0px",
          transition: "margin-left 0.3s ease",
          padding: "20px",
        }}
      >
        <div className="container mt-5">
          <h2 className="text-center">Client Testimonials Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="row mb-3">
              <div className="col">
                <label htmlFor="picture" className="form-label">
                  Picture of the Client (optional)
                </label>
                <br />
                <input
                  type="file"
                  className="form-control"
                  id="picture"
                  ref={profileref}
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={handlePictureChange}
                />

                <button
                  type="button"
                  className="btn btn-secondary btn-sm"
                  onClick={() => {
                    profileref.current.click();
                  }}
                >
                  Upload Profile Photo
                </button>

                {picturePreview && (
                  <div className="mb-3 position-relative">
                    <h5>Image Preview:</h5>
                    <button
                      onClick={() => {
                        setPicture(null);
                        setPicturePreview("");
                        setUrl("");
                      }}
                      className="btn btn-danger btn-sm position-absolute top-5"
                    >
                      <MdDelete />
                    </button>
                    <Image
                      src={picturePreview}
                      alt="Client's Picture"
                      width={150}
                      className="rounded-circle"
                      height={150}
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                )}
              </div>
              <div className="col">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control shadow-lg"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="col">
                <label htmlFor="designation" className="form-label">
                  Designation (optional)
                </label>
                <input
                  type="text"
                  className="form-control shadow-lg border"
                  id="designation"
                  value={designation}
                  onChange={(e) => setDesignation(e.target.value)}
                />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="review" className="form-label">
                Review
              </label>
              <textarea
                className="form-control shadow-lg border"
                id="review"
                rows="3"
                value={review}
                onChange={(e) => setTestimonials(e.target.value)}
                required
              />
            </div>

            <div className="text-center d-flex justify-content-end">
              <button type="submit" className="btn btn-primary">
                {reviewId ? "Update" : "Create"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default WithAuth(AdminCreateTestimonials);
