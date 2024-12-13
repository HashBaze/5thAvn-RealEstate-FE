import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
import "./../assets/css/subscribe.css";
import { BsArrowUpRightCircleFill } from "react-icons/bs";

export const Subscribe = () => {
  const router = useRouter();

  return (
    <>
      <div className="row justify-content-center mt-100" data-aos="fade-right">
        <section className="subcription-bg">
          <div className="bg-container">
            <div className="bg-overlay"></div>
          </div>
        </section>
        <section className="container-fluid subcription-bg">
          <div className="justify-content-between">
            <div className="mt-5 p-3">
              <h1 className="text-dark display-5" data-aos="fade-right">
                Subscribe to be stay <br />
                updated with us
              </h1>
              <p data-aos="fade-right">
                Subscribe to our newsletter and get the latest news and updates{" "}
                <br />
                from our team.
              </p>
            </div>
            <div className="d-flex justify-content-end p-3">
              <button data-aos="fade-right"
                onClick={() => {
                  router.push("/contactus");
                }}
                className="btn"
                type="button"
              >
                <BsArrowUpRightCircleFill className="icons text-primary fs-4" />
                <span className="ms-3 link-hover">Contact Us Our Team</span>
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
