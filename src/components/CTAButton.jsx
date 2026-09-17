import React from "react";
import { WHATSAPP_LINK } from "../constants";

const CTAButton = ({
  icon,
  text,
  className = "",
  backgroundColor = "bg-orange-yellow",
  rounded = "rounded-3xl",
}) => {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center px-6 py-2 gap-2 font-montserrat text-white font-semibold hover:opacity-90 ${className} ${backgroundColor} ${rounded}`}
    >
      {icon}
      {text}
    </a>
  );
};

export default CTAButton;
