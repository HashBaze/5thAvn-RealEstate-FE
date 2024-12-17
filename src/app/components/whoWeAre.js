import React from "react";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { useRouter } from "next/navigation";
import { TypeAnimation } from "react-type-animation";

export const WhoWeAre = () => {
  const router = useRouter();

  return (
    <>
      <div className="">
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

            <div className="col-lg-6 col-md-12 col-12 p-5">
              <h1 className="display-5 text-start" data-aos="fade-right">
                <TypeAnimation
                  sequence={["Integrity", 1000, "Innovation", 1000 , "Commitment", 1000]}
                  wrapper="span"
                  speed={5}
                  repeat={Infinity}
                  className="typewrite text-primary ms-2"
                  cursor={false}
                /> 
              </h1>
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
                className="btn btn-primary mt-4 btn-contact"
                onClick={() => {
                  router.push("/aboutus");
                }}
              >
                Read More{" "}
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
