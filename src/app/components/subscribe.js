import Image from "next/image";
import React from "react";

export const Subscribe = () => {
  return (
    <>
      <div className="row justify-content-center mt-100">
        <section
          className="position-relative z-1"
          style={{
            backgroundColor: "#000",
            zIndex: 1,
          }}
        >
          <div className="w-100 row h-100 d-flex text-center justify-content-center align-items-center position-absolute z-2">
            <div>
              <p className="text-white font-monospace text-center txt-subscribe">
                Subscribe to be stay <br />
                updated with us
              </p>
              <div className="row w-50 m-auto">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control w-50"
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />
                  <button className="btn btn-primary" type="button">
                    Email
                  </button>
                </div>
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
            src="/images/bg/02.jpg"
            width={10}
            height={0}
            sizes="50vw"
            style={{ width: "100%", height: "70vh", zIndex: 0 }}
            className="img-fluid rounded-3"
            alt="%th avenue"
            title="Toavenuewnter"
          />
        </section>
      </div>
    </>
  );
};
