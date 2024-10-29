import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function SlideBar({ isVisible }) {
  const router = useRouter();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <div
      className={`bg-primary ${isVisible ? "slide-in" : "slide-out"}`}
      style={{
        width: "250px",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        transition: "transform 0.3s ease",
        transform: isVisible ? "translateX(0)" : "translateX(-100%)",
        overflowY: "auto",
      }}
    >
      {/* Header */}
      {/* <div
        className="d-flex justify-content-center align-items-center"
        style={{
          height: "100px",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <h3 className="text-white mb-0">Admin</h3>
      </div> */}

      {/* Menu List */}
      <div className="p-3 mt-5">
        <button
          onClick={() => router.push("/admin/dashboard")}
          className="btn w-100 text-start mb-2 text-white py-2"
          style={{
            backgroundColor: "#004085",
            transition: "background 0.2s ease",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#0056b3")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#004085")}
        >
          Dashboard
        </button>

        {/* Blogs Dropdown */}
        <button
          onClick={toggleDropdown}
          className="btn w-100 mt-1 text-start text-white py-2 d-flex justify-content-between align-items-center"
          style={{
            backgroundColor: "#004085",
            transition: "background 0.2s ease",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#0056b3")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#004085")}
        >
          <span>Blogs</span>
          {isDropdownOpen ? (
            <FaChevronUp className="ms-auto text-white" />
          ) : (
            <FaChevronDown className="ms-auto text-white" />
          )}
        </button>
        <div
          style={{
            maxHeight: isDropdownOpen ? "200px" : "0",
            overflow: "hidden",
            transition: "max-height 0.5s ease",
          }}
        >
          <button
            onClick={() => router.push("/admin/blogs")}
            className="btn mt-1 btn-dark w-100 text-start text-white p-2"
            style={{
              backgroundColor: "#343a40",
              transition: "background 0.2s ease",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#23272b")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#343a40")}
          >
            View Blogs
          </button>

          <button
            onClick={() => router.push("/admin/blogs/create-blog")}
            className="btn mt-1 btn-dark w-100 text-start text-white p-2"
            style={{
              backgroundColor: "#343a40",
              transition: "background 0.2s ease",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#23272b")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#343a40")}
          >
            Create Blog
          </button>
        </div>
      </div>
    </div>
  );
}
