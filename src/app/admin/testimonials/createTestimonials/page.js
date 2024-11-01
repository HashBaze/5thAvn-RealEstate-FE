import React from "react";

import dynamic from "next/dynamic";
const AdminCreateTestimonials = dynamic(
  () => import("@/app/components/adminCreateTestimonials"),
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
