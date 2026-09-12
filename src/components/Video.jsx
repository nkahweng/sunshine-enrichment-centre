import { useEffect, useRef } from "react";
import { introVideo, videoPoster } from "../assets";

const Video = () => {
  const videoRef = useRef(null);

  // The video is preload="none", so nothing downloads until it scrolls into
  // view. Visitors who never reach this section pay only for the poster.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // play() rejects if the browser blocks autoplay — the poster stays up
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-orange relative">
      <video
        ref={videoRef}
        src={introVideo}
        poster={videoPoster}
        preload="none"
        muted
        loop
        playsInline
        aria-label="Life at Sunshine Enrichment Centre"
        className="w-full h-auto block"
      />
    </section>
  );
};

export default Video;
