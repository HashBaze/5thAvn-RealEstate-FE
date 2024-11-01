import React from "react";

import dynamic from 'next/dynamic';
const ViewBlog = dynamic(() => import('@/app/components/viewBlog'), {
  ssr: false
});

export default function page() {
  return (
    <>
      <ViewBlog />
    </>
  );
}
