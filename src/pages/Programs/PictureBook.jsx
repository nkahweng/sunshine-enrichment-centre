import React from "react";
import Navbar from "../../components/Navbar";
import ProgramHero from "../../components/ProgramHero";
import Footer from "../../components/Footer";
import { picturebook, strengthening } from "../../assets";
import CTAButton from "../../components/CTAButton";
import { MessageCircle } from "lucide-react";
import { useScrollObserver } from "../../hooks/useScrollObserver";

const PictureBook = () => {
  const containerRef = useScrollObserver();
  return (
    <>
      <ProgramHero
        title="Picture Book Program"
        years="4 - 8 years"
        desc="Stop forcing reading. Start fueling imagination"
        background="bg-linear-orange"
        img={picturebook}
      />
      <section ref={containerRef} className="bg-white py-14">
        <div className="font-montserrat container mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 mb-12">
            {/* About the Program */}
            <div className="md:col-span-1 w-full">
              <h2 className="text-lg font-semibold text-darkblue mb-4 animate-on-scroll animate-fade-up">
                About Picture Book Program
              </h2>
              <p className="text-gray-600 leading-relaxed max-w-3xl animate-on-scroll animate-fade-up delay-200">
                Our Picture Book Literacy Programme (ages 4–8) builds early
                reading skills through the joy of storytelling. Using carefully
                selected picture books, children develop phonemic awareness,
                comprehension, and imagination while learning to interpret both
                text and illustrations in a fun, interactive setting.
              </p>

              {/* Points */}
              <div className="space-y-8 mt-8">
                <div className="col-span-1 p-6 rounded-2xl bg-blue-50 animate-on-scroll animate-slide-right">
                  <h3 className=" text-darkblue font-semibold mb-3">
                    Story-Based Literacy Learning
                  </h3>
                  <p className="text-gray-700">
                    Picture books are used as a foundation to develop early
                    reading, comprehension, and narrative understanding.
                  </p>
                </div>

                <div className="col-span-1 p-6 rounded-2xl bg-red/10 animate-on-scroll animate-slide-right">
                  <h3 className="text-darkblue font-semibold mb-3">
                    Interactive 60-Minute Sessions
                  </h3>
                  <p className="text-gray-700">
                    Each lesson combines read-alouds, guided drawing, role-play,
                    and group discussions to keep learning engaging.
                  </p>
                </div>

                <div className="col-span-1 p-6 rounded-2xl bg-yellow/10 animate-on-scroll animate-slide-right">
                  <h3 className="text-darkblue font-semibold mb-3">
                    Phonemic Awareness & Vocabulary Building
                  </h3>
                  <p className="text-gray-700">
                    Activities strengthen sound recognition, word meaning, and
                    early reading fluency.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-span-1">
              <div className="rounded-2xl md:mt-8 sticky top-28">
                <img
                  src={picturebook}
                  alt="Sunshine Enrichment Centre Teacher Reading Books and Showing Graphics to Children"
                  className="rounded-2xl w-full max-h-[calc(100vh-9rem)] object-cover shadow-lg hover:-translate-y-1 transition-transform duration-300 animate-on-scroll animate-fade-up"
                />
                {/* <div className="mt-4 flex justify-center">
                  <CTAButton
                    icon={<MessageCircle size={15} />}
                    text="Enquire Now"
                    className="h-12 w-full md:w-auto"
                  />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PictureBook;
