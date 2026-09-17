import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { usePageMeta } from "../hooks/usePageMeta";

const Layout = () => {
  usePageMeta();
  return (
    <>
      <Navbar />
      <main className="">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
