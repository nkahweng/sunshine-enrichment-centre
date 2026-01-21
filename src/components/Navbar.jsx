import React, { useEffect, useState } from "react";
import { headerLogo } from "../assets";
import { NavLink, useLocation } from "react-router-dom";
import CTAButton from "./CTAButton";
import { MessageCircle, ChevronDown, Menu, X } from "lucide-react";
import { routes } from "../constants";

const Navbar = () => {
  const location = useLocation();
  const isProgramActive = location.pathname.startsWith("/programs");

  const [isOpenNav, setIsOpenNav] = useState(false);
  const [programOpen, setProgramOpen] = useState(false);
  const navLinkClass = ({ isActive }) =>
    `transition-colors p-4 cursor-pointer hover:-translate-y-0.5 ${
      isActive ? "text-orange" : "text-darkblue hover:text-orange"
    }`;

  const mobileNavLinkClass = ({ isActive }) =>
    `transition-colors p-2 cursor-pointer ${
      isActive ? "text-orange" : "text-darkblue hover:text-orange"
    }`;

  useEffect(() => {
    setIsOpenNav(false);
  }, [location.pathname]);

  return (
    // fix on top
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="max-w-wide mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Header Logo */}
          <NavLink to="/">
            <img
              src={headerLogo}
              alt="Sunshine Enrichment Centre Logo"
              className="h-14"
            />
          </NavLink>

          {/* Mobile Menu */}
          <div className="md:hidden">
            {!isOpenNav ? (
              <Menu
                className="w-6 h-6 text-darkblue"
                onClick={() => setIsOpenNav(true)}
              />
            ) : (
              <X
                className="w-6 h-6 text-darkblue"
                onClick={() => setIsOpenNav(false)}
              />
            )}
          </div>

          {/* Links */}
          <div className="md:flex font-montserrat font-medium gap-8 items-center text-darkblue hidden">
            <NavLink className={navLinkClass} to={routes.home}>
              Home
            </NavLink>

            <div className="relative group">
              {/* Trigger */}
              <button
                className={`flex gap-1 items-center transition hover:-translate-y-0.5 ${isProgramActive ? "text-orange" : "text-darkblue hover:text-orange"}`}
              >
                Programs{" "}
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>

              {/* Program Menu */}
              <ul className="absolute left-0 top-full mt-1 w-56 font-normal bg-[#ffffff] rounded-2xl shadow-lg opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200">
                <li className="py-3">
                  <NavLink to={routes.learningClass} className={navLinkClass}>
                    Learning Class
                  </NavLink>
                </li>
                <li className="py-3 ">
                  <NavLink
                    to={routes.strengtheningClass}
                    className={navLinkClass}
                  >
                    Strengthening Class
                  </NavLink>
                </li>
                <li className="py-3 ">
                  <NavLink to={routes.artCraft} className={navLinkClass}>
                    {" "}
                    Art & Craft
                  </NavLink>
                </li>
                <li className="py-3 ">
                  <NavLink to={routes.artCraft} className={navLinkClass}>
                    Picture Book
                  </NavLink>
                </li>
                <li className="py-3 ">
                  <NavLink to={routes.roboticsSTEAM} className={navLinkClass}>
                    Robotic & STEAM
                  </NavLink>
                </li>
              </ul>
            </div>
            <NavLink className={navLinkClass} to={routes.about}>
              About
            </NavLink>
            <CTAButton text="Contact Us" icon={<MessageCircle size={15} />} />
          </div>
        </div>

        {/* Mobile */}
        {isOpenNav && (
          <div
            className={`bg-white w-full md:hidden overflow-hidden px-2 pt-1 pb-4 border-t`}
          >
            <div className="flex flex-col gap-2">
              <NavLink className={mobileNavLinkClass} to={routes.home}>
                Home
              </NavLink>
              <div className="p-2">
                <button
                  className={`flex gap-1 items-center ${isProgramActive ? "text-orange" : "text-darkblue"}`}
                  onClick={() => setProgramOpen(!programOpen)}
                >
                  Programs
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${programOpen ? "rotate-180" : ""}`}
                  />
                </button>
              </div>
              {/* Program Menu */}
              {programOpen && (
                <ul className="ml-4 font-normal">
                  <li className="py-3">
                    <NavLink
                      to={routes.learningClass}
                      className={mobileNavLinkClass}
                    >
                      Learning Class
                    </NavLink>
                  </li>
                  <li className="py-3 ">
                    <NavLink
                      to={routes.strengtheningClass}
                      className={mobileNavLinkClass}
                    >
                      Strengthening Class
                    </NavLink>
                  </li>
                  <li className="py-3 ">
                    <NavLink
                      to={routes.artCraft}
                      className={mobileNavLinkClass}
                    >
                      {" "}
                      Art & Craft
                    </NavLink>
                  </li>
                  <li className="py-3 ">
                    <NavLink
                      to={routes.pictureBook}
                      className={mobileNavLinkClass}
                    >
                      Picture Book
                    </NavLink>
                  </li>
                  <li className="py-3 ">
                    <NavLink
                      to={routes.roboticsSTEAM}
                      className={mobileNavLinkClass}
                    >
                      Robotic & STEAM
                    </NavLink>
                  </li>
                </ul>
              )}
              <NavLink className={mobileNavLinkClass} to={routes.about}>
                About
              </NavLink>
              <CTAButton
                className="mt-2 flex justify-center"
                text="Contact Us"
                icon={<MessageCircle size={15} />}
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
