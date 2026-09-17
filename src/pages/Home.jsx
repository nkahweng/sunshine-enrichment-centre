import React from "react";
import Hero from "../components/Hero";
import Impact from "../components/Impact";
import Benefits from "../components/Benefits";
import Programs from "../components/Programs";
import Gallery from "../components/Gallery";
import Testimonial from "../components/Testimonial";
import CTA from "../components/CTA";
import Video from "../components/Video";

const Home = () => {
  return (
    <>
      <Hero />
      <Video />
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
