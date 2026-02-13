import { useEffect, useRef, useState } from "react";
import CTAButton from "./CTAButton";
import Stats from "./Stats";
import { Volume2 } from "lucide-react";

const Impact = () => {
  const containerRef = useRef(null);
  const iframeRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    // initialize intersection observer
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

    if (containerRef.current) {
      const elements =
        containerRef.current.querySelectorAll(".animate-on-scroll");
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  const handleUnmute = () => {
    if (iframeRef.current) {
      // Send message to iframe to unmute
      iframeRef.current.contentWindow.postMessage(
        '{"event":"command","func":"unMute","args":""}',
        "*",
      );
      setIsMuted(false);
    }
  };

  return (
    <section ref={containerRef} className="font-montserrat">
      <div className="max-w-wide mx-auto px-6">
        <div className="grid lg:grid-cols-9 gap-12 pt-10 pb:8 lg:pb-16 items-center">
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
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-orange/20 rounded-full blur-3xl -z-10" />

            {/* Video Wrapper */}
            <div className="relative w-full max-w-[280px] aspect-[9/16] rounded-2xl bg-gray-200 shadow-lg overflow-hidden animate-on-scroll animate-fade-up">
              {/* YouTube Iframe */}
              <iframe
                ref={iframeRef}
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/2CNiCbxdlWc?autoplay=1&mute=1&controls=0&loop=1&playlist=2CNiCbxdlWc&modestbranding=1&rel=0&playsinline=1&enablejsapi=1"
                title="Sunshine Enrichment Centre"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />

              {/* Unmute Button Overlay */}
              {isMuted && (
                <button
                  onClick={handleUnmute}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 bg-white text-orange px-4 py-2 rounded-full shadow-lg hover:scale-105 transition-transform flex items-center gap-2 z-20"
                >
                  <span>
                    <Volume2 />
                  </span>
                  Unmute
                </button>
              )}
            </div>
          </div>

          {/* Right content */}
          <div className="lg:col-span-4">
            {/* h-full so that the flexbox can follow height of parent */}
            <div className="flex flex-col justify-center h-full text-darkblue">
              <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-10 border-l-2 border-orange pl-6 italic animate-on-scroll animate-slide-right delay-200">
                At Sunshine Enrichment Centre, we believe every child's
                potential shines brightest when nurtured with joy. Founded in
                2021 by Ms. Lim Mei Foong, our centre was born from a simple
                truth:{" "}
                <span className="text-orange font-medium not-italic">
                  learning should feel like play, and play should spark lifelong
                  growth
                </span>
                . We began in 2019 as home tuition for only 5 students, lesson
                crafted on a living room floor, and have blossomed into Simpang
                Renggam's trusted centre for learning.
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
