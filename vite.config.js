import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { buildSitemap, renderHead } from "./src/seo/head.js";
import { pageMeta } from "./src/constants/site.js";

const HEAD_PLACEHOLDER = "<!--app-head-->";

// Fills index.html's <!--app-head--> with per-route <title>, meta and JSON-LD.
// The build writes one HTML file per route (about.html, programs/x.html) — Cloudflare
// Pages serves those at /about and /programs/x, and falls back to index.html for
// anything else. Also writes sitemap.xml.
const seoPages = () => ({
  name: "seo-pages",
  transformIndexHtml: {
    order: "post",
    handler(html, ctx) {
      // In dev the SPA shell serves every route; usePageMeta corrects the tags.
      return ctx.server ? html.replace(HEAD_PLACEHOLDER, renderHead("/")) : html;
    },
  },
  generateBundle: {
    order: "post",
    handler(_, bundle) {
      const shell = bundle["index.html"];
      const template = String(shell.source);
      for (const path of Object.keys(pageMeta)) {
        const html = template.replace(HEAD_PLACEHOLDER, renderHead(path));
        if (path === "/") {
          shell.source = html;
        } else {
          this.emitFile({
            type: "asset",
            fileName: `${path.slice(1)}.html`,
            source: html,
          });
        }
      }
      this.emitFile({
        type: "asset",
        fileName: "sitemap.xml",
        source: buildSitemap(),
      });
    },
  },
});

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), seoPages()],
});
