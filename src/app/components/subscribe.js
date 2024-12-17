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
          <div className="bg-container"></div>
        </section>
        <section className="container-fluid subcription-bg">
          <div className="justify-content-between">
            <div className="p-3">
              <p className="text-dark text-center subscribe-title" data-aos="fade-right">
                Subscribe to be stay <br />
                updated with us
              </p>
              <p data-aos="fade-right" className="text-center subscribe-desc">
                Subscribe to our newsletter and get the latest news and updates{" "}
                <br />
                from our team.
              </p>
            </div>
            <div className="d-flex justify-content-center p-2">
              <button
                data-aos="fade-right"
                onClick={() => {
                  router.push("/contactus");
                }}
                className="btn btn-primary btn-contact mb-2 w-sm-100"
                type="button"
              >
                <span className="ms-3 link-hover">Contact Us Our Team</span>
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
