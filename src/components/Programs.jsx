import React, { useEffect, useRef } from "react";
import ProgramCard from "./ProgramCard";
import { programs } from "../constants";
import { ChevronRight } from "lucide-react";
import { useScrollObserver } from "../hooks/useScrollObserver";
import { NavLink } from "react-router-dom";

const Programs = () => {
  const containerRef = useScrollObserver();

  return (
    <section
      ref={containerRef}
      className=" bg-linear-darkblue-top pb-24 pt-36 relative"
    >
      <div className="container mx-auto font-montserrat relative z-10">
        {/* Title and subtitle */}
        <div className="text-center mb-20">
          <p className="text-orange text-sm tracking-wider font-medium mb-3 animate-on-scroll animate-fade-up">
            OUR PROGRAMS
          </p>
          <h2 className="text-white font-leagueSpartan text-4xl md:text-5xl font-bold mb-6 animate-on-scroll animate-fade-up delay-200">
            Programs Designed for{" "}
            <span className="text-orange">Every Child</span>
          </h2>
          <p className="text-white/80 text-base max-w-2xl mx-auto leading-relaxed animate-on-scroll animate-fade-up delay-400">
            From academic to enrichment programs, we offer a wide range of
            in-house curated classes to support your child's journey
          </p>
        </div>

        {/* Programs */}
        <div className="">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">
            {programs.map((program, index) => (
              <div
                key={program.title}
                className="group bg-white rounded-3xl font-montserrat shadow-lg relative hover:-translate-y-3 transition-all duration-500 hover:shadow-2xl flex flex-col animate-on-scroll animate-fade-up"
              >
                <div className="relative p-2">
                  <div className="h-[240px] w-full overflow-hidden rounded-3xl">
                    <img
                      src={program.img}
                      alt={program.title}
                      className="rounded-3xl h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 ease-out"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute top-4 right-4 rounded-full bg-white py-1 px-4 text-gray-700 text-sm font-medium mb-6">
                    {program.ages}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 pt-4 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-darkblue mb-3 font-leagueSpartan transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                    {program.description}
                  </p>

                  <NavLink
                    className="flex justify-end items-center text-darkblue hover:text-orange font-bold text-sm group/btn cursor-pointer"
                    to={program.route}
                  >
                    View Details
                    <ChevronRight
                      size={18}
                      className="ml-1 group-hover/btn:translate-x-1 transition-transform"
                    />
                  </NavLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background Deco */}
      {/* <div className="absolute inset-0 z-0 flex items-center pointer-events-none">
        <svg
          width="1920"
          height="879"
          viewBox="0 0 1920 879"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2000.94 802.877C1986.72 807.37 1970.04 811.179 1950.91 814.304C1931.79 817.43 1910.94 819.872 1888.38 821.63C1865.33 823.388 1840.56 824.755 1814.08 825.732C1788.09 826.513 1760.62 826.904 1731.69 826.904C1703.24 826.904 1673.57 826.806 1642.67 826.611C1612.26 826.22 1581.12 825.732 1549.24 825.146C1517.36 824.56 1485.48 824.071 1453.6 823.681C1421.23 823.095 1389.11 822.802 1357.23 822.802C1325.84 822.606 1294.7 822.802 1263.8 823.388C1232.9 823.974 1202.99 824.95 1174.05 826.318C1145.11 827.685 1116.91 829.443 1089.45 831.592C1061.98 833.545 1035.25 835.791 1009.26 838.331C983.267 840.87 958.255 843.605 934.223 846.535C909.701 849.27 885.669 852.005 862.128 854.739C839.077 857.474 816.516 860.209 794.446 862.943C772.376 865.483 751.042 867.827 730.443 869.975C709.354 872.124 688.756 873.98 668.647 875.543C648.539 876.91 628.921 877.887 609.794 878.473C590.176 879.059 571.049 879.156 552.412 878.766C533.775 878.18 515.629 877.008 497.973 875.25C479.826 873.492 461.925 871.148 444.269 868.218C427.103 865.287 410.428 861.771 394.244 857.669C377.569 853.567 361.384 848.977 345.69 843.898C330.486 838.819 315.527 833.35 300.814 827.49C286.591 821.63 272.859 815.476 259.617 809.03C246.865 802.389 234.604 795.454 222.833 788.227C211.063 781.195 200.273 773.87 190.464 766.251C180.655 758.633 171.582 750.82 163.244 742.811C154.907 734.802 147.55 726.696 141.174 718.492C134.799 710.287 129.404 702.083 124.99 693.879C120.576 685.48 116.897 677.08 113.955 668.681C111.012 660.281 108.805 651.784 107.334 643.189C105.372 634.594 103.901 625.902 102.92 617.112C102.429 608.321 101.694 599.434 100.713 590.448C100.222 581.463 99.7318 572.379 99.2413 563.199C98.2604 554.018 97.2796 544.642 96.2987 535.07C94.8273 525.499 92.8656 515.829 90.4133 506.062C88.4516 496.1 85.5089 486.04 81.5853 475.883C77.6618 465.725 73.0025 455.373 67.6077 444.824C62.2128 434.276 55.5918 423.533 47.7447 412.594C39.8976 401.655 31.3148 390.521 21.9963 379.191C13.1683 368.057 3.60466 356.727 -6.69467 345.202C-16.994 333.873 -27.2933 322.543 -37.5927 311.214C-48.3824 299.689 -58.6818 288.262 -68.4907 276.932C-78.2996 265.603 -87.618 254.371 -96.446 243.236C-105.274 232.102 -113.121 221.163 -119.987 210.42C-126.854 199.676 -132.494 189.128 -136.908 178.775C-140.831 168.422 -143.283 158.363 -144.264 148.596C-145.736 139.024 -145 129.648 -142.057 120.467C-139.115 111.482 -133.965 102.887 -126.608 94.6827C-119.252 86.6738 -109.688 78.958 -97.9173 71.5352C-86.6371 64.3078 -73.6403 57.5686 -58.927 51.3178C-43.7232 45.0671 -27.2933 39.3046 -9.63734 34.0305C8.50909 28.9517 27.6364 24.3613 47.7447 20.2592C67.8529 16.1572 88.942 12.6411 111.012 9.71104C133.082 6.78099 155.888 4.53461 179.429 2.97191C202.48 1.40922 226.021 0.432532 250.053 0.0418579C274.085 -0.153479 298.117 0.334864 322.148 1.50689C346.18 2.67891 369.967 4.53461 393.508 7.07399C416.559 9.61337 439.61 13.0318 462.661 17.3292C485.221 21.4313 507.291 26.1194 528.871 31.3935C550.45 36.8629 571.785 42.723 592.874 48.9738C613.963 55.2246 634.807 61.866 655.405 68.8982C676.004 75.9303 696.603 83.0601 717.201 90.2876C737.8 97.5151 758.153 104.743 778.262 111.97C798.86 119.393 819.459 126.62 840.058 133.652C860.656 140.489 881.5 147.131 902.589 153.577C923.678 160.023 945.013 165.981 966.592 171.45C988.172 176.92 1010 181.803 1032.07 186.1C1054.63 190.398 1077.68 194.012 1101.22 196.942C1124.27 199.872 1147.81 202.118 1171.84 203.681C1195.88 205.439 1219.91 206.611 1243.94 207.197C1267.97 207.978 1292 208.369 1316.03 208.369C1340.07 208.564 1363.85 208.466 1387.39 208.076C1410.94 207.88 1433.99 207.587 1456.55 207.197C1479.11 206.806 1500.93 206.611 1522.02 206.611C1543.11 206.415 1563.46 206.513 1583.08 206.904C1602.7 207.294 1621.09 208.173 1638.26 209.541C1655.91 210.713 1672.1 212.471 1686.81 214.815C1701.52 217.159 1715.01 220.187 1727.27 223.898C1739.53 227.61 1750.57 232.005 1760.38 237.083C1769.7 241.967 1778.28 247.534 1786.12 253.785C1793.97 260.035 1800.84 266.872 1806.72 274.295C1813.1 281.523 1818.74 289.336 1823.64 297.736C1829.04 306.135 1833.94 315.023 1838.36 324.399C1842.77 333.58 1847.19 343.249 1851.6 353.407C1856.01 363.564 1860.43 374.112 1864.84 385.051C1869.26 395.99 1874.16 407.222 1879.55 418.747C1884.95 430.272 1891.08 441.992 1897.95 453.908C1904.32 466.018 1911.68 478.325 1920.02 490.826C1927.86 503.328 1936.45 515.927 1945.76 528.624C1954.59 541.516 1963.67 554.311 1972.98 567.008C1982.3 579.705 1991.38 592.304 2000.2 604.805C2008.54 617.307 2016.63 629.516 2024.48 641.431C2031.84 653.542 2038.46 665.262 2044.34 676.592C2050.23 687.921 2054.64 698.86 2057.59 709.408C2060.53 719.761 2062 729.626 2062 739.002C2062 748.378 2059.79 756.973 2055.38 764.786C2050.96 772.795 2044.34 780.023 2035.52 786.469C2026.69 792.72 2015.16 798.189 2000.94 802.877Z"
            fill="#14264D"
          />
        </svg>
      </div> */}

      {/* Wave */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 top-0 right-0 left-0 z-0">
          <svg
            width="1920"
            height="135"
            viewBox="0 0 1920 135"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M-145 135L-35.625 111.5C73.75 88 292.5 41 511.25 44.3571C730 47.7143 948.75 101.429 1167.5 111.5C1386.25 121.571 1605 88 1823.75 71.2143C2042.5 54.4286 2261.25 54.4286 2370.62 54.4286H2480V-6H2370.62C2261.25 -6 2042.5 -6 1823.75 -6C1605 -6 1386.25 -6 1167.5 -6C948.75 -6 730 -6 511.25 -6C292.5 -6 73.75 -6 -35.625 -6H-145V135Z"
              fill="#F9F9F9"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Programs;
