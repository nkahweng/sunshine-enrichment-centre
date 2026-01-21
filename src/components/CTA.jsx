import React from "react";
import { cta, groupPhoto, trip4 } from "../assets";
import { MessageCircle } from "lucide-react";
import CTAButton from "./CTAButton";

const CTA = () => {
  return (
    <section className="bg-[#FFF8EF] py-20 px-6 font-montserrat">
      <div className="max-w-5xl mx-auto">
        <div className="relative rounded-3xl shadow-2xl h-[420px] overflow-hidden">
          <img
            src={trip4}
            alt="Children of Sunshine Enrichment Centre on a Train"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/30 z-5" />
          <div className="absolute inset-0 z-20 text-center flex flex-col items-center justify-center px-6">
            <h3 className="text-4xl md:text-5xl text-white font-bold font-leagueSpartan mb-6 leading-tight">
              Ready to Ignite Your Child's <br />
              <span className="text-orange">Potential</span>?
            </h3>
            <p className="max-w-xl mx-auto mb-10 text-white/90 font-light leading-relaxed">
              Contact us about anything related to our company or services.
              We'll do our best to get back to you as soon as possible.
            </p>
            <CTAButton
              text="Chat With Us on WhatsApp"
              icon={<MessageCircle size={15} />}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
