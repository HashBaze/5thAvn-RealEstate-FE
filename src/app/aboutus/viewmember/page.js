"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "@/app/components/Navbar";
import { teamData } from "@/app/data/data";
import Image from "next/image";
import Link from "next/link";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import Footer from "@/app/components/Footer";

export default function page() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const [member, setMember] = useState({});

  useEffect(() => {
    if (id) {
      teamData.map((data) => {
        if (data.id === parseInt(id)) {
          setMember(data);
        }
      });
    }
  }, []);

  return (
    <>
      <Navbar
        navClass="defaultscroll sticky"
        menuClass="navigation-menu nav-left"
        scrolled={true}
      />
      <section className="bg-building-pic d-table w-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title-heading text-center">
                <h1 className="heading">{member.title}</h1>
                <p className="text-muted">Meet our team of experts.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="card team team-primary text-center">
          <div className="card-img team-image d-inline-block mx-auto rounded-pill avatar avatar-ex-large overflow-hidden">
            <Image
              src={member.image}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              className="img-fluid"
              alt=""
            />
          </div>

          <div className="content mt-3">
            <Link href="/page-team-detail" className="text-dark h5 mb-0 title">
              {member.name}
            </Link>
            <h6 className="text-muted mb-0 fw-normal">{member.title}</h6>

            <ul className="list-unstyled team-social mb-0">
              <li className="list-inline-item">
                <Link href="#" className="btn btn-sm btn-pills btn-icon">
                  <FiFacebook className="icons fea-social" />
                </Link>
              </li>
              <li className="list-inline-item">
                <Link href="#" className="btn btn-sm btn-pills btn-icon">
                  <FiInstagram className="icons fea-social" />
                </Link>
              </li>
              <li className="list-inline-item">
                <Link href="#" className="btn btn-sm btn-pills btn-icon">
                  <FiTwitter className="icons fea-social" />
                </Link>
              </li>
            </ul>
            <section className="container">
              <div className="row row-cols-2 justify-content-center">
                <p className="text-muted mt-3">
                  "{member.description}"
                </p>
              </div>
            </section>
          </div>
        </div>
        <div className="mt-100">
          <Footer />
        </div>
      </section>
    </>
  );
}
