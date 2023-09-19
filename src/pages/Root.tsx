import React from "react";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const Root: React.FC = () => {
  return (
    <>
      <Header />
      <NavBar />
      <div className="outlet">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Root;
