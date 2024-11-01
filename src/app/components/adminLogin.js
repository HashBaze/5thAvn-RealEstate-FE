"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useAuth } from "../context/authContext";
import { loginRequest } from "../service/userService";
import Spinner from "./spinner";

export default function AdminLogin() {
  const { login, showLoading, loading } = useAuth();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");

  const validateInputs = () => {
    if (!email || !/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
      setError("Please enter a valid email address.");
      return false;
    }
    if (!password) {
      setError("Password is required.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!validateInputs()) return;

    showLoading(true);
    try {
      const response = await loginRequest(email, password);
      showLoading(false);
      const { token } = response;
      login(token);
    } catch (error) {
      showLoading(false);
      setError("Invalid email or password. Please try again.");
      console.error(error);
    }
  };

  return (
    <>
      {loading && <Spinner />}
      <section className="bg-home zoom-image d-flex align-items-center">
        <div
          className="bg-overlay image-wrap"
          style={{
            backgroundImage: "url('/images/bg/03.jpg')",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="bg-overlay bg-gradient-overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div
                className="p-4 bg-white rounded-3 shadow-md mx-auto w-100"
                style={{ maxWidth: "400px" }}
              >
                <form onSubmit={handleSubmit}>
                  <Link href="/">
                    <Image
                      src="/images/logo/logo.png"
                      width={150}
                      height={60}
                      className="mb-4 d-block mx-auto"
                      alt=""
                    />
                  </Link>
                  <h5 className="mb-3">Please sign in</h5>

                  <div className="form-floating mb-2">
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      type="email"
                      className="form-control"
                      id="floatingInput"
                      placeholder="name@example.com"
                    />
                    <label htmlFor="floatingInput">Email address</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                      type="password"
                      className="form-control"
                      id="floatingPassword"
                      placeholder="Password"
                    />
                    <label htmlFor="floatingPassword">Password</label>
                  </div>

                  {error && <p className="text-danger">{error}</p>}

                  <button className="btn btn-primary w-100" type="submit">
                    Sign in
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
