import React, { Suspense } from "react";
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
        {/* min-h keeps the footer from flashing up while a lazy page loads */}
        <Suspense fallback={<div className="min-h-screen" />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
