import React from "react";
import { MapPin } from "lucide-react";
import { useScrollObserver } from "../hooks/useScrollObserver";

const FindUs = () => {
  const containerRef = useScrollObserver();
  return (
    <section ref={containerRef} className="container text-darkblue pb-8 px-6">
      {/* Locate Us */}
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-8 animate-on-scroll animate-fade-up">
          <span className="text-orange">Find</span> Us
        </h2>
      </div>
      <div className="grid md:grid-cols-2 gap-20 max-w-5xl mx-auto">
        <div className="flex flex-col items-center">
          <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-8 animate-on-scroll animate-fade-up">
            <span className="">Branch</span> 1
          </h3>
          <div className="rounded-2xl overflow-hidden animate-on-scroll animate-fade-up delay-400">
            <div className="aspect-video">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.776978851222!2d103.30411167472577!3d1.832894298150339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d0633d87801baf%3A0x79c04b410df2b8c0!2zU3Vuc2hpbmUgRW5yaWNobWVudCBDZW50cmUg5ZCv56iL5pWZ6IKy5a2m5Lmg5Lit5b-D!5e0!3m2!1sen!2smy!4v1768883522837!5m2!1sen!2smy"
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
                <p className="">
                  No. 10A & 11A, Jalan Jaya 1, Taman Berjaya, 86200 Simpang
                  Renggam, Johor.
                </p>
              </div>
              <ul className="">
                <li className="flex justify-between py-6 border-b-2 border-b-darkblue/50">
                  <p>Monday - Friday</p>
                  <p>8.30 am - 7.00 pm</p>
                </li>
                <li className="flex justify-between py-6 border-b-2 border-b-darkblue/50">
                  <p>Saturday</p>
                  <p>8.30 am - 5.30 pm</p>
                </li>
                <li className="flex justify-between py-6">
                  <p>Sunday</p>
                  <p>Closed</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-8 animate-on-scroll animate-fade-up">
            <span className="">Branch</span> 2
          </h3>
          <div className=" rounded-2xl overflow-hidden  animate-on-scroll animate-fade-up delay-400">
            <div className="aspect-video">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.3949163777165!2d103.29011107472618!3d1.9970822979849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d06e943b50094d%3A0x6e7d5c5d33389d18!2s37%2C%20Jln%20Tasik%20Indah%201%2F5%2C%2086000%20Kluang%2C%20Johor%20Darul%20Ta&#39;zim!5e0!3m2!1sen!2smy!4v1770711991214!5m2!1sen!2smy"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowfullscreen
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                title="Sunshine Enrichment Centre Location 2"
              />
            </div>
            <div className="flex flex-col p-8">
              <div className="flex gap-4 border-b pb-8">
                <MapPin className="mt-0.5" />
                <p className="">
                  No. 37A & 39A, Jalan Tasik Indah 1/5, Taman Tasik Indah, 86000
                  Kluang, Johor Darul Ta'zim
                </p>
              </div>
              <ul className="">
                <li className="flex justify-between py-6 border-b-2 border-b-darkblue/50">
                  <p>Monday - Friday</p>
                  <p>8.30 am - 7.00 pm</p>
                </li>
                <li className="flex justify-between py-6 border-b-2 border-b-darkblue/50">
                  <p>Saturday</p>
                  <p>Closed</p>
                </li>
                <li className="flex justify-between py-6">
                  <p>Sunday</p>
                  <p>Closed</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Opening Hours */}
      {/* <div className="flex flex-col items-center text-center mt-14 mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-10 animate-on-scroll animate-fade-up">
          <span className="text-orange">Opening</span> Hours
        </h2>
        <div className="shadow-md rounded-2xl p-10 bg-[#ffffff] animate-on-scroll animate-fade-up delay-400 max-w-2xl">
          <ul className="">
            <li className="flex justify-between py-6 border-b-2 border-b-darkblue/50">
              <p>Monday - Friday</p>
              <p>8.30 am - 7.00 pm</p>
            </li>
            <li className="flex justify-between py-6 border-b-2 border-b-darkblue/50">
              <p>Saturday</p>
              <p>8.30 am - 5.30 pm</p>
            </li>
            <li className="flex justify-between py-6">
              <p>Sunday</p>
              <p>Closed</p>
            </li>
          </ul>
        </div>
      </div> */}
    </section>
  );
};

export default FindUs;
