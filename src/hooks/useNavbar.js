import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const useNavbar = () => {
  const { pathname } = useLocation();
  const [isVisible, setIsVisible] = useState(true);
  const [isTransparent, setIsTransparent] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY; // window.scrollY tells how many pixels have been scrolled
      if (pathname === "/" && currentScrollY < 30) {
        setIsTransparent(true);
      } else {
        setIsTransparent(false);
      }

      // if actually got scroll
      if (currentScrollY != lastScrollY) {
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          // Scroll down
          setIsVisible(false);
        } else if (currentScrollY < lastScrollY) {
          // Scroll up
          setIsVisible(true);
        }
      }

      setLastScrollY(currentScrollY);
    };

    controlNavbar();

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [pathname, lastScrollY]);

  return { isVisible, isTransparent };
};
