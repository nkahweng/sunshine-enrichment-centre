import { Quote, Star } from "lucide-react";
import React, { useEffect, useRef } from "react";
import { testimonials } from "../constants";
import { useScrollObserver } from "../hooks/useScrollObserver";

const Testimonial = () => {
  const containerRef = useScrollObserver();

  return (
    <section ref={containerRef} className="bg-[#FFF8EF] py-20 relative">
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

        {/* Testimonial Slider */}
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-500 p-8 lg:p-12 relative animate-on-scroll animate-fade-up delay-400"
            >
              <div className="relative z-10">
                {/* 5 Stars for Trust */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-orange text-orange"
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 italic leading-relaxed mb-8 text-md">
                  {testimonial.description}
                </p>

                {/* Parent Info */}
                <div className="flex items-center gap-4 border-t border-gray-200 pt-6">
                  <div className="w-12 h-12 bg-darkblue rounded-full flex items-center justify-center text-white font-bold text-lg font-leagueSpartan">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h5 className="text-darkblue font-bold text-lg leading-none mb-1">
                      {testimonial.name}
                    </h5>
                    <p className="text-orange text-sm font-medium">
                      Parent of {testimonial.class} student
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
