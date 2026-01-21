import React from "react";
import { kw } from "../assets";
import { managements } from "../constants";
import { useScrollObserver } from "../hooks/useScrollObserver";

const Management = () => {
  const containerRef = useScrollObserver();
  return (
    <section ref={containerRef} className="relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-28 left-0 w-64 h-64 bg-yellow/10 rounded-full blur-3xl -mr-32 -mt-32 z-0" />
      </div>
      <div className="container font-montserrat my-20 text-darkblue relative z-5">
        <div className="flex flex-col w-full items-center">
          <h2 className="text-2xl md:text-3xl font-bold font-leagueSpartan mb-10 animate-on-scroll animate-fade-up">
            Meet Our <span className="text-orange">Management</span> Team
          </h2>

          {/* Management Card */}
          <div className="grid md:grid-cols-3 gap-12 md:gap-20">
            {managements.map((management, index) => (
              <div className="rounded-3xl shadow-md overflow-hidden bg-[#ffffff] hover:-translate-y-2 transition-all duration-500 animate-on-scroll animate-fade-up delay-200">
                <img
                  src={management.imagePath}
                  alt={management.alt}
                  className="h-[350px] w-full object-cover"
                />
                <div className="flex flex-col items-center py-6 px-10">
                  <h3 className="text-xl font-bold mb-2">{management.name}</h3>
                  <h4 className="text-sm text-orange mb-6">
                    {management.position}
                  </h4>
                  <p>{management.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Management;
