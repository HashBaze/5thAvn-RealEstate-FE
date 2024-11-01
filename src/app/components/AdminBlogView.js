"use client";

import React, { useEffect, useState } from "react";
import WithAuth from "../authUtils/WithAuth";
import NavBar from "../admin/common/NavBar";
import SlideBar from "../admin/common/SlideBar";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";
import { deleteBlog, getBlogs, updateIsShow } from "../service/blogService";
import { FaEdit } from "react-icons/fa";
import { MdDeleteSweep } from "react-icons/md";
import Spinner from "./Spinner";
import Swal from "sweetalert2";

const AdminBlogView = () => {
  const [token, setToken] = useState(null);
  const router = useRouter();
  const [blogs, setBlogs] = useState([]);

  const { toggleSidebar, isSidebarVisible, showLoading, loading } = useAuth();
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const indexOfLastBlog = currentPage * rowsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - rowsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleRowsPerPageChange = (e) => {
    setRowsPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  const updateStatus = (id, status) => {
    showLoading(true);
    updateIsShow(id, status, token)
      .then((response) => {
        console.log(response);
        showLoading(false);
        getAll();
      })
      .catch((error) => {
        console.log(error);
        showLoading(false);
      });
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedToken = localStorage.getItem("token");
      setToken(storedToken);
    }
  }, []);

  useEffect(() => {
    if (token) {
      getAll();
    }
  }, [token]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        showLoading(true);
        deleteBlog(id, token)
          .then((response) => {
            getAll();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            showLoading(false);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  };

  const getAll = () => {
    showLoading(true);
    getBlogs(token)
      .then((response) => {
        console.log(response);
        setBlogs(response);
        showLoading(false);
      })
      .catch((error) => {
        console.log(error);
        showLoading(false);
        router.push("/admin");
      });
  };

  function formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  }

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
        <section className="container">
          <button
            onClick={() => {
              router.push("/admin/blogs/createBlog");
            }}
            className="btn btn-primary"
          >
            Add Blog
          </button>
        </section>

        <section className="container mt-100 bg-white rounded-4 shadow-lg">
          <div className="container mt-4">
            <table className="table">
              <thead>
                <tr className="text-muted text-center">
                  <th>#</th>
                  <th>Blog Title</th>
                  <th>Author</th>
                  <th>Date</th>
                  <th>IsShow</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentBlogs.map((blog, index) => (
                  <tr key={blog._id} className="align-middle text-center">
                    <td className="text-black">{index}</td>
                    <td className="text-black">
                      {blog.title.length > 20
                        ? `${blog.title.slice(0, 20)}...`
                        : blog.title}
                    </td>

                    <td className="text-black">{blog.author}</td>
                    <td>
                      <a className="text-decoration-none text-dark">
                        {formatDate(blog.date)}
                      </a>
                    </td>
                    <td className="d-flex p-3 justify-content-center align-items-center">
                      <div className="form-check form-switch">
                        <input
                          className="form-check-input border shadow"
                          type="checkbox"
                          role="switch"
                          id={`flexSwitchCheck${blog._id}`}
                          checked={blog.isShow}
                          onChange={() => {
                            updateStatus(blog._id, !blog.isShow);
                          }}
                        />
                      </div>
                    </td>
                    <td>
                      <button
                        onClick={() => {
                          router.push(
                            `/admin/blogs/createBlog?blogId=${blog._id}`
                          );
                        }}
                        className="btn btn-sm text-[20px] btn-outline-primary me-2"
                      >
                        <FaEdit />
                      </button>
                      <button
                        onClick={() => {
                          handleDelete(blog._id);
                        }}
                        className="btn text-[20px] btn-sm btn-outline-danger"
                      >
                        <MdDeleteSweep />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan="4">
                    <div className="d-flex justify-content-sm-between align-items-center">
                      <div className="form-group">
                        <label htmlFor="rowCountSelect">Rows per page:</label>
                        <select
                          id="rowCountSelect"
                          className="form-control"
                          style={{ width: "100px" }}
                          value={rowsPerPage}
                          onChange={handleRowsPerPageChange}
                        >
                          <option value="5">5</option>
                          <option value="10">10</option>
                          <option value="20">20</option>
                          <option value="30">30</option>
                          <option value="100">100</option>
                        </select>
                      </div>

                      <nav>
                        <ul className="pagination mb-0">
                          <li className="page-item">
                            <button
                              className="page-link"
                              onClick={() => paginate(currentPage - 1)}
                              disabled={currentPage === 1}
                            >
                              &laquo;
                            </button>
                          </li>
                          {Array.from(
                            { length: Math.ceil(blogs.length / rowsPerPage) },
                            (_, index) => (
                              <li
                                key={index + 1}
                                className={`page-item ${
                                  currentPage === index + 1 ? "active" : ""
                                }`}
                              >
                                <button
                                  className="page-link"
                                  onClick={() => paginate(index + 1)}
                                >
                                  {index + 1}
                                </button>
                              </li>
                            )
                          )}
                          <li className="page-item">
                            <button
                              className="page-link"
                              onClick={() => paginate(currentPage + 1)}
                              disabled={
                                currentPage ===
                                Math.ceil(blogs.length / rowsPerPage)
                              }
                            >
                              &raquo;
                            </button>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </section>
      </div>
    </>
  );
};

export default WithAuth(AdminBlogView);
