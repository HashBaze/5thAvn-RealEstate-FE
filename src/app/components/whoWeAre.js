import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";


export const WhoWeAre = () => {
  const router = useRouter();

  return (
    <>
      <div className="row justify-content-center mt-100">
        <div className="col">
          <div className="section-title text-center mb-4 pb-2">
            <h4 className="title mb-3">Who We Are</h4>
            <p className="text-muted para-desc mb-0 mx-auto">
              A great plateform to buy, sell and rent your properties without
              any agent or commisions.
            </p>
          </div>
        </div>

        <section
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
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto", zIndex: 0 }}
            className="img-fluid rounded-3"
            alt="%th avenue"
            title="Toavenuewnter"
          />
        </section>
      </div>
    </>
  );
};
