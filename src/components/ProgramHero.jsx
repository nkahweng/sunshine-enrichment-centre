import React from "react";
import { robotics, robotics2 } from "../assets";

const ProgramHero = ({
  title,
  years,
  desc,
  background = "bg-linear-darkblue",
  img,
}) => {
  return (
    <section className={`mt-20 px-6 py-20 overflow-hidden relative`}>
      <div className="absolute inset-0 z-10 opacity-10">
        <img src={img} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className={`absolute inset-0 z-0 ${background}`} />
      <div className="font-montserrat text-white container mx-auto relative z-30">
        <div className="inline-block text-xs bg-white/15 rounded-full px-4 py-1 mb-6">
          {years}
        </div>

        <h1 className="text-4xl md:text-5xl font-semibold font-leagueSpartan mb-4">
          {title}
        </h1>
        <p className="text-white/90 text-base md:text-lg max-w-xl">{desc} </p>
      </div>
    </section>
  );
};

export default ProgramHero;
