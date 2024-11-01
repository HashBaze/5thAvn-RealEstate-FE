import React from "react";

export default function Spinner() {
  return (
    <>
      <div
        className="d-flex position-fixed justify-content-center align-items-center spinner-container"
        style={{
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0,0,0,0.5)",
          zIndex: 9999,
        }}
      >
        <div className="spinner-border text-primary" role="status"></div>
      </div>
    </>
  );
}
