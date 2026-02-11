import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { routes } from "../constants";

export const useNavbar = () => {
  const { pathname } = useLocation();
  const [isVisible, setIsVisible] = useState(true);
  const [isTransparent, setIsTransparent] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const isHomePage = pathname === "/";

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY; // window.scrollY tells how many pixels have been scrolled
      if (isHomePage && currentScrollY < 30) {
        setIsTransparent(true);
      } else {
        setIsTransparent(false);
      }

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY, location.pathname]);

  return { isVisible, isTransparent };
};
