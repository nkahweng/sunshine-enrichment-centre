import React from "react";

const AboutHero = () => {
  return (
    <section className="bg-linear-darkblue relative overflow-hidden">
      <div className="container px-6 my-20 h-[250px]">
        <div className="h-full flex flex-col text-white text-center justify-center">
          <h1 className="text-4xl md:text-5xl font-leagueSpartan font-bold mb-6">
            About Us
          </h1>
          <p className="font-montserrat text-base md:text-lg">
            Nurturing young minds since 2021, we are committed to providing
            quality education in a warm and caring environment.
          </p>
        </div>

        <div className="absolute bottom-[-1px] left-0 right-0">
          <svg
            className="block"
            width="100%"
            height="100%"
            viewBox="0 0 1920 112"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M-378 0L-268.625 18.6667C-159.25 37.3333 59.5 74.6667 278.25 72C497 69.3333 715.75 26.6667 934.5 18.6667C1153.25 10.6667 1372 37.3333 1590.75 50.6667C1809.5 64 2028.25 64 2137.62 64H2247V112H2137.62C2028.25 112 1809.5 112 1590.75 112C1372 112 1153.25 112 934.5 112C715.75 112 497 112 278.25 112C59.5 112 -159.25 112 -268.625 112H-378V0Z"
              fill="#F9F9F9"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
