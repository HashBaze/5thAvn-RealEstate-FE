import React from "react";

import dynamic from "next/dynamic";
const AdminCreateTestimonials = dynamic(
  () => import("@/app/components/AdminCreateTestimonials"),
  {
    ssr: false,
  }
);

export default function page() {
  return (
    <>
      <AdminCreateTestimonials />
    </>
  );
}
