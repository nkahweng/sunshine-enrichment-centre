import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Impact from "../components/Impact";
import Benefits from "../components/Benefits";
import Programs from "../components/Programs";
import Gallery from "../components/Gallery";
import Testimonial from "../components/Testimonial";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <Impact />
      <Benefits />
      <Programs />
      <Gallery />
      <Testimonial />
      <CTA />
    </>
  );
};

export default Home;
