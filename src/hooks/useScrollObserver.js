import { useEffect, useRef } from "react";

export const useScrollObserver = (threshold = 0.2) => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Safety check if ref isn't attached
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold },
    );

    const elements =
      containerRef.current.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [threshold]); // Re-run if threshold changes

  return containerRef;
};
