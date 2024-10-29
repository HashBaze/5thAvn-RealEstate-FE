"use client"; 
import { useEffect } from "react";
import { useRouter } from "next/navigation"; 
import { useAuth } from "../context/AuthContext";

const WithAuth = (WrappedComponent) => {
  return (props) => {
    const { isAuthenticated } = useAuth();
    const router = useRouter();
    
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
          router.push("/");
        }
    }, [router]);

    
    return isAuthenticated ? <WrappedComponent {...props} /> : null;
  };
};

export default WithAuth;
