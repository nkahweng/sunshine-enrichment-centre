import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getPageMeta } from "../seo/head";

const setAttr = (selector, attr, value) => {
  document.head.querySelector(selector)?.setAttribute(attr, value);
};

// Keeps the <head> tags written by the build (see src/seo/head.js) in step with
// client-side navigation. Updates the existing tags rather than rendering new
// ones, so the page never ends up with two descriptions or canonicals.
export const usePageMeta = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const { title, description, url, robots } = getPageMeta(pathname);
    document.title = title;
    setAttr('meta[name="description"]', "content", description);
    setAttr('meta[name="robots"]', "content", robots);
    setAttr('link[rel="canonical"]', "href", url);
    setAttr('meta[property="og:title"]', "content", title);
    setAttr('meta[property="og:description"]', "content", description);
    setAttr('meta[property="og:url"]', "content", url);
  }, [pathname]);
};
