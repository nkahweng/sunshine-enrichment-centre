import React from "react";
import { useScrollObserver } from "../hooks/useScrollObserver";
import Branch from "./Branch";
import { branches } from "../constants";
import CarouselWrapper from "./CarouselWrapper";

const FindUs = () => {
  const containerRef = useScrollObserver();

  return (
    <section ref={containerRef} className="container text-darkblue pb-8 px-6">
      {/* Locate Us */}
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-8 animate-on-scroll animate-fade-up">
          <span className="text-orange">Find</span> Us
        </h2>
      </div>
      <div className="max-w-5xl mx-auto">
        <CarouselWrapper
          items={branches}
          renderItem={(b) => <Branch branch={b} />}
        />
      </div>

      {/* Opening Hours */}
      {/* <div className="flex flex-col items-center text-center mt-14 mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-10 animate-on-scroll animate-fade-up">
          <span className="text-orange">Opening</span> Hours
        </h2>
        <div className="shadow-md rounded-2xl p-10 bg-[#ffffff] animate-on-scroll animate-fade-up delay-400 max-w-2xl">
          <ul className="">
            <li className="flex justify-between py-6 border-b-2 border-b-darkblue/50">
              <p>Monday - Friday</p>
              <p>8.30 am - 7.00 pm</p>
            </li>
            <li className="flex justify-between py-6 border-b-2 border-b-darkblue/50">
              <p>Saturday</p>
              <p>8.30 am - 5.30 pm</p>
            </li>
            <li className="flex justify-between py-6">
              <p>Sunday</p>
              <p>Closed</p>
            </li>
          </ul>
        </div>
      </div> */}
    </section>
  );
};

export default FindUs;
