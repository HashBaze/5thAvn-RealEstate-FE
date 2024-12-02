"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar({ menuClass, scrolled }) {
  let [isMenu, setisMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <header
        id="topnav"
        className={
          `defaultscroll sticky ${!scrolled ? "bg-transparent" : "bg-white"}` +
          (isMenu ? "bg-white" : "")
        }
      >
        <div className="container">
          <Image
            src="/images/logo/logo.png"
            style={{
              cursor: "pointer",
            }}
            width={132}
            height={50}
            className="logo-light-mode mt-2"
            alt="LOGO"
            onClick={() => {
              window.location.href = "/";
            }}
          />

          <div className="menu-extras">
            <div className="menu-item">
              <Link
                href="#"
                className={`navbar-toggle ${isMenu ? "open" : ""}`}
                id="isToggle"
                onClick={() => setisMenu(!isMenu)}
              >
                <div className="lines">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </Link>
            </div>
          </div>

          <ul className="buy-button list-inline mb-0 bg-transparent">
            <li className="list-inline-item ps-1 mb-0 bg-transparent">
              <div
                id="navigation"
                style={{ display: isMenu ? "block" : "none" }}
              >
                <ul className={menuClass}>
                  <li className={`has-submenu parent-menu-item bg-transparent`}>
                    <Link
                      className={
                        `has-submenu parent-menu-item ${
                          scrolled ? "text-dark" : "text-white"
                        }` + (isMenu ? "text-dark" : "")
                      }
                      href="/"
                    >
                      Home
                    </Link>
                    <span className="link-bg-white"></span>
                  </li>

                  <li className="has-submenu parent-menu-item">
                    <a
                      className={
                        `has-submenu parent-menu-item ${
                          scrolled ? "text-dark" : "text-white"
                        }` + (isMenu ? "text-dark" : "")
                      }
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        const parent = e.target.closest(".has-submenu");
                        parent.classList.toggle("active");
                        setIsOpen(!isOpen);
                      }}
                    >
                      Listing
                    </a>
                    <span className="menu-arrow"></span>
                    {isMobile && isOpen && (
                      <div className="p-3 text-dark d-flex flex-column gap-3 ms-4">
                        <Link
                          href="/propertyListings?type=Rent"
                          className="sub-menu-item text-dark"
                        >
                          Rent
                        </Link>

                        <Link
                          href="/propertyListings?type=Sale"
                          className="sub-menu-item text-dark"
                        >
                          Property
                        </Link>

                        <Link
                          href="/propertyListings?type=Land"
                          className="sub-menu-item text-dark"
                        >
                          Land
                        </Link>
                      </div>
                    )}

                    <ul className="submenu">
                      <li>
                        <Link
                          href="/propertyListings?type=Rent"
                          className="sub-menu-item"
                        >
                          Rent
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/propertyListings?type=Sale"
                          className="sub-menu-item"
                        >
                          Property
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/propertyListings?type=Land"
                          className="sub-menu-item"
                        >
                          Land
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="has-submenu parent-menu-item">
                    <Link
                      href="/aboutus"
                      className={
                        `has-submenu parent-menu-item ${
                          scrolled ? "text-dark" : "text-white"
                        }` + (isMenu ? "text-dark" : "")
                      }
                    >
                      About Us
                    </Link>
                  </li>

                  <li className="has-submenu parent-menu-item">
                    <Link
                      href="/blogs"
                      className={
                        `has-submenu parent-menu-item ${
                          scrolled ? "text-dark" : "text-white"
                        }` + (isMenu ? "text-dark" : "")
                      }
                    >
                      Blogs
                    </Link>
                  </li>

                  <li className="has-submenu parent-menu-item">
                    <Link
                      href="/features"
                      className={
                        `has-submenu parent-menu-item ${
                          scrolled ? "text-dark" : "text-white"
                        }` + (isMenu ? "text-dark" : "")
                      }
                    >
                      Features
                    </Link>
                  </li>

                  <li className="has-submenu parent-menu-item">
                    <Link
                      href="/contactus"
                      className={
                        `has-submenu parent-menu-item ${
                          scrolled ? "text-dark" : "text-white"
                        }` + (isMenu ? "text-dark" : "")
                      }
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}
