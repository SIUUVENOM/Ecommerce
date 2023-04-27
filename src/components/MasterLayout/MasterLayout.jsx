import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Outlet, useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";

export default function MasterLayout({ userData, setUserData, cartLength }) {
  let navigate = useNavigate();
  function logOut() {
    localStorage.removeItem("userToken");
    setUserData(null);
    navigate("/login");
  }
  return (
    <>
      <Navbar userData={userData} logOut={logOut} cartLength={cartLength} />
      <Toaster />
      <Outlet />
      <Footer />
    </>
  );
}
