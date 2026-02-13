import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useCallback, useEffect, useState } from "react";

const CarouselWrapper = ({
  items,
  renderItem,
  options = { loop: true, align: "start" },
  autoplayDelay = 5000,
  slideClassName = "flex-[0_0_100%] md:flex-[0_0_50%]",
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ delay: autoplayDelay, stopOnInteraction: false }),
  ]);

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
    <div className="relative w-full">
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
          {items.map((item, index) => (
            // Card
            <div key={index} className={`${slideClassName} min-w-0 `}>
              {renderItem(item, index)}
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Dots */}
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
  );
};

export default CarouselWrapper;
