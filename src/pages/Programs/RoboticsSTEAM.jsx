import React from "react";
import Navbar from "../../components/Navbar";
import ProgramHero from "../../components/ProgramHero";
import Footer from "../../components/Footer";
import { robotics } from "../../assets";
import CTAButton from "../../components/CTAButton";
import { MessageCircle } from "lucide-react";
import { useScrollObserver } from "../../hooks/useScrollObserver";

const RoboticsSTEAM = () => {
  const containerRef = useScrollObserver();
  return (
    <>
      <ProgramHero
        title="Robotics & STEAM"
        years="4 - 18 years"
        desc="One Passion, Infinite Future"
        background="bg-linear-red"
        img={robotics}
      />
      <section ref={containerRef} className="bg-white py-14">
        <div className="font-montserrat container mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 mb-12">
            {/* About the Program */}
            <div className="md:col-span-1 w-full">
              <h2 className="text-lg font-semibold text-darkblue mb-4 animate-on-scroll animate-fade-up">
                About Robotics & STEAM
              </h2>
              <p className="text-gray-600 leading-relaxed max-w-3xl animate-on-scroll animate-fade-up delay-200">
                From the first spark of curiosity, our Robotics & STEAM Learning
                Programme empowers learners (ages 4-18) to become tomorrow's
                innovators. Across sequential levels-STEAM LAB, Probo, GULC and
                Scratch, students dive into hands-on modules in science,
                technology, engineering, arts and mathematics. We teach vital
                S.T.E.A.M. knowledge and skills via our specialized syllabus
                which engaged young students and makers to master the skills
                efficiently based on their current ages, potential, and ability.
              </p>

              {/* Points */}
              <div className="space-y-8 mt-8">
                <div className="col-span-1 p-6 rounded-2xl bg-blue-50 animate-on-scroll animate-slide-right">
                  <h3 className=" text-darkblue font-semibold mb-3">
                    Curious Explorer
                  </h3>
                  <p className="text-gray-700">S.T.E.A.M Lab </p>
                </div>

                <div className="col-span-1 p-6 rounded-2xl bg-red/10 animate-on-scroll animate-slide-right">
                  <h3 className="text-darkblue font-semibold mb-3">
                    Impressive Creator
                  </h3>
                  <p className="text-gray-700">
                    PROBO Robotics
                    <br />
                    GULC
                    <br />
                    Scratch Game Design
                    <br />
                    A.I Coding
                  </p>
                </div>

                <div className="col-span-1 p-6 rounded-2xl bg-yellow/10 animate-on-scroll animate-slide-right">
                  <h3 className="text-darkblue font-semibold mb-3">
                    Innovative Maker
                  </h3>
                  <p className="text-gray-700">
                    Arduino
                    <br />
                    Internet of Things (IoT)
                    <br />
                    Python & A.I Programming
                  </p>
                </div>

                <div className="col-span-1 p-6 rounded-2xl bg-green/10 animate-on-scroll animate-slide-right">
                  <h3 className="text-darkblue font-semibold mb-3">
                    Master Inventor
                  </h3>
                  <p className="text-gray-700">
                    Mechanical CAD Design Modelling & 3D <br /> 3D Printing{" "}
                    <br /> VINU <br />
                    Drone
                  </p>
                </div>
              </div>
            </div>
            {/* Sidebar */}
            <div className="col-span-1">
              <div className="rounded-2xl md:mt-8 sticky top-28">
                <img
                  src={robotics}
                  alt="Sunshine Enrichment Centre Children Assembling Robotic Components"
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

export default RoboticsSTEAM;
