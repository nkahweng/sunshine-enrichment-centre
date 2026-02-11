import React from "react";
import ProgramHero from "../../components/ProgramHero";
import { english } from "../../assets";
import { useScrollObserver } from "../../hooks/useScrollObserver";

const EnglishEnrichment = () => {
  const containerRef = useScrollObserver();
  return (
    <>
      <ProgramHero
        title="English Enrichment Class"
        years="7 - 17 years"
        desc='"Stop forcing grammar. Start sparking communication."'
        background="bg-linear-yellow"
        img={english}
      />
      <section ref={containerRef} className="bg-white py-14">
        <div className="font-montserrat container mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 mb-12">
            {/* About the Program */}
            <div className="md:col-span-1 w-full">
              <h2 className="text-lg font-semibold text-darkblue mb-4 animate-on-scroll animate-fade-up">
                About English Enrichment Class
              </h2>
              <p className="text-gray-600 leading-relaxed max-w-3xl animate-on-scroll animate-fade-up delay-400">
                Our English Enrichment Class (Ages 7–17) builds confident
                communicators through a lively, Cambridge-inspired curriculum.
                We move beyond rote learning, using interactive projects,
                gamification, and the scaffolding method to develop practical
                speaking, listening, and comprehension skills in a stimulating,
                English-immersive environment.
              </p>

              {/* Points */}
              <div className="space-y-8 mt-8">
                <div className="col-span-1 p-6 rounded-2xl bg-yellow/10 animate-on-scroll animate-slide-right">
                  <h3 className=" text-darkblue font-semibold mb-3">
                    Cambridge Framework & Gamified Learning
                  </h3>
                  <p className="text-gray-700">
                    A structured yet flexible Cambridge syllabus provides the
                    foundation, brought to life through creative and game-like
                    activities that make mastering English natural and fun.
                  </p>
                </div>

                <div className="col-span-1 p-6 rounded-2xl bg-blue-50 animate-on-scroll animate-slide-right">
                  <h3 className="text-darkblue font-semibold mb-3">
                    Project-Based & Immersive Sessions
                  </h3>
                  <p className="text-gray-700">
                    Each 90-minute lesson revolves around collaborative
                    projects, role-plays, and real-world tasks, ensuring
                    students use English actively to solve problems, create, and
                    share ideas.
                  </p>
                </div>

                <div className="col-span-1 p-6 rounded-2xl bg-green/10 animate-on-scroll animate-slide-right">
                  <h3 className="text-darkblue font-semibold mb-3">
                    Confidence in Communication
                  </h3>
                  <p className="text-gray-700">
                    We prioritize fluency over perfection. Our focus on speaking
                    and listening builds public confidence, sharpens
                    pronunciation, and develops the critical ability to
                    understand and be understood.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-span-1">
              <div className="rounded-2xl md:mt-8 sticky top-28">
                <img
                  src={english}
                  alt="Sunshine Enrichment Centre Teacher Teaching Children English"
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

export default EnglishEnrichment;
