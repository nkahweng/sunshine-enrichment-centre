import React from "react";
import Navbar from "../../components/Navbar";
import ProgramHero from "../../components/ProgramHero";
import Footer from "../../components/Footer";
import { strengthening } from "../../assets";
import CTAButton from "../../components/CTAButton";
import { MessageCircle } from "lucide-react";
import { useScrollObserver } from "../../hooks/useScrollObserver";

const StrengtheningClass = () => {
  const containerRef = useScrollObserver();
  return (
    <>
      <ProgramHero
        title="Strengthening Class"
        years="3 - 12 years"
        desc="Basic Knowledge Boosting Through Reading & Writing"
        background="bg-linear-green"
        img={strengthening}
      />
      <section ref={containerRef} className="bg-white py-14">
        <div className="font-montserrat container mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 mb-12">
            {/* About the Program */}
            <div className="md:col-span-1 w-full">
              <h2 className="text-lg font-semibold text-darkblue mb-4 animate-on-scroll animate-fade-up">
                About Strengthening Class
              </h2>
              <p className="text-gray-600 leading-relaxed max-w-3xl animate-on-scroll animate-fade-up delay-400">
                Our Strengthening Class (ages 3-12) targets learners who need
                focused support in reading and writing fundamentals. In a cosy
                45-minute "Golden Hour" slot, when concentration peaks, students
                work on dictation, guided composition, comprehension exercises
                and vocabulary drills. Each class blends corrective feedback,
                scaffolding techniques and creative prompts to turn weaknesses
                into strengths. Report and take-home exercise to track progress
                and collaborate closely with the parent.
              </p>

              {/* Points */}
              <div className="space-y-8 mt-8">
                <div className="col-span-1 p-6 rounded-2xl bg-blue-50 animate-on-scroll animate-slide-right">
                  <h3 className=" text-darkblue font-semibold mb-3">
                    Golden Hour Session
                  </h3>
                  <p className="text-gray-700">
                    45 minutes designed to keep students energized and engaged.
                  </p>
                </div>

                <div className="col-span-1 p-6 rounded-2xl bg-red/10 animate-on-scroll animate-slide-right">
                  <h3 className="text-darkblue font-semibold mb-3">
                    1:3 Small Class Teaching
                  </h3>
                  <p className="text-gray-700">
                    Ensures close attention and active participation for every
                    student.
                  </p>
                </div>

                <div className="col-span-1 p-6 rounded-2xl bg-yellow/10 animate-on-scroll animate-slide-right">
                  <h3 className="text-darkblue font-semibold mb-3">
                    Personalised Progress Tracking
                  </h3>
                  <p className="text-gray-700">
                    Tracks students' progress and adjust goals.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-span-1">
              <div className="rounded-2xl md:mt-8 sticky top-28">
                <img
                  src={strengthening}
                  alt="Sunshine Enrichment Centre Engaging in Interactive English Activities"
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

export default StrengtheningClass;
