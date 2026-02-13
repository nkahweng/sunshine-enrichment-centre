import { useCallback, useEffect, useRef, useState } from "react";
import { testimonials } from "../constants";
import { motion } from "framer-motion";
import { useScrollObserver } from "../hooks/useScrollObserver";
import TestimonialCard from "./TestimonialCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import CarouselWrapper from "./CarouselWrapper";

const Testimonial = () => {
  const containerRef = useScrollObserver();

  return (
    <section
      ref={containerRef}
      className="bg-[#FFF8EF] py-12 md:py-20 relative lg:px-16"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-64 right-0 w-64 h-64 bg-yellow/10 rounded-full blur-3xl -mr-32 -mt-32" />
      </div>
      <div className="container mx-auto font-montserrat relative z-10">
        {/* Title and subtitle */}
        <div className="text-center mb-16">
          {/* <p className="text-orange text-sm tracking-wider font-medium mb-3 animate-on-scroll animate-fade-up">
            PARENTS' TESTIMONIALS
          </p> */}
          <h2 className="text-darkblue font-leagueSpartan text-4xl md:text-5xl font-bold mb-6 animate-on-scroll animate-fade-up delay-200">
            What Parents <span className="text-orange">Say</span>
          </h2>
          <p className="text-gray-600 text-base max-w-2xl mx-auto animate-on-scroll animate-fade-up delay-400">
            Hear from the families who have entrusted their children's early
            education to Sunshine Enrichment Centre.{" "}
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="max-w-6xl mx-auto">
          <CarouselWrapper
            items={testimonials}
            renderItem={(t) => (
              <TestimonialCard
                name={t.name}
                description={t.description}
                classes={t.class}
              />
            )}
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
