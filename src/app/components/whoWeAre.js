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

        {/* <section
          className="position-relative z-1"
          style={{
            backgroundColor: "#000",
            zIndex: 1,
          }}
        >
          <div className="w-100 h-100 d-flex text-center justify-content-center align-items-center position-absolute z-2">
            <div>
              <p className="text-white font-monospace text-center who-we-are-main-text">
                Chef Wow - the "Teen Vibe" Restaurant Project
              </p>
              <p className="text-white text-center w-75 w-md-50 mx-auto who-we-are-p">
                We are a team of professionals dedicated to providing the best
                possible service to our clients. With wide experience in the
                real estate industry, we are committed to excellence.
              </p>

              <div className="row">
                <button
                onClick={()=>{
                  router.push("/aboutus")
                }}
                className="btn btn-primary m-auto w-25 btn-contact">
                  About Us
                </button>
              </div>
            </div>
          </div>
          <div
            className="text-center"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              zIndex: 1,
              width: "100%",
              height: "100%",
              position: "absolute",
            }}
          ></div>
          <Image
            src="/images/who-we-are.jpg"
            width={10}
            height={0}
            sizes="50vw"
            style={{
              width: "100%",
              height: "80vh",
              zIndex: 0,
              objectFit: "cover",
            }}
            className="img-fluid rounded-3"
            alt="%th avenue"
            title="Toavenuewnter"
          />
        </section> */}

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
