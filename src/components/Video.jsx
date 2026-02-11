import React from "react";
import { introVideo } from "../assets";

const Video = () => {
  return (
    <section className="bg-orange relative">
      {/* <div className="bg-darkblue absolute z-20 top-0 right-0 left-0 w-full lg:h-[60px]" /> */}
      <div>
        {/* <iframe
          className="aspect-video w-full"
          src="https://www.youtube.com/embed/NMCOMRZ8xW4?autoplay=1&controls=0&loop=1&playlist=NMCOMRZ8xW4"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe> */}

        <video
          src={introVideo}
          autoPlay={true}
          muted={true}
          loop={true}
        ></video>
      </div>
      {/* <div className="bg-white absolute z-20 bottom-0 right-0 left-0 w-full lg:h-[60px]"></div> */}
    </section>
  );
};

export default Video;
