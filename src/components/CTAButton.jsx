import React from "react";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_LINK } from "../constants";

const CTAButton = ({ icon, text, className = "" }) => {
  return (
    <button
      className={`font-montserrat text-white bg-orange-yellow font-semibold rounded-3xl hover:opacity-90 ${className}`}
    >
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className=" flex items-center px-6 py-2 gap-2"
      >
        {icon}
        {text}
      </a>
    </button>
  );
};

export default CTAButton;
