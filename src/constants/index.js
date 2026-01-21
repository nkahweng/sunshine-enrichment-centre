import {
  BookOpenText,
  BicepsFlexed,
  Palette,
  BookMarked,
  Bot,
} from "lucide-react";
import {
  kw,
  rf,
  jc,
  learning,
  strengthening,
  artcraft,
  picturebook,
  robotics,
} from "../assets";

export const WHATSAPP_NUMBER = "601158804476";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi! I'm interested in learning more about Sunshine Enrichment Centre.")}`;

export const routes = {
  home: "/",
  about: "/about",
  learningClass: "/programs/learning-class",
  strengtheningClass: "/programs/strengthening-class",
  artCraft: "/programs/art-craft",
  pictureBook: "/programs/picture-book",
  roboticsSTEAM: "/programs/robotics-steam",
};

export const programs = [
  {
    id: "learning-class",
    icon: BookOpenText,
    title: "Learning Class",
    ages: "4 - 12 years",
    description:
      "A play-based academic programme that brings core subjects to life.",
    img: learning,
    route: routes.learningClass,
  },
  {
    id: "strengthening-class",
    icon: BicepsFlexed,
    title: "Strengthening Class",
    ages: "3 - 12 years",
    description:
      "Strengthens reading and writing skills through targeted practice and personalised guidance.",
    img: strengthening,
    route: routes.strengtheningClass,
  },
  {
    id: "art-n-craft",
    icon: Palette,
    title: "Art & Craft",
    ages: "5 - 12 years",
    description:
      "Explore art techniques, materials, and self-expression while building confidence through guided projects.",
    img: artcraft,
    route: routes.artCraft,
  },
  {
    id: "picture-book",
    icon: BookMarked,
    title: "Picture Book Program",
    ages: "4 - 8 years",
    description:
      "Learn to read both words and pictures for early reading, comprehension, and imagination.",
    img: picturebook,
    route: routes.pictureBook,
  },
  {
    id: "robotics-n-steam",
    icon: Bot,
    title: "Robotics & STEAM",
    ages: "4 - 18 years",
    description:
      "Develops problem-solving, creativity, and future-ready STEAM skills through progressive learning levels.",
    img: robotics,
    route: routes.roboticsSTEAM,
  },
];

export const testimonials = [
  {
    name: "Henry Creel",
    class: "Learning Class",
    description:
      '"I would say Sunshine is able to take his school stress away. I want to thank Lifestyle Hub for making learning enjoyable and fun for Kasheff, especially on Mind Day. “',
  },
  {
    name: "Mike Wheeler",
    class: "Art & Craft",
    description:
      '"I would say Sunshine is able to take his school stress away. I want to thank Lifestyle Hub for making learning enjoyable and fun for Kasheff, especially on Mind Day. “',
  },
  // {
  //   name: "Adam Groove",
  //   class: "Robotics & STEAM",
  //   description:
  //     '"I would say Sunshine is able to take his school stress away. I want to thank Lifestyle Hub for making learning enjoyable and fun for Kasheff, especially on Mind Day. “',
  // },
];

export const managements = [
  {
    name: "Ms. Lim",
    position: "Founder, SECEdu",
    description:
      '"I believe that learning should be a fun and engaging experience that inspires children to question, explore and discover."',
    imagePath: jc,
    alt: "Ms. Lim - Founder of SECEdu",
  },
  {
    name: "Mr. Chew",
    position: "Founder, SECEdu",
    description:
      '"Each child is unique, and I will have the highest expectations for each child so that they will have the confidence to be their best self."',
    imagePath: rf,
    alt: "Mr. Chew - Founder of SECEdu ",
  },
  {
    name: "Ms. Wong",
    position: "Head of centre",
    description:
      '"Education is not just about imparting knowledge; it’s about lighting the fire of curiosity and guiding each child to discover their unique potential."',
    imagePath: kw,
    alt: "Ms. Wong - Head of Centre of SECEdu",
  },
];

export const subjects = [
  {
    title: "Bahasa Melayu",
    color: "bg-[#F7941F]/80",
  },
  {
    title: "中文",
    color: "bg-[#F44640]/80",
  },
  {
    title: "English",
    color: "bg-[#37B376]/80",
  },
  {
    title: "Mathematics",
    color: "bg-[#14264D]/80",
  },
  {
    title: "Science",
    color: "bg-[#FAC946]/80",
  },
  {
    title: "History",
    color: "bg-[#7C46FA]/80",
  },
];
