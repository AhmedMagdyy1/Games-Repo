import React from "react";
import Navbar from "./../Navbar/Navbar";
import { Outlet } from "react-router-dom";

export default function Masterlayout({ userData, logout }) {
  return (
    <>
      <Navbar userData={userData} logout={logout} />
      <div className="container py-5 my-5">
        <Outlet />
      </div>
    </>
  );
}
