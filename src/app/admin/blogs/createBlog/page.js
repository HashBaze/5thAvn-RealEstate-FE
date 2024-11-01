import React from 'react'
import dynamic from "next/dynamic";

const AdminCreateBlog = dynamic(
  () => import('@/app/components/adminCreateBlog'),
  {
    ssr: false,
  }
);

export default function page() {
  return (
    <>
        <AdminCreateBlog />
    </>
  )
}
