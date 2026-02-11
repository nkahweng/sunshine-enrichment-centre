import React from "react";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_LINK } from "../constants";

const CTAButton = ({
  icon,
  text,
  className = "",
  backgroundColor = "bg-orange-yellow",
  rounded = "rounded-3xl",
}) => {
  return (
    <button
      className={`font-montserrat text-white font-semibold hover:opacity-90 ${className} ${backgroundColor} ${rounded}`}
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
