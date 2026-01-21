import React from "react";
import ProgramHero from "../../components/ProgramHero";
import { learning } from "../../assets";
import { subjects } from "../../constants/index";
import { useScrollObserver } from "../../hooks/useScrollObserver";

const LearningClass = () => {
  const containerRef = useScrollObserver();
  return (
    <>
      <ProgramHero
        title="Learning Class"
        years="4 - 12 years"
        desc="Learning Through Play and Play-Based Teaching"
        img={learning}
      />
      <section ref={containerRef} className="bg-white py-14">
        <div className="font-montserrat container mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 mb-12">
            {/* About the Program */}
            <div className="md:col-span-1 w-full">
              <h2 className="text-lg font-semibold text-darkblue mb-4 animate-on-scroll animate-fade-up">
                About Learning Class
              </h2>
              <p className="text-gray-600 leading-relaxed max-w-3xl animate-on-scroll animate-fade-up delay-200">
                Say goodbye to rote drilling our Learning Class (ages 4-12) uses
                Learning Through Play and Play- Based Teaching to make Bahasa
                Melayu, Mandarin (中文), English, Mathematics, Science, and
                History come alive. In small, mixed-ability groups (max 10
                students), each 90-minute lesson is packed with games,
                challenges and interactive experiments aligned to Malaysia's
                national standards. Regular progress reports keep parents in the
                loop, and optional booster sessions are available for extra
                support.
              </p>

              {/* Points */}
              <div className="space-y-8 mt-8">
                <div className="col-span-1 p-6 rounded-2xl bg-blue-50 animate-on-scroll animate-slide-right">
                  <h3 className=" text-darkblue font-semibold mb-3">
                    Interactive & Fun Learning
                  </h3>
                  <p className="text-gray-700">
                    Lessons are play-based and activity-driven, helping children
                    learn naturally without pressure or boredom.
                  </p>
                </div>

                <div className="col-span-1 p-6 rounded-2xl bg-green/10 animate-on-scroll animate-slide-right">
                  <h3 className="text-darkblue font-semibold mb-3">
                    Hands On Syllabus
                  </h3>
                  <p className="text-gray-700">
                    Children learn by doing — exploring, experimenting, and
                    participating actively in every session.
                  </p>
                </div>

                <div className="col-span-1 p-6 rounded-2xl bg-orange/10 animate-on-scroll animate-slide-right">
                  <h3 className="text-darkblue font-semibold mb-3">
                    Aligned with Academic Standards
                  </h3>
                  <p className="text-gray-700">
                    Our syllabus follows Malaysia’s education framework, so
                    learning stays structured and purposeful.
                  </p>
                </div>

                <div className="col-span-3 p-6 rounded-2xl bg-[#ffffff]">
                  <h3 className="text-lg text-darkblue font-semibold mb-4">
                    Subjects Covered
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    {subjects.map((subject, index) => (
                      <span
                        key={subject.title}
                        className={`rounded-full text-white px-6 py-2 text-sm font-medium ${subject.color} animate-on-scroll animate-pop-up`}
                      >
                        {subject.title}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-span-1">
              <div className="rounded-2xl md:mt-8 sticky top-28">
                <img
                  src={learning}
                  alt="Sunshine Enrichment Centre Teacher Teaching English"
                  className="rounded-2xl w-full max-h-[calc(100vh-9rem)] object-cover shadow-lg hover:-translate-y-1 transition-transform duration-300 animate-on-scroll animate-fade-up"
                />
              </div>
            </div>
          </div>
        </div>
        {/* <div className="fixed bottom-8 right-8 shadow-lg">
          <CTAButton
            icon={<MessageCircle size={15} />}
            text="Enquire Now"
            className=""
          />
        </div> */}
      </section>
    </>
  );
};

export default LearningClass;
