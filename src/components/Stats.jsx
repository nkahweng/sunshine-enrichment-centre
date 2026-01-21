import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

const Stats = () => {
  const sectionRef = useRef(null);
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const statItems = [
    { end: 100, suffix: "+", label: "Children thriving across programs" },
    { end: 7, prefix: ">", label: "Core programs developed in-house" },
    { end: 10, suffix: ":1", label: "Student-teacher ratio" },
    { end: 300, suffix: "%", label: "Growth since 2021 opening" },
  ];

  return (
    <div
      className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8"
      ref={sectionRef}
    >
      {statItems.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center p-4 rounded-2xl"
        >
          <span className="text-3xl font-bold mb-1 text-darkblue font-leagueSpartan">
            <span className=" font-medium mr-1">{item.prefix}</span>
            {startCount && <CountUp start={0} end={item.end} duration={2} />}
            <span className=" font-medium ml-1">{item.suffix}</span>
          </span>
          <span className="text-xs lg:text-sm font-medium text-gray-600 leading-tight">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Stats;
