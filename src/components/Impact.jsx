import { useEffect, useRef } from "react";
import { avatar, student } from "../assets";
import CTAButton from "./CTAButton";
import Stats from "./Stats";

const Impact = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 },
    );

    const elements =
      containerRef.current.querySelectorAll(".animate-on-scroll");

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={containerRef} className="font-montserrat">
      <div className="max-w-wide mx-auto px-6">
        <div className="grid lg:grid-cols-9 gap-12 lg:gap-20 pt-10 pb-16 items-center">
          {/* Left content */}
          <div className="lg:col-span-3">
            <h2 className="text-4xl md:text-5xl font-bold text-darkblue mb-6 font-leagueSpartan leading-tight animate-on-scroll animate-slide-right">
              Welcome to{" "}
              <span className="text-orange block drop-shadow-sm">Sunshine</span>
              Enrichment Centre
            </h2>
            <p className="mb-6 text-gray-600 text-lg animate-on-scroll animate-slide-right delay-200">
              Join the community of parents who trust us with their child's
              future.
            </p>
            <CTAButton text="Learn More" />
          </div>

          {/* Middle content */}
          <div className="lg:col-span-2 flex justify-center relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-orange/20 rounded-full blur-3xl -z-10" />
            <img
              src={student}
              alt="Sunshine Enrichment Centre Student Posing with a Hand Over His Head "
              className="w-full max-w-[250px] lg:max-w-full drop-shadow-xl hover:scale-105 transition-transform duration-500 animate-on-scroll animate-pop-up delay-500"
            />
          </div>

          {/* Right content */}
          <div className="lg:col-span-4">
            {/* h-full so that the flexbox can follow height of parent */}
            <div className="flex flex-col justify-center h-full text-darkblue">
              <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-10 border-l-2 border-orange pl-6 italic animate-on-scroll animate-slide-right delay-200">
                At Sunshine Enrichment Centre, we believe every child’s
                potential shines brightest when nurtured with joy. Founded in
                2021 by Ms. Lim Mei Foong, our centre was born from a simple
                truth:{" "}
                <span className="text-orange font-medium not-italic">
                  learning should feel like play, and play should spark lifelong
                  growth
                </span>
                . We began in 2019 as home tuition for only 5 students, lesson
                crafted on a living room floor, and have blossomed into Simpang
                Renggam’s trusted centre for learning. 
              </p>
              <div className="pt-4">
                <Stats />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
