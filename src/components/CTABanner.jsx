import React from "react";
import CTAButton from "./CTAButton";
import { MessageCircle } from "lucide-react";

const CTABanner = () => {
  return (
    <section className="bg-darkblue px-6">
      <div className="flex flex-col md:flex-row text-center justify-between items-center max-w-content mx-auto py-8 gap-4">
        <h3 className="text-3xl md:text-4xl text-white font-bold font-leagueSpartan">
          Ready to Ignite Your Child{" "}
          <span className="text-orange">Potential</span>?
        </h3>
        <div>
          <CTAButton
            text="Chat With Us on WhatsApp"
            icon={<MessageCircle size={15} />}
          />
        </div>
      </div>
    </section>
  );
};

{
  /* <section className="bg-darkblue">
  <div className="flex flex-col md:flex-row justify-between items-center max-w-content mx-auto py-8 gap-6">
    <h3 className="text-4xl text-white font-bold font-leagueSpartan text-center md:text-left">
      Ready to Ignite Your Child{" "}
      <span className="text-orange">Potential</span>?
    </h3>
    <CTAButton />
  </div>
</section> */
}

export default CTABanner;
