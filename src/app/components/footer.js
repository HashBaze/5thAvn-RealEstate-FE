import React from "react";
import Link from "next/link";
import Image from "next/image";

import {
  FiLinkedin,
  FiFacebook,
  FiMail,
  FiMapPin,
  FiPhone,
} from "../assets/icons/vander";

export default function Footer() {
  return (
    <>
      <section
        className="bg-building-pic d-table w-100"
        style={{ backgroundImage: "url('/images/building.png')" }}
      ></section>
      <footer className="bg-footer">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="footer-py-60 footer-border">
                <div className="row">
                  <div className="col-lg-5 col-12 mb-0 mb-md-4 pb-0 pb-md-2">
                    <Link href="#" className="logo-footer">
                      <Image
                        src="/images/logo/logo.png"
                        width={132}
                        height={40}
                        alt=""
                      />
                    </Link>
                    <p className="mt-4 w-100">
                      We Are Happy To Help You, Don’t Hesitate To Reach Out.
                    </p>
                    <ul className="list-unstyled social-icon foot-social-icon mb-0 mt-4">
                      <li className="list-inline-item">
                        <Link
                          href="https://www.linkedin.com/in/randy-navaratne-70021310/?originalSubdomain=au"
                          target="_blank"
                          className="rounded-3"
                        >
                          <FiLinkedin className="fea icon-sm align-middle" />
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link
                          href="https://web.facebook.com/5thavenueRealEstate?_rdc=1&_rdr#"
                          target="_blank"
                          className="rounded-3"
                        >
                          <FiFacebook className="fea icon-sm align-middle" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                    <h5 className="footer-head">Contact Details</h5>

                    <div className="d-flex mt-4">
                      <div>
                      <FiMapPin className="fea icon-sm text-primary mt-1 me-3" />
                      </div>
                      <div className="">
                        <p className="mb-2">
                          The 5th Avenue Real Estate Waterman Business Centre,
                          Chadstone VIC 3168
                        </p>
                      </div>
                    </div>

                    <div className="d-flex mt-4">
                      <div className="me-3">
                      <FiMail className="fea icon-sm text-primary" />
                      </div>
                      <Link
                        href="mailto:contact@example.com"
                        className="text-foot"
                      >
                        randy.navaratne@the5thavenue.com.au
                      </Link>
                    </div>

                    <div className="d-flex mt-4">
                      <FiPhone className="fea icon-sm text-primary mt-1 me-3" />
                      <Link href="tel:+152534-468-854" className="text-foot">
                        (+61) 0455 474 220
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-py-30 footer-bar">
          <div className="container text-center">
            <div className="row">
              <div className="col">
                <div className="text-center">
                  <p className="mb-0">
                    Copyright © {new Date().getFullYear()} All Rights Reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
