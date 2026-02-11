import React from "react";
import { footerLogo, xhs } from "../assets";
import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <section className="bg-darkblue font-montserrat text-white">
      <footer className="container grid lg:grid-cols-4 gap-10 py-14">
        {/* Brand */}
        <div className="md:col-span-2">
          <img
            src={footerLogo}
            alt="Sunshine Enrichment Centre Logo"
            className="w-14 h-14 mb-6"
          />
          <p className="text-white/70 max-w-md text-sm">
            Sunshine Enrichment Centre isn’t just a place for learning—it’s a
            space where dreams come alive. Established with a heart full of
            passion, our mission is to help children grow into confident,
            curious, and creative individuals.
          </p>
          <div className="flex gap-4 mt-6">
            <a
              href="https://www.facebook.com/profile.php?id=61585173486333"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-radial-orange-footer"
            >
              <FaFacebook className="w-5 h-5" />
            </a>
            <a
              href="https://www.facebook.com/simpangrenggam.zeniustech"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-radial-yellow-footer"
            >
              <FaFacebook className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/_u/secedu.official/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-radial-orange-footer"
            >
              <FaInstagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/reel/DUmqmxoiV52/?igsh=cDcxbWZtMDZxN3By"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-radial-yellow-footer"
            >
              <FaInstagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.xiaohongshu.com/user/profile/670c849d000000000d026b89"
              target="_blank"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-radial-orange-footer"
            >
              <img src={xhs} className="w-8 h-8" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="">
          <h5 className="font-semibold text-orange mb-4">Quick Links</h5>
          <ul className="space-y-4 text-sm text-white/70">
            <li>
              <HashLink smooth to="/#programs" className="hover:text-orange">
                Programs
              </HashLink>
            </li>
            <li>
              <Link to="/about" className="hover:text-orange">
                About
              </Link>
            </li>
          </ul>
        </div>

        {/* Contacts */}
        <div className="flex flex-col flex-wrap">
          <h5 className="font-semibold text-orange mb-4">Contacts</h5>
          <ul className="space-y-4 text-sm text-white/70">
            <li className="flex gap-2 items-start">
              <MapPin className="w-5 h-5 shrink-0 mt-0.5" />
              <a className="">
                No. 10A & 11A, Jalan Jaya 1, Taman Berjaya, 86200 Simpang
                Renggam, Johor.
              </a>
            </li>
            <li className="flex gap-2">
              <Phone className="w-5 h-5 " />
              <a>+6011 5880 4476</a>
            </li>
            <li className="flex gap-2 hover:text-orange">
              <Mail className="w-5 h-5" />
              <a href="mailto:secedu.spg@gmail.com">secedu.spg@gmail.com</a>
            </li>
          </ul>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
