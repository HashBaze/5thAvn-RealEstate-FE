"use client";
import React, { useState } from "react";
import SlideBar from "../admin/common/SlideBar";
import NavBar from "../admin/common/NavBar";
import withAuth from "../authUtils/WithAuth";
import { useAuth } from "../context/authContext";

const AdminDashboard = ()=> {
  const { toggleSidebar, isSidebarVisible } = useAuth();

  return (
    <>
      <NavBar toggleSidebar={toggleSidebar} isSidebarVisible={isSidebarVisible}/>
      <SlideBar isVisible={isSidebarVisible} />

      <div
        className="content"
        style={{
          marginLeft: isSidebarVisible ? "250px" : "0px",
          transition: "margin-left 0.3s ease",
          padding: "20px",
        }}
      >
        <h3>Dashboard</h3>
      </div>
    </>
  );
}

export default withAuth(AdminDashboard);
