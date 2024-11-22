"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar({ logolight, menuClass, scrolled }) {
  let [isMenu, setisMenu] = useState(false);

  return (
    <>
      <header
        id="topnav"
        className={`defaultscroll sticky ${
          !scrolled ? "bg-transparent" : "bg-white"
        }`}
      >
        <div className="container">
          {logolight === true ? (
            <Link className="logo" href="/">
              <span className="logo-light-mode">
                <Image
                  src="/images/logo/logo.png"
                  width={132}
                  height={50}
                  className="l-dark"
                  alt=""
                />
                <Image
                  src="/images/logo/logo.png"
                  width={132}
                  height={50}
                  className="l-light"
                  alt=""
                />
              </span>
              <Image
                src="/images/logo/logo.png"
                width={132}
                height={50}
                className="logo-dark-mode"
                alt=""
              />
            </Link>
          ) : (
            <Link className="logo" href="/">
              <Image
                src="/images/logo/logo.png"
                width={132}
                height={50}
                className="logo-light-mode"
                alt=""
              />
              <Image
                src="/images/logo/logo.png"
                width={132}
                height={50}
                className="logo-dark-mode"
                alt=""
              />
            </Link>
          )}

          <div className="menu-extras">
            <div className="menu-item">
              <Link
                href="#"
                className={`navbar-toggle ${isMenu ? "open" : ""}`}
                id="isToggle"
                onClick={() => 
                  setisMenu(!isMenu)
                }
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
                      className={`has-submenu parent-menu-item ${
                        scrolled ? "text-dark" : "text-white"
                      }`}
                      href="/"
                    >
                      Home
                    </Link>
                    <span className="link-bg-white"></span>
                  </li>

                  {/* <li className="has-submenu parent-menu-item">
                    <a
                      className={`has-submenu parent-menu-item ${
                        scrolled ? "text-dark" : "text-white"
                      }`}
                      href="#"
                    >
                      Pages
                    </a>
                    <span className="menu-arrow"></span>
                    <ul className="submenu">
                      <li>
                        <Link href="/" className="sub-menu-item">
                          Hero One
                        </Link>
                      </li>
                      <li>
                        <Link href="/index-two" className="sub-menu-item">
                          Hero Two
                        </Link>
                      </li>
                      <li>
                        <Link href="/index-three" className="sub-menu-item">
                          Hero Three
                        </Link>
                      </li>
                      <li>
                        <Link href="/index-four" className="sub-menu-item">
                          Hero Four
                        </Link>
                      </li>
                      <li>
                        <Link href="/index-five" className="sub-menu-item">
                          Hero Five{" "}
                        </Link>
                      </li>
                      <li>
                        <Link href="/index-six" className="sub-menu-item">
                          Hero Six
                        </Link>
                      </li>
                      <li>
                        <Link href="/index-seven" className="sub-menu-item">
                          Hero Seven
                        </Link>
                      </li>
                    </ul>
                  </li> */}

                  <li className="has-submenu parent-menu-item">
                    <a
                      className={`has-submenu parent-menu-item ${
                        scrolled ? "text-dark" : "text-white"
                      }`}
                      href="#"
                    >
                      Buy
                    </a>
                    <span className="menu-arrow"></span>
                    <ul className="submenu">
                      <li>
                        <Link href="/propertyListings?type=Rent" className="sub-menu-item">
                          Rent
                        </Link>
                      </li>
                      <li>
                        <Link href="/propertyListings?type=Sale" className="sub-menu-item">
                          Property
                        </Link>
                      </li>
                      <li>
                        <Link href="/propertyListings?type=Land" className="sub-menu-item">
                          Land
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="has-submenu parent-menu-item">
                    <Link
                      href="/aboutus"
                      className={`has-submenu parent-menu-item ${
                        scrolled ? "text-dark" : "text-white"
                      }`}
                    >
                      About Us
                    </Link>
                  </li>

                  <li className="has-submenu parent-menu-item">
                    <Link
                      href="/blogs"
                      className={`has-submenu parent-menu-item ${
                        scrolled ? "text-dark" : "text-white"
                      }`}
                    >
                      Blogs
                    </Link>
                  </li>

                  <li className="has-submenu parent-menu-item">
                    <Link
                      href="/features"
                      className={`has-submenu parent-menu-item ${
                        scrolled ? "text-dark" : "text-white"
                      }`}
                    >
                      Features
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
