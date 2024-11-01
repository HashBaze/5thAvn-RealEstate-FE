import React from "react";

import dynamic from 'next/dynamic';
const ViewBlog = dynamic(() => import('@/app/components/ViewBlog'), {
  ssr: false
});

export default function page() {
  return (
    <>
      <ViewBlog />
    </>
  );
}
