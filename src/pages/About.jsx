import React from "react";
import Navbar from "../components/Navbar";
import AboutHero from "../components/AboutHero";
import Background from "../components/Background";
import CTABanner from "../components/CTABanner";
import Management from "../components/Management";
import Footer from "../components/Footer";
import FindUs from "../components/FindUs";

const About = () => {
  return (
    <>
      <AboutHero />
      <Background />
      <CTABanner />
      <Management />
      <FindUs />
    </>
  );
};

export default About;
