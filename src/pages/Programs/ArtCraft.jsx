import React from "react";
import Navbar from "../../components/Navbar";
import ProgramHero from "../../components/ProgramHero";
import Footer from "../../components/Footer";
import { artcraft, strengthening } from "../../assets";
import CTAButton from "../../components/CTAButton";
import { MessageCircle } from "lucide-react";
import { useScrollObserver } from "../../hooks/useScrollObserver";

const ArtCraft = () => {
  const containerRef = useScrollObserver();
  return (
    <>
      <ProgramHero
        title="Art & Craft"
        years="5 - 12 years"
        desc='"Every Child is an Artist"'
        background="bg-linear-yellow"
        img={artcraft}
      />
      <section ref={containerRef} className="bg-white py-14">
        <div className="font-montserrat container mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 mb-12">
            {/* About the Program */}
            <div className="md:col-span-1 w-full">
              <h2 className="text-lg font-semibold text-darkblue mb-4 animate-on-scroll animate-fade-up">
                About Art & Craft
              </h2>
              <p className="text-gray-600 leading-relaxed max-w-3xl animate-on-scroll animate-fade-up delay-400">
                Our Art & Craft Programme (ages 5–12) nurtures creativity
                through hands-on, guided projects that take children from
                imagination to creation. With monthly themed artworks,
                small-group teaching, and exposure to diverse materials and
                techniques, students build confidence, artistic skills, and a
                personal portfolio to be proud of.
              </p>

              {/* Points */}
              <div className="space-y-8 mt-8">
                <div className="col-span-1 p-6 rounded-2xl bg-blue-50 animate-on-scroll animate-slide-right">
                  <h3 className=" text-darkblue font-semibold mb-3">
                    Progressive 5-Stage Art Curriculum
                  </h3>
                  <p className="text-gray-700">
                    A structured journey from foundational drawing skills to
                    advanced mixed-media and oil painting techniques.
                  </p>
                </div>

                <div className="col-span-1 p-6 rounded-2xl bg-red/10 animate-on-scroll animate-slide-right">
                  <h3 className="text-darkblue font-semibold mb-3">
                    Hands-On Creative Projects
                  </h3>
                  <p className="text-gray-700">
                    Monthly rotating projects include painting, sculpture,
                    collage, clay modelling, and recycled-art creations.
                  </p>
                </div>

                <div className="col-span-1 p-6 rounded-2xl bg-yellow/10 animate-on-scroll animate-slide-right">
                  <h3 className="text-darkblue font-semibold mb-3">
                    Core Art Fundamentals
                  </h3>
                  <p className="text-gray-700">
                    Students learn colour theory, composition, texture, tool
                    handling, and creative problem-solving.
                  </p>
                </div>

                <div className="col-span-1 p-6 rounded-2xl bg-green/10 animate-on-scroll animate-slide-right">
                  <h3 className="text-darkblue font-semibold mb-3">
                    Take-Home Art Portfolio
                  </h3>
                  <p className="text-gray-700">
                    Each student receives a curated portfolio showcasing their
                    monthly and capstone works.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-span-1">
              <div className="rounded-2xl md:mt-8 sticky top-28">
                <img
                  src={artcraft}
                  alt="Sunshine Enrichment Centre Teacher Teaching Children Art"
                  className="rounded-2xl w-full max-h-[calc(100vh-9rem)] object-cover shadow-lg hover:-translate-y-1 transition-transform duration-300 animate-on-scroll animate-fade-up"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ArtCraft;
