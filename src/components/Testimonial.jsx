import { useCallback, useEffect, useRef, useState } from "react";
import { testimonials } from "../constants";
import { motion } from "framer-motion";
import { useScrollObserver } from "../hooks/useScrollObserver";
import TestimonialCard from "./TestimonialCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

const Testimonial = () => {
  const containerRef = useScrollObserver();

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev();
    }
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext();
    }
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi],
  );

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, setScrollSnaps, onSelect]);

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

        {/* Mobile-only dots or small buttons below (optional) */}
        <div className="flex md:hidden w-full justify-between gap-4 px-8">
          {/* <button
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
          </button> */}
        </div>

        {/* Testimonial Slider */}
        <div className="relative w-full max-w-6xl mx-auto">
          <button
            onClick={scrollPrev}
            className={`absolute left-0 lg:-left-12 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white shadow-lg hover:bg-orange hover:text-white transition-all items-center justify-center border border-gray-100`}
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={scrollNext}
            className={`absolute right-0 lg:-right-12 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white shadow-lg hover:bg-orange hover:text-white transition-all items-center justify-center border border-gray-100`}
          >
            <ChevronRight size={24} />
          </button>

          {/* Carousel Container */}
          <div className="overflow-hidden px-2" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((t, index) => (
                // Card
                <div
                  key={index}
                  className="flex-[0_0_100%] md:flex-[0_0_50%] min-w-0 "
                >
                  <TestimonialCard
                    name={t.name}
                    description={t.description}
                    classes={t.class}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`h-2 transition-all duration-300 rounded-full ${
                  index === selectedIndex ? "w-8 bg-orange" : "w-2 bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
