import React, { useEffect, useState } from "react";
import NavBar from "../admin/common/NavBar";
import SlideBar from "../admin/common/SlideBar";
import { useAuth } from "../context/AuthContext";
import Spinner from "./Spinner";
import WithAuth from "../hoc/WithAuth";
import { useRouter } from "next/navigation";
import {
  deleteReview,
  getAllReviews,
  updateIsShow,
} from "../service/testimonialsService";
import { FaEdit } from "react-icons/fa";
import { MdDeleteSweep } from "react-icons/md";
import Swal from "sweetalert2";

const AdminTestimonials = () => {
  const router = useRouter();
  const { toggleSidebar, isSidebarVisible, showLoading, loading } = useAuth();
  const [reviews, setReviews] = useState([]);
  const [token, setToken] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const indexOfLastBlog = currentPage * rowsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - rowsPerPage;
  const currentBlogs = [].slice(indexOfFirstBlog, indexOfLastBlog);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleRowsPerPageChange = (e) => {
    setRowsPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedToken = localStorage.getItem("token");
      setToken(storedToken);
    }
  }, []);

  useEffect(() => {
    if (token) {
      fetchreviews();
    }
  }, [token]);

  const fetchreviews = () => {
    showLoading(true);
    getAllReviews(token)
      .then((res) => setReviews(res.reviews))
      .catch((err) => console.log(err))
      .finally(() => showLoading(false));
  };

  const updateStatus = (id, status) => {
    showLoading(true);
    updateIsShow(id, status, token)
      .then((response) => {
        console.log(response);
        showLoading(false);
        fetchreviews();
      })
      .catch((error) => {
        console.log(error);
        showLoading(false);
      });
  };

  const deleteyId = (id) => {
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
        deleteReview(id, token)
          .then((response) => {
            fetchreviews();
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
        <section className="container-fluid">
          <button
            onClick={() => {
              router.push("/admin/testimonials/create-testimonials");
            }}
            className="btn btn-primary"
          >
            Add Testimonials
          </button>
        </section>

        <section className="container mt-100 bg-white rounded-4 shadow-lg">
          <div className="container mt-4">
            <table className="table">
              <thead>
                <tr className="text-muted text-center">
                  <th>#</th>
                  <th>Picture</th>
                  <th>Name</th>
                  <th>Designation</th>
                  <th>Testimonials</th>
                  <th>Is Show</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {reviews.map((review, index) => (
                  <tr key={review._id} className="align-middle text-center">
                    <td className="text-black">{index + 1}</td>
                    <td>
                      <img
                        src={
                          review.picture
                            ? review.picture
                            : "https://placehold.co/600x600?text=NoImage"
                        }
                        alt={review.name}
                        className="img-fluid"
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "50%",
                        }}
                      />
                    </td>
                    <td className="text-black">{review.name}</td>
                    <td>{review.designation}</td>
                    <td>
                      {review.review.length > 20
                        ? `${review.review.slice(0, 20)}...`
                        : review.review}
                    </td>
                    <td className="d-flex p-3 justify-content-center align-items-center">
                      <div className="form-check form-switch">
                        <input
                          className="form-check-input border shadow"
                          type="checkbox"
                          role="switch"
                          id={`flexSwitchCheck${review._id}`}
                          checked={review.isShow}
                          onChange={() => {
                            updateStatus(review._id, !review.isShow);
                          }}
                        />
                      </div>
                    </td>
                    <td>
                      <button
                        onClick={() => {
                          router.push(
                            `/admin/testimonials/create-testimonials?reviewid=${review._id}`
                          );
                        }}
                        className="btn btn-sm text-[20px] btn-outline-primary me-2"
                      >
                        <FaEdit />
                      </button>
                      <button
                        onClick={() => {
                          deleteyId(review._id);
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
                            { length: Math.ceil(reviews.length / rowsPerPage) },
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
                                Math.ceil([].length / rowsPerPage)
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

export default WithAuth(AdminTestimonials);
