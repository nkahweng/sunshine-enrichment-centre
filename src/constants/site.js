// Plain data only: no asset or component imports. vite.config.js imports this
// file (through src/seo/head.js) at build time, in Node, to write per-route HTML
// and the sitemap. Anything added here must be loadable outside the browser.

export const SITE_URL = "https://www.secedu-academic.com";
export const SITE_NAME = "Sunshine Enrichment Centre";
export const SITE_SHORT_NAME = "SECEdu";
export const OG_IMAGE = "/og-image.jpg";
export const EMAIL = "secedu.spg@gmail.com";

export const WHATSAPP_NUMBER = "601158804476";

// Official SECEdu profiles, for the structured data's `sameAs`.
export const socialProfiles = [
  "https://www.facebook.com/profile.php?id=61585173486333",
  "https://www.instagram.com/secedu.official",
  "https://www.xiaohongshu.com/user/profile/670c849d000000000d026b89",
];

export const routes = {
  home: "/",
  about: "/about",
  learningClass: "/programs/learning-class",
  strengtheningClass: "/programs/strengthening-class",
  artCraft: "/programs/art-craft",
  pictureBook: "/programs/picture-book",
  roboticsSTEAM: "/programs/robotics-steam",
  englishEnrichment: "/programs/english-enrichment",
};

// <title> and meta description per route. Every route in `routes` needs an
// entry: the build writes one HTML file and one sitemap entry per key.
export const pageMeta = {
  [routes.home]: {
    title: "Sunshine Enrichment Centre (SECEdu) | Kluang & Simpang Renggam, Johor",
    description:
      "Play-based enrichment classes for children aged 3 to 18 in Kluang and Simpang Renggam, Johor: tuition, reading, English, art, and robotics & STEAM.",
  },
  [routes.about]: {
    title: "About Us | Sunshine Enrichment Centre (SECEdu)",
    description:
      "Since 2021, Sunshine Enrichment Centre has nurtured young minds in a warm, caring environment. Meet our founders and visit our Kluang and Simpang Renggam branches.",
  },
  [routes.learningClass]: {
    title: "Learning Class (Ages 4–12) | Sunshine Enrichment Centre",
    description:
      "Play-based tuition in Bahasa Melayu, Mandarin, English, Maths, Science and History for ages 4–12. Small groups of up to 10, aligned with Malaysia's national syllabus.",
  },
  [routes.strengtheningClass]: {
    title: "Strengthening Class (Ages 3–12) | Sunshine Enrichment Centre",
    description:
      "Build strong reading and writing foundations. Targeted practice and personalised guidance for children aged 3–12 in Kluang and Simpang Renggam, Johor.",
  },
  [routes.artCraft]: {
    title: "Art & Craft Classes (Ages 5–12) | Sunshine Enrichment Centre",
    description:
      "Every child is an artist. Guided art and craft projects for ages 5–12 that explore techniques, materials and self-expression while building confidence.",
  },
  [routes.pictureBook]: {
    title: "Picture Book Program (Ages 4–8) | Sunshine Enrichment Centre",
    description:
      "Early reading for ages 4–8: children learn to read both words and pictures, building comprehension, imagination and a love of books.",
  },
  [routes.roboticsSTEAM]: {
    title: "Robotics & STEAM Classes (Ages 4–18) | Sunshine Enrichment Centre",
    description:
      "Kids' robotics and coding classes in Johor for ages 4–18. Progressive levels build problem-solving, creativity and future-ready STEAM skills.",
  },
  [routes.englishEnrichment]: {
    title: "English Enrichment Class (Ages 7–17) | Sunshine Enrichment Centre",
    description:
      "Stop forcing grammar, start sparking communication. English enrichment for ages 7–17 that builds confident speaking, reading and writing.",
  },
};

export const notFoundMeta = {
  title: "Page Not Found | Sunshine Enrichment Centre",
  description: "The page you were looking for could not be found.",
};

export const branches = [
  {
    name: "Simpang Renggam, Johor",
    loc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.776978851222!2d103.30411167472577!3d1.832894298150339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d0633d87801baf%3A0x79c04b410df2b8c0!2zU3Vuc2hpbmUgRW5yaWNobWVudCBDZW50cmUg5ZCv56iL5pWZ6IKy5a2m5Lmg5Lit5b-D!5e0!3m2!1sen!2smy!4v1768883522837!5m2!1sen!2smy",
    address:
      " No. 10A & 11A, Jalan Jaya 1, Taman Berjaya, 86200 Simpang Renggam, Johor.",
    // Structured form of `address`, for search engines.
    postalAddress: {
      streetAddress: "No. 10A & 11A, Jalan Jaya 1, Taman Berjaya",
      postalCode: "86200",
      addressLocality: "Simpang Renggam",
    },
    weekday: "8.30 am - 7.00 pm",
    sat: "8.30 am - 5.30 pm",
    sun: "Closed",
  },
  {
    name: "Kluang, Johor",
    loc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.3949163777165!2d103.29011107472618!3d1.9970822979849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d06e943b50094d%3A0x6e7d5c5d33389d18!2s37%2C%20Jln%20Tasik%20Indah%201%2F5%2C%2086000%20Kluang%2C%20Johor%20Darul%20Ta%27;zim!5e0!3m2!1sen!2smy!4v1770711991214!5m2!1sen!2smy",
    address:
      "No. 37A & 39A, Jalan Tasik Indah 1/5, Taman Tasik Indah, 86000 Kluang, Johor Darul Ta'zim",
    postalAddress: {
      streetAddress: "No. 37A & 39A, Jalan Tasik Indah 1/5, Taman Tasik Indah",
      postalCode: "86000",
      addressLocality: "Kluang",
    },
    weekday: "8.30 am - 7.00 pm",
    sat: "Closed",
    sun: "Closed",
  },
];
