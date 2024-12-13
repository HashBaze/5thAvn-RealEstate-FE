import React from "react";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { useRouter } from "next/navigation";

export const WhoWeAre = () => {
  const router = useRouter();

  return (
    <>
      <div className="" >
        <div className="">
          <div className="section-title text-center mb-4 pb-2">
            <h4 className="title mb-3">Who We Are</h4>
            <p className="text-muted para-desc mb-0 mx-auto">
              A great plateform to buy, sell and rent your properties without
              any agent or commisions.
            </p>
          </div>
        </div>

        <section className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12 p-3 who-weare-bg"></div>

            <div className="col-lg-6 col-md-6 col-12 p-5">
              <p className="text-primary text-start who-we-are-main-text">
                Restaurant Project
              </p>

              <h1 className="display-5 text-start" data-aos="fade-right">Who We Are</h1>
              <p data-aos="fade-right">
                Since 2010, we have dedicated ourselves to making moving a
                joyful experience within the San Francisco community we serve.
                We strive to provide a service that is both highly professional
                and genuinely caring, ensuring a more personal touch in every
                interaction.
              </p>
              <div className="d-flex">
                <BsArrowUpRightCircleFill className="icons text-primary fs-4" />
                <p className="ms-3">Best inshuarance Agency</p>
              </div>

              <div className="d-flex">
                <BsArrowUpRightCircleFill className="icons text-primary fs-4" />
                <p className="ms-3">Best inshuarance Agency</p>
              </div>

              <div className="d-flex">
                <BsArrowUpRightCircleFill className="icons text-primary fs-4" />
                <p className="ms-3">Best inshuarance Agency</p>
              </div>

              <button
                className="btn btn-primary mt-4"
                onClick={() => {
                  router.push("/aboutus");
                }}
              >
                Read More{" "}
                <BsArrowUpRightCircleFill className="icons text-dark fs-5" />
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
