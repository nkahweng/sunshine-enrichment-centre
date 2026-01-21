import React from "react";
import { MessageCircle, Sun } from "lucide-react";
import { group, trip6 } from "../assets";
import CTAButton from "./CTAButton";
import { useScrollObserver } from "../hooks/useScrollObserver";

const Hero = () => {
  const containerRef = useScrollObserver();
  return (
    // relative means any component within Hero can position themselves relative to Hero, instead of the whole Homepage
    // min-h-screen takes up at least full viewport height (full page hero),  can grow taller if content > vh
    // overflow-hidden means if the content of hero overflow the hero, hiden them
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-cover bg-center bg-no-repeat bg-scroll md:bg-fixed"
      style={{
        backgroundImage: `url(${trip6})`,
      }}
    >
      <div className="absolute inset-0 bg-darkblue opacity-90 pr-[100px] z-5" />

      <div className="max-w-wide mx-auto px-6 z-10 w-full mt-32 lg:mt-0">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3 flex flex-col justify-center text-left relative">
            {/* Main Headline */}
            <h1 className="font-leagueSpartan font-bold text-white tracking-tight mb-6 animate-on-scroll animate-slide-right">
              <span className="text-7xl md:text-8xl text-orange drop-shadow-md relative pr-8 pt-4">
                <Sun className="absolute top-0 right-0 text-yellow h-12 w-12" />
                SUNSHINE
              </span>
              <span className="block text-4xl md:text-5xl lg:text-6xl leading-none text-white/90">
                ENRICHMENT CENTRE
              </span>
            </h1>

            {/* Subtitle */}
            <p className="font-montserrat text-white/90 text-base md:text-lg mb-10 max-w-2xl leading-relaxed delay-200 animate-on-scroll animate-slide-right">
              We’re here to empower young minds and inspire great futures. Join
              us as we create a brighter tomorrow—one student at a time.
            </p>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 animate-on-scroll animate-fade-up delay-400">
              <CTAButton
                text="Chat With Us on WhatsApp"
                icon={<MessageCircle size={18} />}
                // className="border border-white"
              />
            </div>
          </div>

          {/* Photo */}
          <div className="lg:col-span-2 relative">
            <div className="relative z-10 animate-on-scroll animate-pop-up">
              <img
                src={group}
                alt="Sunshine Enrichment Centre Staff Group Photo"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Wave */}
      <div className="absolute bottom-0 right-0 left-0 z-0">
        <svg
          width="1920"
          height="144"
          viewBox="0 0 1920 144"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1976 7.76217L1905.5 4.51841C1835 1.27465 1694 -5.21286 1553 7.76217C1412 20.7372 1271 53.1748 1130 59.6623C989 66.1498 848 46.6873 707 46.6873C566 46.6873 425 66.1498 284 75.8811C143 85.6124 1.99995 85.6124 -68.5001 85.6124H-139V144H-68.5001C1.99995 144 143 144 284 144C425 144 566 144 707 144C848 144 989 144 1130 144C1271 144 1412 144 1553 144C1694 144 1835 144 1905.5 144H1976V7.76217Z"
            fill="#F9F9F9"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
