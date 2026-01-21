import React from "react";
import { groupPhoto } from "../assets";
import { Eye, Goal } from "lucide-react";
import { useScrollObserver } from "../hooks/useScrollObserver";

const Background = () => {
  const containerRef = useScrollObserver();
  return (
    <section ref={containerRef} className="relative">
      <div className="absolute inset-0 overflow-hidden pointer-event-none">
        <div className="absolute top-64 right-0 w-64 h-64 bg-yellow/10 rounded-full blur-3xl -mr-32 -mt-32" />
      </div>
      <div className="my-20 container font-montserrat">
        {/* Background */}
        <div className="text-darkblue">
          <h2 className="text-2xl md:text-3xl font-bold font-leagueSpartan mb-10 animate-on-scroll animate-slide-right">
            Our <span className="text-orange">Background</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-10 mb-12 md:mb-20">
            <div className="md:col-span-2 max-w-2xl text-base/7">
              <p className="mb-4 animate-on-scroll animate-slide-right delay-200">
                Sunshine Enrichment Centre began humbly in 2019 as a home
                tuition service with just 5 students in Simpang Renggam. What
                started as lessons around a kitchen table quickly revealed the
                transformative power of playful, personalised learning. By 2021,
                our growing family of learners inspired us to establish our
                first dedicated centre, where we could fully realise our vision
                of education through discovery and joy.
              </p>
              <p className="animate-on-scroll animate-slide-right delay-400">
                Today in 2025, we're proud to have nurtured over 100 bright
                young minds through our innovative programs, each child's
                journey a testament to our belief that learning should spark
                wonder. As we look to the future, we're excited to announce
                plans for a second branch, allowing us to bring our unique blend
                of heart and expertise to even more families while maintaining
                the close-knit, personalised approach that started it all. From
                five students to soon two locations, our commitment remains
                unchanged: to create spaces where children don't just learn, but
                shine.
              </p>
            </div>
            <div className="animate-on-scroll animate-fade-up">
              <img
                src={groupPhoto}
                alt="Sunshine Enrichment Centre Staff Group Photo"
                className="animate-fade-up object-cover rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500"
              />
            </div>
          </div>

          {/* Vision Mission */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 mx-6">
            <div className="flex flex-col items-center bg-[#ffffff] shadow-md rounded-3xl px-14 py-10 text-center hover:-translate-y-2 transition-all duration-500 animate-on-scroll animate-fade-up">
              <div className="w-14 h-14 bg-green rounded-full flex items-center justify-center">
                <Eye className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold my-4 font-leagueSpartan">
                Our <span className="text-orange">Vision</span>
              </h3>
              <p>
                Sunshine Enrichment Centre aim to become synonymous with joyful,
                play driven learning where to empower every child to meet
                challenges with confident, creative, and resilience. We envision
                a future where education goes beyond textbooks. Where play,
                hands-on experiences, and innovation ignite curiosity, unlock
                potential, and prepare children for success in an ever-changing
                world.
              </p>
            </div>
            <div className="flex flex-col items-center bg-[#ffffff] shadow-md rounded-3xl px-14 py-10 text-center hover:-translate-y-2 transition-all duration-500 animate-on-scroll animate-fade-up">
              <div className="w-14 h-14 bg-yellow rounded-full flex items-center justify-center">
                <Goal className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold my-4 font-leagueSpartan">
                Our <span className="text-orange">Vision</span>
              </h3>
              <p>
                To enrich a passion of learning in every child through hands-on,
                playful learning experiences. We guide and facilitate students
                to build real-life and creative skills in a supportive and
                inclusive environment, allowing them to sprout with confidence
                and curiosity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Background;
