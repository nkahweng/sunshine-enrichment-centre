import React from "react";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";
import { programs, routes } from "../constants";

const NotFound = () => {
  return (
    // pt-32 clears the fixed navbar, which is opaque on every route but "/"
    <section className="font-montserrat bg-white pt-32 pb-20 min-h-[70vh] flex items-center">
      <div className="container mx-auto px-6 text-center">
        <p className="text-orange font-leagueSpartan text-7xl md:text-8xl font-bold mb-2">
          404
        </p>
        <h1 className="font-leagueSpartan text-3xl md:text-4xl font-bold text-darkblue mb-4">
          This page went out to play
        </h1>
        <p className="text-gray-600 max-w-md mx-auto mb-10">
          We couldn't find the page you were looking for. It may have moved, or
          the link might be out of date.
        </p>

        <Link
          to={routes.home}
          className="inline-flex items-center gap-2 bg-orange-yellow text-white font-semibold rounded-3xl px-6 py-3 hover:opacity-90 transition-opacity"
        >
          <Home size={18} />
          Back to Home
        </Link>

        <div className="mt-14">
          <p className="text-sm text-grey mb-4">Or explore our programmes:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {programs.map((program) => (
              <Link
                key={program.id}
                to={program.route}
                className="text-sm text-darkblue border border-gray-200 rounded-full px-4 py-2 hover:border-orange hover:text-orange transition-colors"
              >
                {program.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
