import { useState } from "react";
import { testimonials } from "../constants";
import { useScrollObserver } from "../hooks/useScrollObserver";
import TestimonialCard from "./TestimonialCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Testimonial = () => {
  const containerRef = useScrollObserver();
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = typeof window !== "undefined" && window.innerWidth < 1024;
  const maxIndex = isMobile ? testimonials.length - 1 : testimonials.length - 2;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

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
          <p className="text-orange text-sm tracking-wider font-medium mb-3 animate-on-scroll animate-fade-up">
            PARENTS' TESTIMONIALS
          </p>
          <h2 className="text-darkblue font-leagueSpartan text-4xl md:text-5xl font-bold mb-6 animate-on-scroll animate-fade-up delay-200">
            What Parents <span className="text-orange">Say</span>
          </h2>
          <p className="text-gray-600 text-base max-w-2xl mx-auto animate-on-scroll animate-fade-up delay-400">
            Hear from the families who have entrusted their children's early
            education to Sunshine Enrichment Centre.{" "}
          </p>
        </div>

        {/* Mobile-only dots or small buttons below (optional) */}
        <div className="flex md:hidden w-full justify-between gap-4 px-8">
          <button
            disabled={currentIndex === 0}
            onClick={prevSlide}
            className={`${currentIndex === 0 ? "opacity-30 cursor-not-allowed" : "opacity-100"} font-bold p-3 rounded-full bg-white shadow-lg hover:bg-orange hover:text-white transition-all items-center justify-center border border-gray-100`}
          >
            <ChevronLeft size={24} />
          </button>
          <button
            disabled={currentIndex === maxIndex}
            onClick={nextSlide}
            className={`${currentIndex === maxIndex ? "opacity-30 cursor-not-allowed" : "opacity-100"} font-bold p-3 rounded-full bg-white shadow-lg hover:bg-orange hover:text-white transition-all items-center justify-center border border-gray-100`}
          >
            <ChevronRight size={24} />
          </button>
        </div>
        {/* Testimonial Slider */}
        <div className="relative w-full max-w-6xl mx-auto">
          <button
            disabled={currentIndex === 0}
            onClick={prevSlide}
            className={`${currentIndex === 0 ? "opacity-30 cursor-not-allowed" : "opacity-100"} absolute left-0 lg:-left-12 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white shadow-lg hover:bg-orange hover:text-white transition-all hidden md:flex items-center justify-center border border-gray-100`}
          >
            <ChevronLeft size={24} />
          </button>

          <button
            disabled={currentIndex === maxIndex}
            onClick={nextSlide}
            className={`${currentIndex === maxIndex ? "opacity-30 cursor-not-allowed" : "opacity-100"} absolute right-0 lg:-right-12 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white shadow-lg hover:bg-orange hover:text-white transition-all hidden md:flex items-center justify-center border border-gray-100`}
          >
            <ChevronRight size={24} />
          </button>
          <div className="overflow-hidden px-2">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (isMobile ? 100 : 50)}%)`,
              }}
            >
              {testimonials.map((t, index) => (
                // Card
                <TestimonialCard
                  name={t.name}
                  description={t.description}
                  classes={t.class}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
