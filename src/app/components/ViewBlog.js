"use client";

import React, { useState } from "react";
import UseScroll from "../hooks/UseScroll";
import Navbar from "./navbar";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getBlogById, getRecentBlogs } from "../service/blogService";
import Footer from "./footer";
import { useAuth } from "../context/AuthContext";
import Spinner from "./Spinner";

export default function ViewBlog() {
  const { loading, showLoading } = useAuth();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [blog, setBlog] = useState({});
  const [tags, setTags] = useState([]);
  const [additionalImage, setAdditionalImages] = useState([]);
  const [link, setLink] = useState("");
  const [recentBlogs, setRecentBlogs] = useState([]);

  const isScrolled = UseScroll();

  function getVideoIdFromUrl(url) {
    const parsedUrl = new URL(url);
    const videoId = parsedUrl.searchParams.get("v");
    const newUrl = `https://www.youtube.com/embed/${videoId}`;
    return newUrl;
  }

  function formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  }

  const fetchRecentBlogs = async () => {
    showLoading(true);
    getRecentBlogs().then((response) => {
      setRecentBlogs(response);
      showLoading(false);
    });
  };

  useState(() => {
    showLoading(true);
    getBlogById(id)
      .then((response) => {
        setBlog(response);
        setTags(response.tags);
        setAdditionalImages(response.additionalImages);
        setLink(getVideoIdFromUrl(response.youtubeLink));
        showLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
    fetchRecentBlogs();
  }, [id]);

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
        style={{ backgroundImage: "url('/images/bg/02.jpg')" }}
      >
        <div className="bg-overlay bg-gradient-overlay-2"></div>
        <div className="container">
          <div className="row mt-5 justify-content-center">
            <div className="col-12">
              <div className="title-heading text-center">
                <span className="badge bg-primary">The 5th Avenue</span>
                <h5 className="heading fw-semibold mb-0 sub-heading text-white title-dark mt-4">
                  {blog?.title}
                </h5>

                <ul className="list-inline text-center mb-0">
                  <li className="list-inline-item mx-4 mt-4">
                    <span className="text-white-50 d-block">Author</span>
                    <Link href="#" className="text-white title-dark">
                      {blog.author}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="position-middle-bottom m-auto">
            <nav aria-label="breadcrumb" className="d-block">
              <ul className="breadcrumb breadcrumb-muted mb-0 p-0">
                <li className="breadcrumb-item">
                  <Link href="/">5th Avenue</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link href="/blogs">Blog</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Blog Details
                </li>
              </ul>
            </nav>
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
            <div className="col-lg-8 col-md-12">
              <div className="card border-0 shadow rounded-3 overflow-hidden">
                <Image
                  src={blog.coverImage}
                  width={0}
                  height={0}
                  sizes="90vw"
                  style={{ width: "100%", height: "auto" }}
                  className="img-fluid"
                  alt=""
                />

                <div className="d-flex justify-content-center">
                  <h3 className="mt-4">{blog.title}</h3>
                </div>

                <div className="card-body">
                  <p
                    className="text-muted mt-2 h-50"
                    dangerouslySetInnerHTML={{
                      __html: blog.description2,
                    }}
                  ></p>
                  <div className="p-1 w-100">
                    <iframe
                      style={{
                        height: "400px",
                      }}
                      className="w-100"
                      src={link}
                      frameBorder="0"
                      allowFullScreen
                      title="YouTube Video"
                    ></iframe>
                  </div>
                  <p
                    className="text-muted mt-2 h-50"
                    dangerouslySetInnerHTML={{
                      __html: blog.description1,
                    }}
                  ></p>

                  {additionalImage.map((image, index) => (
                    <div className="p-2" key={index}>
                      <Image
                        src={image}
                        width={0}
                        height={0}
                        sizes="50vw"
                        style={{
                          width: "100%",
                          height: "auto",
                        }}
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                  ))}

                  {tags.map((tag, index) => (
                    <Link
                      href="#"
                      key={index}
                      className="badge badge-link bg-primary ms-1"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-12">
              <div className="card bg-white p-4 rounded-3 shadow sticky-bar">
                <div className="mt-4 pt-2">
                  <h6 className="pt-2 pb-2 bg-light rounded-3 text-center">
                    Recent Post
                  </h6>
                  <div className="mt-4">
                    {recentBlogs.map((item, index) => {
                      return (
                        <div
                          className="blog blog-primary d-flex align-items-center mt-3"
                          key={index}
                        >
                          <Image
                            src={item.coverImage}
                            width={105}
                            height={65}
                            className="avatar avatar-small rounded-3"
                            style={{ width: "auto" }}
                            alt=""
                          />
                          <div className="flex-1 ms-3">
                            <Link
                              href={`#`}
                              onClick={() => {
                                window.location.href = `/blogs/blog-detail?id=${item._id}`;
                              }}
                              className="d-block title text-dark fw-medium"
                            >
                              {item.title}
                            </Link>
                            <span className="text-muted small">
                              {formatDate(item.date)}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
