import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

export const useNavbar = () => {
  const { pathname } = useLocation();
  const [isVisible, setIsVisible] = useState(true);
  const [isTransparent, setIsTransparent] = useState(true);
  // A ref, not state: it changes on every scroll event and nothing renders it.
  const lastScrollY = useRef(0);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY; // window.scrollY tells how many pixels have been scrolled
      if (pathname === "/" && currentScrollY < 30) {
        setIsTransparent(true);
      } else {
        setIsTransparent(false);
      }

      // if actually got scroll
      if (currentScrollY != lastScrollY.current) {
        if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
          // Scroll down
          setIsVisible(false);
        } else if (currentScrollY < lastScrollY.current) {
          // Scroll up
          setIsVisible(true);
        }
      }

      lastScrollY.current = currentScrollY;
    };

    controlNavbar();

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [pathname]);

  return { isVisible, isTransparent };
};
