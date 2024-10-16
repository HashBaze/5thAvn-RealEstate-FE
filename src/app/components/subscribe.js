import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

export const Subscribe = () => {
  const router = useRouter();

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
              <div className="row justify-content-center align-items-center">
                <button
                  onClick={() => {
                    router.push("/contactus");
                  }}
                  className="btn btn-primary w-25"
                  type="button"
                >
                  Contact Us
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
            src="/images/bg/02.jpg"
            width={10}
            height={0}
            sizes="50vw"
            style={{
              width: "100%",
              height: "80vh",
              zIndex: 0,
              backgroundPosition: "center center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            className="img-fluid rounded-3"
            alt="%th avenue"
            title="Toavenuewnter"
          />
        </section>
      </div>
    </>
  );
};
