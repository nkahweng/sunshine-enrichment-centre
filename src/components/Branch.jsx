import { MapPin } from "lucide-react";
import React from "react";

const Branch = ({ branch }) => {
  return (
    <div className="w-full flex-shrink-0 p-4 h-full">
      <div className="flex flex-col items-center">
        <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-8 animate-on-scroll animate-fade-up">
          <span className="">{branch.name}</span>
        </h3>
        <div className="bg-white rounded-2xl overflow-hidden animate-on-scroll animate-fade-up delay-400">
          <div className="aspect-video">
            <iframe
              src={branch.loc}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sunshine Enrichment Centre Location"
            />
          </div>
          <div className="flex flex-col p-8">
            <div className="flex gap-4 border-b pb-8">
              <MapPin className="mt-0.5" />
              <p className="">{branch.address}</p>
            </div>
            <ul className="">
              <li className="flex justify-between py-6 border-b-2 border-b-darkblue/50">
                <p>Monday - Friday</p>
                <p>{branch.weekday}</p>
              </li>
              <li className="flex justify-between py-6 border-b-2 border-b-darkblue/50">
                <p>Saturday</p>
                <p>{branch.sat}</p>
              </li>
              <li className="flex justify-between py-6">
                <p>Sunday</p>
                <p>{branch.sun}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Branch;
