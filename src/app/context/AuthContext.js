"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token, isAuthenticated);

    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
        router.push("/admin");
    }
  }, [router]);

  const login = (token) => {
    localStorage.setItem("token", token);
    setIsAuthenticated(true);
    router.push("/admin/dashboard");
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    router.push("/");
  };

  const showLoading = (value) => {
    setLoading(value);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, login, logout, showLoading, loading ,isSidebarVisible , toggleSidebar}}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
