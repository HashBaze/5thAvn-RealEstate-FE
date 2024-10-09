"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import { FiSearch, FiUser } from "../assets/icons/vander";

export default function Navbar({ logolight, menuClass, scrolled }) {
  let [isMenu, setisMenu] = useState(false);

  const toggleMenu = () => {
    // setisMenu(!isMenu);
    // if (document.getElementById("navigation")) {
    //   const anchorArray = Array.from(
    //     document.getElementById("navigation").getElementsByTagName("a")
    //   );
    //   anchorArray.forEach((element) => {
    //     element.addEventListener("click", (elem) => {
    //       const target = elem.target.getAttribute("href");
    //       if (target !== "") {
    //         if (elem.target.nextElementSibling) {
    //           var submenu = elem.target.nextElementSibling.nextElementSibling;
    //           submenu.classList.toggle("open");
    //         }
    //       }
    //     });
    //   });
    // }
  };
  function getClosest(elem, selector) {
    // Element.matches() polyfill
    // if (!Element.prototype.matches) {
    //   Element.prototype.matches =
    //     Element.prototype.matchesSelector ||
    //     Element.prototype.mozMatchesSelector ||
    //     Element.prototype.msMatchesSelector ||
    //     Element.prototype.oMatchesSelector ||
    //     Element.prototype.webkitMatchesSelector ||
    //     function (s) {
    //       var matches = (this.document || this.ownerDocument).querySelectorAll(
    //           s
    //         ),
    //         i = matches.length;
    //       while (--i >= 0 && matches.item(i) !== this) {}
    //       return i > -1;
    //     };
    // }
    // // Get the closest matching element
    // for (; elem && elem !== document; elem = elem.parentNode) {
    //   if (elem.matches(selector)) return elem;
    // }
    // return null;
  }

  function activateMenu() {
    // var menuItems = document.getElementsByClassName("sub-menu-item");
    // if (menuItems) {
    //   var matchingMenuItem = null;
    //   for (var idx = 0; idx < menuItems.length; idx++) {
    //     if (menuItems[idx].href === window.location.href) {
    //       matchingMenuItem = menuItems[idx];
    //     }
    //   }
    //   if (matchingMenuItem) {
    //     matchingMenuItem.classList.add("active");
    //     var immediateParent = getClosest(matchingMenuItem, "li");
    //     if (immediateParent) {
    //       immediateParent.classList.add("active");
    //     }
    //     var parent = getClosest(immediateParent, ".child-menu-item");
    //     if (parent) {
    //       parent.classList.add("active");
    //     }
    //     var parent = getClosest(parent || immediateParent, ".parent-menu-item");
    //     if (parent) {
    //       parent.classList.add("active");
    //       var parentMenuitem = parent.querySelector(".menu-item");
    //       if (parentMenuitem) {
    //         parentMenuitem.classList.add("active");
    //       }
    //       var parentOfParent = getClosest(parent, ".parent-parent-menu-item");
    //       if (parentOfParent) {
    //         parentOfParent.classList.add("active");
    //       }
    //     } else {
    //       var parentOfParent = getClosest(
    //         matchingMenuItem,
    //         ".parent-parent-menu-item"
    //       );
    //       if (parentOfParent) {
    //         parentOfParent.classList.add("active");
    //       }
    //     }
    //   }
    // }
  }
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
                onClick={() => toggleMenu()}
              >
                <div className="lines">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </Link>
            </div>
          </div>

          <ul className="buy-button list-inline mb-0">
            <li className="list-inline-item ps-1 mb-0">
              <div
                id="navigation"
                style={{ display: isMenu ? "block" : "none" }}
              >
                <ul className={menuClass}>
                  <li className={`has-submenu parent-menu-item`}>
                    <a className={`has-submenu parent-menu-item ${scrolled ? 'text-dark' : 'text-white'}`} href="#">Home</a>
                    <span className="link-bg-white"></span>
                  </li>

                  <li className="has-submenu parent-menu-item">
                  <a className={`has-submenu parent-menu-item ${scrolled ? 'text-dark' : 'text-white'}`} href="#">Pages</a>
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
                  </li>

                  <li className="has-submenu parent-menu-item">
                  <a className={`has-submenu parent-menu-item ${scrolled ? 'text-dark' : 'text-white'}`} href="#">Buy</a>
                    <span className="menu-arrow"></span>
                    <ul className="submenu">
                      <li>
                        <Link href="/" className="sub-menu-item">
                          Rent
                        </Link>
                      </li>
                      <li>
                        <Link href="/index-two" className="sub-menu-item">
                          Property
                        </Link>
                      </li>
                      <li>
                        <Link href="/index-three" className="sub-menu-item">
                          Land
                        </Link>
                      </li>
                    </ul>
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
