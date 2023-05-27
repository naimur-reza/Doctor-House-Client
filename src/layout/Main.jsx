import React from "react";
import Menu from "../components/shared/Menu";
import { Outlet } from "react-router-dom";
import Footer from "../components/shared/Footer";

const Main = () => {
  return (
    <>
      <Menu />
      <div className="">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Main;
