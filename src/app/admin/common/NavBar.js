
import Image from "next/image";
import React from "react";
import { useAuth } from "../../context/authContext";
import { TiThMenu } from "react-icons/ti";


export default function NavBar({ toggleSidebar, isSidebarVisible }) {
  const { logout } = useAuth();
  return (
    <div
      className="d-flex p-3 justify-content-between align-items-center"
      style={{
        padding: "10px",
        backgroundColor: "#f8f9fa",
        marginLeft: isSidebarVisible ? "250px" : "0px",
        transition: "margin-left 0.3s ease",
      }}
    >
      <button className="btn" onClick={toggleSidebar}>
        {/* {isSidebarVisible ? "Hide" : "Show"} */}
        <TiThMenu />
      </button>
      <div>
        <Image src="/images/logo/logo.png" width={100} height={40} alt="" />
        {/* <button className="btn btn-danger btn-sm ms-5" onClick={logout}>Logout</button> */}
      </div>
    </div>
  );
}