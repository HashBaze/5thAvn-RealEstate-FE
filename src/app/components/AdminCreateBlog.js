"use client";

import React, { useEffect, useRef } from "react";
import WithAuth from "../authUtils/WithAuth";
import NavBar from "../admin/common/NavBar";
import SlideBar from "../admin/common/SlideBar";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import dynamic from "next/dynamic";
import { createBlog, getBlog, updateBlog } from "../service/blogService";
import Swal from "sweetalert2";
import { storage } from "../firebase/config";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import Spinner from "./Spinner";
import { useSearchParams, useRouter } from "next/navigation";

const RichTextEditor = dynamic(() => import("@mantine/rte"), { ssr: false });

const AdminCreateBlog = () => {
  const { showLoading, loading } = useAuth();
  const router = useRouter();

  const searchParams = useSearchParams();
  const blogId = searchParams.get("blogId");
  const [token, setTocken] = useState(null);
  const { toggleSidebar, isSidebarVisible } = useAuth();
  const [uploading, setUploading] = useState(false);
  const [addtionalImages, setAdditionalImages] = useState([]);

  const [errors, setErrors] = useState({});
  const [coverImage, setCoverImage] = useState(null);
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [description1, setDesc1] = useState(null);
  const [description2, setDesc2] = useState(null);
  const coverRef = useRef(null);
  const image1ref = useRef(null);
  const image2ref = useRef(null);
  const aditionalRef = useRef(null);
  const [formData, setFormData] = useState({
    coverImage: "",
    title: "",
    author: "",
    date: "",
    description1: "",
    image1: "",
    image2: "",
    description2: "",
    additionalImages: [],
    youtubeLink: "",
    tags: [],
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedToken = localStorage.getItem("token");
      setTocken(storedToken);
    }
  }, []);

  useEffect(() => {
    showLoading(true);
    if (blogId) {
      getBlog(blogId, token).then((res) => {
        showLoading(false);
        setFormData((prevData) => ({
          ...prevData,
          ...res,
        }));
        setCoverImage(res.coverImage);
        setImage1(res.image1);
        setImage2(res.image2);
        setDesc1(res.description1);
        setDesc2(res.description2);
        setAdditionalImages(res.additionalImages);
      });
    } else {
      showLoading(false);
    }
  }, [token]);

  const changeCoverImage = async (e) => {
    setUploading(true);
    const file = e.target.files[0];
    if (file) {
      setCoverImage(URL.createObjectURL(file));
      const imageUrl = await uploadImageToFireBase(file, "blog-cover-images/");
      setFormData((prevData) => ({ ...prevData, coverImage: imageUrl }));
    }
  };

  const uploadImageToFireBase = async (file, path) => {
    const uniqueName = file.name;
    const storageRef = ref(storage, `${path}${uniqueName}`);
    try {
      await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(storageRef);
      console.log("File uploaded successfully:", downloadURL);
      setUploading(false);
      return downloadURL;
    } catch (error) {
      console.error("Error uploading cover image:", error);
      throw error;
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.title) newErrors.title = "Title is required.";
    if (!formData.author) newErrors.author = "Author is required.";
    if (!formData.date) newErrors.date = "Date is required.";
    if (!description1) newErrors.description1 = "Description 1 is required.";
    if (!description2) newErrors.description2 = "Description 2 is required.";

    if (formData.tags.length === 0)
      newErrors.tags = "At least one tag is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const changeImage1 = async (e) => {
    setUploading(true);
    const file = e.target.files[0];
    const imageUrl = await uploadImageToFireBase(file, "blog-cover-images/");
    setFormData((prevData) => ({ ...prevData, image1: imageUrl }));
    if (file) {
      setImage1(URL.createObjectURL(file));
    }
  };

  const changeadditionalImage = async (e) => {
    setUploading(true);
    const file = e.target.files[0];
    const imageUrl = await uploadImageToFireBase(
      file,
      "blog-additional-images/"
    );
    setFormData((prevData) => ({
      ...prevData,
      additionalImages: [...prevData.additionalImages, imageUrl],
    }));
    console.log("file", file);
    if (file) {
      setAdditionalImages((prevImages) => [
        ...prevImages,
        URL.createObjectURL(file),
      ]);
    }
  };

  const deleteAdditionalImage = (url) => {
    setAdditionalImages((prevImages) =>
      prevImages.filter((img) => img !== url)
    );
    setFormData((prevData) => ({
      ...prevData,
      additionalImages: prevData.additionalImages.filter((img) => img !== url),
    }));
  };

  const clickAditionalImage = () => {
    aditionalRef.current.click();
  };

  const changeImage2 = async (e) => {
    setUploading(true);
    const file = e.target.files[0];
    const imageUrl = await uploadImageToFireBase(file, "blog-cover-images/");
    setFormData((prevData) => ({ ...prevData, image2: imageUrl }));
    if (file) {
      setImage2(URL.createObjectURL(file));
    }
  };

  const handleCoverButton = () => {
    coverRef.current.click();
  };

  const handleImage1Click = () => {
    image1ref.current.click();
  };

  const handleImage2Click = () => {
    image2ref.current.click();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const clearForm = () => {
    setFormData({
      coverImage: null,
      title: "",
      author: "",
      date: "",
      description1: "",
      image1: "",
      image2: "",
      description2: "",
      additionalImages: [],
      youtubeLink: "",
      tags: [],
    });
    setCoverImage(null);
    setImage1(null);
    setImage2(null);
    setDesc1("");
    setDesc2("");
    setAdditionalImages([]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    showLoading(true);
    if (!validateForm()) {
      showLoading(false);
      return;
    }
    formData.description1 = description1;
    formData.description2 = description2;
    console.log(formData.tags);

    if (typeof formData.tags === "string") {
      formData.tags = formData.tags.split(",").map((tag) => tag.trim());
    }

    try {
      if (blogId) {
        console.log("update !");
        updateBlog(blogId, formData, token).then((res) => {
          console.log(res);
          Swal.fire({
            title: "Success",
            text: "Blog updated successfully",
            icon: "success",
          }).then((result) => {
            if (result.isConfirmed) {
              router.push("/admin/blogs");
            }
          });
          clearForm();
          showLoading(false);
        });
      } else {
        createBlog(formData, token).then((res) => {
          console.log(res);
          Swal.fire({
            title: "Success",
            text: "Blog created successfully",
            icon: "success",
          }).then((result) => {
            if (result.isConfirmed) {
              router.push("/admin/blogs");
            }
          });
          clearForm();
          showLoading(false);
        });
      }
    } catch (e) {
      console.error(e);
      Swal.fire({
        title: "Error",
        text: "Error creating blog",
        icon: "error",
      });
      showLoading(false);
    }
  };

  return (
    <>
      {uploading && <Spinner />}
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
        <div className="container mt-5 bg-white rounded-3 shadow p-3">
          <h2>Create a New Blog</h2>
          <form onSubmit={handleSubmit}>
            <section className="row">
              <div className="mb-3 col">
                <div>
                  <label htmlFor="coverPhoto" className="form-label">
                    Cover Photo
                  </label>
                </div>
                <input
                  type="file"
                  className="form-control shadow"
                  id="coverPhoto"
                  name="coverPhoto"
                  style={{ display: "none" }}
                  ref={coverRef}
                  onChange={changeCoverImage}
                />
                <button
                  type="button"
                  className="btn btn-secondary btn-sm"
                  onClick={handleCoverButton}
                >
                  Upload Cover Image
                </button>
                {coverImage && (
                  <div className="mb-3 mt-2">
                    <h5>Selected Cover Photo:</h5>
                    <img
                      src={coverImage}
                      alt="Selected Cover"
                      className="img-fluid"
                      style={{ maxHeight: "200px", marginTop: "10px" }}
                    />
                  </div>
                )}
                {errors.coverPhoto && (
                  <div className="text-danger">{errors.coverPhoto}</div>
                )}
              </div>

              {/* Title */}
              <div className="mb-3 col">
                <label htmlFor="title" className="form-label">
                  Title
                </label>
                <input
                  type="text"
                  className="form-control shadow"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                />
                {errors.title && (
                  <div className="text-danger">{errors.title}</div>
                )}
              </div>

              {/* Author */}
              <div className="mb-3 col">
                <label htmlFor="author" className="form-label">
                  Author
                </label>
                <input
                  type="text"
                  className="form-control shadow"
                  id="author"
                  name="author"
                  value={formData.author}
                  onChange={handleChange}
                />
                {errors.author && (
                  <div className="text-danger">{errors.author}</div>
                )}
              </div>
            </section>

            {/* Date */}
            <div className="mb-3 w-25">
              <label htmlFor="date" className="form-label">
                Date
              </label>
              <input
                type="date"
                className="form-control"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
              />
              {errors.date && <div className="text-danger">{errors.date}</div>}
            </div>

            {/* Description 1 */}
            <div className="mb-3">
              <RichTextEditor
                controls={[
                  ["bold", "italic", "underline", "strike"],
                  ["unorderedList", "h1", "h2", "h3"],
                  ["sup", "sub", "blockquote"],
                  ["unorderedList", "orderedList"],
                  [
                    "alignLeft",
                    "alignCenter",
                    "alignRight",
                    "code",
                    "codeBlock",
                  ],
                ]}
                value={description1}
                onChange={(e) => {
                  setDesc1(e);
                }}
              />
              {errors.description1 && (
                <div className="text-danger">{errors.description1}</div>
              )}
            </div>

            <div className="row">
              {/* Image 1 */}
              <div className="mb-3 col">
                <div>
                  <label htmlFor="image1" className="form-label">
                    Image 1
                  </label>
                </div>
                <input
                  type="file"
                  className="form-control shadow"
                  name="image1"
                  style={{ display: "none" }}
                  ref={image1ref}
                  onChange={changeImage1}
                />
                <button
                  type="button"
                  className="btn btn-secondary btn-sm"
                  onClick={handleImage1Click}
                >
                  Upload Image One
                </button>
                {image1 && (
                  <div className="mb-3 mt-2">
                    <h5>Selected Image</h5>
                    <img
                      src={image1}
                      alt="Selected Image 1"
                      className="img-fluid"
                      style={{ maxHeight: "200px", marginTop: "10px" }}
                    />
                  </div>
                )}
              </div>

              {/* Image 2 */}
              <div className="mb-3 col">
                <div>
                  <label htmlFor="image2" className="form-label">
                    Image 2
                  </label>
                </div>
                <input
                  type="file"
                  className="form-control shadow"
                  name="image2"
                  style={{ display: "none" }}
                  ref={image2ref}
                  onChange={changeImage2}
                />
                <button
                  type="button"
                  className="btn btn-secondary btn-sm"
                  onClick={handleImage2Click}
                >
                  Upload Image Two
                </button>
                {image2 && (
                  <div className="mb-3 mt-2">
                    <h5>Selected Image</h5>
                    <img
                      src={image2}
                      alt="Selected Image 2"
                      className="img-fluid"
                      style={{ maxHeight: "200px", marginTop: "10px" }}
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Description 2 */}
            <div className="mb-3">
              <RichTextEditor
                controls={[
                  ["bold", "italic", "underline", "strike"],
                  ["unorderedList", "h1", "h2", "h3"],
                  ["sup", "sub", "blockquote"],
                  ["unorderedList", "orderedList"],
                  [
                    "alignLeft",
                    "alignCenter",
                    "alignRight",
                    "code",
                    "codeBlock",
                  ],
                ]}
                value={description2}
                onChange={(e) => {
                  setDesc2(e);
                }}
              />
              {errors.description2 && (
                <div className="text-danger">{errors.description2}</div>
              )}
            </div>

            {/* Additional Images */}
            <div className="mb-3">
              <input
                type="file"
                className="form-control shadow"
                style={{ display: "none" }}
                ref={aditionalRef}
                onChange={changeadditionalImage}
              />
              <label htmlFor="additionalImages" className="form-label">
                Additional Images
              </label>
              <div className="row">
                {addtionalImages.map((img) => (
                  <div key={img} className="col position-relative">
                    <img
                      src={img}
                      alt="Additional Image"
                      className="img-fluid"
                      style={{ maxHeight: "200px", marginTop: "10px" }}
                    />
                    <button
                      onClick={() => {
                        deleteAdditionalImage(img);
                      }}
                      className="btn btn-danger btn-sm position-absolute start-0"
                    >
                      Delete
                    </button>
                  </div>
                ))}
                {addtionalImages.length < 4 && (
                  <div className="col">
                    <button
                      onClick={clickAditionalImage}
                      type="button"
                      className="btn btn-secondary btn-sm"
                    >
                      Add Additional Image
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* YouTube Link */}
            <div className="mb-3">
              <label htmlFor="youtubeLink" className="form-label">
                YouTube Link
              </label>
              <input
                type="text"
                className="form-control shadow"
                id="youtubeLink"
                name="youtubeLink"
                value={formData.youtubeLink}
                onChange={handleChange}
              />
              {errors.youtubeLink && (
                <div className="text-danger">{errors.youtubeLink}</div>
              )}
            </div>

            {/* Tags */}
            <div className="mb-3">
              <label htmlFor="tags" className="form-label">
                Tags (comma separated)
              </label>
              <input
                value={formData.tags}
                type="text"
                className="form-control shadow"
                id="tags"
                name="tags"
                onChange={handleChange}
                placeholder="tag1, tag2, tag3"
              />
              {errors.tags && <div className="text-danger">{errors.tags}</div>}
            </div>

            <button type="submit" className="btn btn-primary">
              {blogId ? "Update Blog" : "Create Blog"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default WithAuth(AdminCreateBlog);
