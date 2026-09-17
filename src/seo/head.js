// Page <head> metadata, shared by the build (vite.config.js writes a static
// HTML file per route so crawlers that don't run JavaScript, like WhatsApp and
// Facebook link previews, see the right tags) and the browser (usePageMeta
// updates the same tags on client-side navigation).

import {
  EMAIL,
  OG_IMAGE,
  SITE_NAME,
  SITE_SHORT_NAME,
  SITE_URL,
  WHATSAPP_NUMBER,
  branches,
  notFoundMeta,
  pageMeta,
  socialProfiles,
} from "../constants/site.js";

const normalisePath = (path) =>
  path.length > 1 ? path.replace(/\/+$/, "") : path;

// Returns everything the <head> needs for a path. Unknown paths get the 404
// metadata with noindex, since the host serves the SPA shell (status 200) for
// them.
export const getPageMeta = (pathname) => {
  const path = normalisePath(pathname);
  const meta = pageMeta[path];
  return {
    ...(meta ?? notFoundMeta),
    url: SITE_URL + (path === "/" ? "/" : path),
    robots: meta ? "index, follow" : "noindex, follow",
  };
};

// "8.30 am - 7.00 pm" -> ["08:30", "19:00"]; "Closed" -> null
const parseHours = (range) => {
  const times = range.match(/\d{1,2}\.\d{2}\s*[ap]m/gi);
  if (!times || times.length !== 2) return null;
  return times.map((t) => {
    const [, h, m, ampm] = t.match(/(\d{1,2})\.(\d{2})\s*([ap]m)/i);
    const hour = (Number(h) % 12) + (ampm.toLowerCase() === "pm" ? 12 : 0);
    return `${String(hour).padStart(2, "0")}:${m}`;
  });
};

const openingHours = (branch) =>
  [
    [["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], branch.weekday],
    [["Saturday"], branch.sat],
    [["Sunday"], branch.sun],
  ]
    .map(([dayOfWeek, range]) => [dayOfWeek, parseHours(range)])
    .filter(([, hours]) => hours)
    .map(([dayOfWeek, [opens, closes]]) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek,
      opens,
      closes,
    }));

export const buildJsonLd = () => {
  const orgId = `${SITE_URL}/#organization`;
  const telephone = `+${WHATSAPP_NUMBER}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        "@id": orgId,
        name: SITE_NAME,
        alternateName: SITE_SHORT_NAME,
        url: `${SITE_URL}/`,
        logo: `${SITE_URL}/icon-512.png`,
        image: SITE_URL + OG_IMAGE,
        email: EMAIL,
        telephone,
        foundingDate: "2021",
        sameAs: socialProfiles,
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        name: SITE_NAME,
        alternateName: SITE_SHORT_NAME,
        url: `${SITE_URL}/`,
        publisher: { "@id": orgId },
      },
      ...branches.map((branch) => ({
        "@type": ["LocalBusiness", "EducationalOrganization"],
        "@id": `${SITE_URL}/#branch-${branch.postalAddress.addressLocality
          .toLowerCase()
          .replace(/\s+/g, "-")}`,
        name: `${SITE_NAME} – ${branch.postalAddress.addressLocality}`,
        parentOrganization: { "@id": orgId },
        url: `${SITE_URL}/about`,
        image: SITE_URL + OG_IMAGE,
        email: EMAIL,
        telephone,
        address: {
          "@type": "PostalAddress",
          ...branch.postalAddress,
          addressRegion: "Johor",
          addressCountry: "MY",
        },
        openingHoursSpecification: openingHours(branch),
      })),
    ],
  };
};

const escapeAttr = (value) =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;");

const escapeText = (value) =>
  String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;");

// The static tags for one route, as an HTML string for index.html's
// <!--app-head--> placeholder. usePageMeta looks these up by the same
// selectors, so keep the two in step.
export const renderHead = (pathname) => {
  const meta = getPageMeta(pathname);
  const image = SITE_URL + OG_IMAGE;
  // Stop "</script>" in the data from closing the tag early.
  const jsonLd = JSON.stringify(buildJsonLd()).replace(/</g, "\\u003c");
  return [
    `<title>${escapeText(meta.title)}</title>`,
    `<meta name="description" content="${escapeAttr(meta.description)}" />`,
    `<meta name="robots" content="${meta.robots}" />`,
    `<link rel="canonical" href="${escapeAttr(meta.url)}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${escapeAttr(SITE_NAME)}" />`,
    `<meta property="og:locale" content="en_MY" />`,
    `<meta property="og:title" content="${escapeAttr(meta.title)}" />`,
    `<meta property="og:description" content="${escapeAttr(meta.description)}" />`,
    `<meta property="og:url" content="${escapeAttr(meta.url)}" />`,
    `<meta property="og:image" content="${image}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:image:alt" content="${escapeAttr(SITE_NAME)} logo" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<script type="application/ld+json">${jsonLd}</script>`,
  ].join("\n    ");
};

export const buildSitemap = () => {
  const urls = Object.keys(pageMeta)
    .map((path) => `  <url><loc>${getPageMeta(path).url}</loc></url>`)
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
};
