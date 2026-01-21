import React, { useEffect, useRef } from "react";
import {
  artcraft2,
  groupPhoto,
  picturebook2,
  robotics3,
  trip1,
  trip2,
  trip3,
} from "../assets";
import { useScrollObserver } from "../hooks/useScrollObserver";

const Gallery = () => {
  const galleryStyle =
    "w-full h-full object-cover hover:scale-110 transition-duration duration-700 ease-in-out";

  const containerRef = useScrollObserver();

  return (
    <section ref={containerRef} className="bg-[#FFF8EF] py-20 relative">
      <div className="absolute top-64 left-0 w-64 h-64 bg-orange/10 rounded-full blur-3xl -mr-32 -mt-32" />
      <div className="container mx-auto px-6 font-montserrat">
        {/* Title and subtitle */}
        <div className="text-center mb-16">
          <p className="text-orange text-sm tracking-wider font-medium mb-3 animate-on-scroll animate-fade-up">
            OUR GALLERY
          </p>
          <h2 className="text-darkblue font-leagueSpartan text-4xl md:text-5xl font-bold mb-6  animate-on-scroll animate-fade-up delay-200">
            Moments of <span className="text-orange">Joy & Learning</span>
          </h2>
          <p className="text-gray-600 text-base max-w-2xl mx-auto leading-relaxed animate-on-scroll animate-fade-up delay-400">
            A glimpse into the wonderful experiences our children have every day
          </p>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 auto-rows-[150px] md:auto-rows-[200px] animate-fade-up">
          <div className="md:col-span-3 md:row-span-2">
            <div className="rounded-2xl shadow-md group h-full overflow-hidden">
              <img
                src={trip1}
                alt="Sunshine Enrichment Centre Trip Photo - Three Boys with Lao Fu Zi Mural"
                className={galleryStyle}
                loading="lazy"
              />
            </div>
          </div>

          <div>
            <div className="rounded-2xl shadow-md group h-full overflow-hidden">
              <img
                src={artcraft2}
                alt="Sunshine Enrichment Centre Children Doing Art"
                className={galleryStyle}
                loading="lazy"
              />
            </div>
          </div>

          <div>
            <div className="rounded-2xl shadow-md group h-full overflow-hidden">
              <img
                src={robotics3}
                alt="Sunshine Enrichment Centre Children Exploring Robotics"
                className={galleryStyle}
                loading="lazy"
              />
            </div>
          </div>

          <div className="md:col-span-2 md:row-span-2">
            <div className="rounded-2xl shadow-md group h-full overflow-hidden">
              <img
                src={trip3}
                alt="Sunshine Enrichment Centre Children - Three Girls on a Train"
                className={galleryStyle}
                koading="lazy"
              />
            </div>
          </div>

          <div className="md:col-span-2 md:row-span-2">
            <div className="rounded-2xl shadow-md group h-full overflow-hidden">
              <img
                src={picturebook2}
                alt="Sunshine Enrichment Centre Children Doing Colouring"
                className={galleryStyle}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
