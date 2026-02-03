import { Star } from "lucide-react";
import React from "react";

const TestimonialCard = ({ index, name, description, classes }) => {
  return (
    <div key={index} className="w-full lg:w-1/2 flex-shrink-0 p-4">
      <div className="bg-white rounded-2xl h-full shadow-sm hover:shadow-md transition-all duration-500 p-8 lg:p-12 relative animate-on-scroll animate-fade-up delay-400">
        <div className="relative h-full flex flex-col z-10">
          {/* 5 Stars for Trust */}
          <div className="flex gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} className="fill-orange text-orange" />
            ))}
          </div>

          {/* Testimonial Text */}
          <p className="text-gray-700 italic leading-relaxed mb-8 text-md flex-grow">
            {description}
          </p>

          {/* Parent Info */}
          <div className="border-t border-gray-200 pt-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 shrink-0 bg-darkblue rounded-full flex items-center justify-center text-white font-bold text-lg font-leagueSpartan">
                {name.charAt(0)}
              </div>
              <div>
                <h5 className="text-darkblue font-bold text-lg leading-none mb-1">
                  {name}
                </h5>
                <p className="text-orange text-sm font-medium">
                  Parent of {classes} student
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
