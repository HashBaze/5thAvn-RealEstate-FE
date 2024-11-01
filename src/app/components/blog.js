"use client";

import React, { useEffect, useState } from "react";
import UseScroll from "../hooks/UseScroll";
import Navbar from "./navbar";
import Link from "next/link";
import Image from "next/image";
import Footer from "./footer";
import ScrollTop from "./scrollTop";
import {
  getBlogsByPagination,
  getBlogsByTag,
  getRecentBlogs,
  serchByTags,
} from "../service/blogService";
import { useAuth } from "../context/authContext";
import Spinner from "./spinner";
import { FaSearch } from "react-icons/fa";

export default function Blog() {
  const isScrolled = UseScroll();
  const { showLoading, loading } = useAuth();

  const [blogData, setBlogDta] = useState([]);
  const [recentBlogs, setRecentBlogs] = useState([]);
  const [tags, setTags] = useState([]);
  const [serchTags, setSerchTags] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [totalPages, setTotalPages] = useState(0);

  function formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  }

  const fetchBlogsByPagination = async (page, limit) => {
    showLoading(true);
    getBlogsByPagination(page, limit)
      .then((response) => {
        setBlogDta(response.blogs);
        setTotalPages(response.totalPages);
        setLimit(response.limit);
        showLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChnageSerch = (e) => {
    if (e.target.value == " ") {
      fetchBlogsByPagination(page, limit);
    }
  };

  const fetchRecentBlogs = async () => {
    showLoading(true);
    getRecentBlogs().then((response) => {
      setRecentBlogs(response);
      showLoading(false);
    });
  };

  const fetchUniqueTags = async () => {
    getBlogsByTag().then((response) => {
      setTags(response);
    });
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const handleSerch = async () => {
    showLoading(true);
    const req = {
      tags: serchTags,
    };

    await serchByTags(req).then((response) => {
      setBlogDta(response);
      showLoading(false);
    });
  };

  useEffect(() => {
    fetchBlogsByPagination(page, limit);
    fetchRecentBlogs();
    fetchUniqueTags();
  }, [page, limit]);

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
                  Latest News
                </p>
                <h5 className="heading fw-semibold mb-0 sub-heading text-white title-dark">
                  Blogs & News
                </h5>
              </div>
            </div>
          </div>
          <div className="position-middle-bottom">
            <nav aria-label="breadcrumb" className="d-block">
              <ul className="breadcrumb breadcrumb-muted mb-0 p-0">
                <li className="breadcrumb-item">
                  <Link href="/">5th avenue</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Blog
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
            <div className="col-lg-8 col-md-6 col-12">
              <div className="row g-4">
                {blogData.map((item, index) => {
                  return (
                    <div className="col-lg-6" key={index}>
                      <div className="card blog blog-primary shadow h-100 rounded-3 overflow-hidden border-0">
                        <div className="card-img blog-image position-relative overflow-hidden rounded-0">
                          <div className="position-relative overflow-hidden">
                            <Image
                              src={item.coverImage}
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

                            <div className="card-overlay"></div>
                          </div>

                          <div className="blog-tag p-3">
                            <Link href="" className="badge bg-primary">
                              {item.author}
                            </Link>
                          </div>
                        </div>

                        <div className="card-body content p-0">
                          <div className="p-4">
                            <Link
                              href={`/blogs/blogDetail?id=${item._id}`}
                              className="title fw-medium fs-5 text-dark"
                            >
                              {item.title}
                            </Link>
                            <p
                              className="text-muted mt-2 h-50"
                              dangerouslySetInnerHTML={{
                                __html:
                                  item.description1.length > 30
                                    ? `${item.description1.substring(
                                        0,
                                        100
                                      )}...`
                                    : item.description1,
                              }}
                            ></p>

                            <Link
                              href={`/blogs/blogDetail?id=${item._id}`}
                              className="text-dark read-more"
                            >
                              Read More{" "}
                              <i className="mdi mdi-chevron-right align-middle"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="row">
                <div className="col-12 mt-4 pt-2">
                  <ul className="pagination justify-content-center mb-0">
                    <li className="page-item">
                      <Link
                        className="page-link"
                        href="#"
                        aria-label="Previous"
                        onClick={(e) => {
                          e.preventDefault();
                          if (page > 1) handlePageChange(page - 1);
                        }}
                      >
                        <span aria-hidden="true">
                          <i className="mdi mdi-chevron-left fs-6"></i>
                        </span>
                      </Link>
                    </li>

                    {[...Array(totalPages)].map((_, index) => (
                      <li
                        key={index + 1}
                        className={`page-item ${
                          page === index + 1 ? "active" : ""
                        }`}
                      >
                        <Link
                          className="page-link"
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            handlePageChange(index + 1);
                          }}
                        >
                          {index + 1}
                        </Link>
                      </li>
                    ))}

                    <li className="page-item">
                      <Link
                        className="page-link"
                        href="#"
                        aria-label="Next"
                        onClick={(e) => {
                          e.preventDefault();
                          if (page < totalPages) handlePageChange(page + 1);
                        }}
                      >
                        <span aria-hidden="true">
                          <i className="mdi mdi-chevron-right fs-6"></i>
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-12">
              <div className="card bg-white p-4 rounded-3 shadow sticky-bar">
                <div>
                  <h6 className="pt-2 pb-2 bg-light rounded-3 text-center">
                    Search
                  </h6>

                  <div className="search-bar mt-4">
                    <div
                      id="itemSearch2"
                      className="menu-search d-flex gap-2 mb-0"
                    >
                      <form className="w-75">
                        <input
                          value={serchTags}
                          type="text"
                          className="form-control rounded-3 border"
                          name="s"
                          id="searchItem2"
                          placeholder="Search..."
                          onChange={handleChnageSerch}
                        />
                      </form>
                      <button
                        onClick={handleSerch}
                        type="button"
                        className="btn"
                      >
                        <FaSearch />
                      </button>
                    </div>
                  </div>
                </div>
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
                            className="avatar avatar-small rounded-3"
                            width={104}
                            height={85}
                            style={{ width: "auto" }}
                            alt=""
                          />
                          <div className="flex-1 ms-3">
                            <Link
                              href={`/blogs/blogDetail?id=${item._id}`}
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

                <div className="mt-4 pt-2 text-center">
                  <h6 className="pt-2 pb-2 bg-light rounded-3">Tags Cloud</h6>
                  <ul className="tagcloud list-unstyled mt-4">
                    {tags.map((tag, index) => (
                      <li key={index} className="list-inline-item m-1">
                        <Link
                          onClick={() => {
                            setSerchTags((prevTags) => {
                              if (!prevTags.includes(tag)) {
                                return [...prevTags, tag];
                              }
                              return prevTags;
                            });
                          }}
                          href=""
                          className="rounded-3 fw-medium text-dark inline-block py-2 px-3"
                        >
                          {tag}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <ScrollTop />
    </>
  );
}
