import React from "react";
import { BookOpenText } from "lucide-react";

const ProgramCard = ({ icon, title, ages, description }) => {
  return (
    <div className="bg-white py-8 px-14 rounded-xl flex flex-col items-center font-montserrat">
      <div className="h-20 w-20 rounded-full bg-green flex justify-center items-center mb-6">
        <BookOpenText className="text-white h-7 w-7" />
      </div>
      <div className="flex flex-col items-start w-full">
        <h3 className="font-bold block mb-2">Learning Class</h3>
        <div className="w-full rounded-full bg-[#E1FFF0] py-1 px-4 text-green text-sm font-medium mb-6">
          4 - 12 years{" "}
        </div>
        <p>
          I would say Sunshine is able to take his school stress away. I want to
          thank Lifestyle Hub for making learning enjoyable and fun for Kasheff,
          especially on Mind Day.
        </p>
      </div>
    </div>
  );
};

export default ProgramCard;
